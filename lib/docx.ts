// Gera os mini-briefings em .docx (um por frente: quanti/quali/social listening/
// freelas) a partir dos dados que a IA extraiu do texto livre do solicitante.
// Cada arquivo traz só o essencial pra cotar aquele serviço específico com
// fornecedores, no padrão que a Bianca usa manualmente hoje.

import { Document, Packer, Paragraph, TextRun, HeadingLevel } from "docx";
import type { ExtractedBriefing } from "./extract";

export type DadosBasicos = {
  cliente: string;
  projeto: string;
  solicitante: string;
  prazo?: string;
};

function heading(text: string): Paragraph {
  return new Paragraph({ text, heading: HeadingLevel.HEADING_1, spacing: { after: 200 } });
}

function subheading(text: string): Paragraph {
  return new Paragraph({ text, heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 100 } });
}

function campo(label: string, valor: string | number | null | undefined): Paragraph | null {
  if (valor === null || valor === undefined || valor === "") return null;
  return new Paragraph({
    children: [new TextRun({ text: `${label}: `, bold: true }), new TextRun({ text: String(valor) })],
    spacing: { after: 100 },
  });
}

function lista(label: string, itens: string[]): Paragraph[] {
  if (!itens.length) return [];
  return [
    new Paragraph({ children: [new TextRun({ text: `${label}:`, bold: true })], spacing: { after: 50 } }),
    ...itens.map((item) => new Paragraph({ text: `• ${item}`, spacing: { after: 30 } })),
  ];
}

function dadosBasicosParagraphs(d: DadosBasicos): Paragraph[] {
  return [campo("Cliente", d.cliente), campo("Projeto", d.projeto), campo("Solicitante", d.solicitante), campo("Prazo desejado", d.prazo)].filter(
    (p): p is Paragraph => p !== null
  );
}

async function toBuffer(children: Paragraph[]): Promise<Buffer> {
  const doc = new Document({ sections: [{ properties: {}, children }] });
  return Packer.toBuffer(doc);
}

const METODOLOGIA_LABEL: Record<string, string> = {
  cati: "CATI (entrevista telefônica assistida por computador)",
  painel_online: "Painel online",
  fornecedor_propoe: "Fornecedor pode propor o melhor método",
};

const SERVICO_QUANTI_LABEL: Record<string, string> = {
  programacao: "Programação de pesquisa",
  disparo: "Disparo (fornecimento de painel/CATI etc)",
  relatorio: "Relatório / Dash",
  analises: "Análises",
  apresentacao: "Apresentação",
};

const METODO_QUALI_LABEL: Record<string, string> = {
  idi: "Entrevistas em profundidade (IDI)",
  grupos_focais: "Grupos focais",
  diade: "Entrevistas em dupla (Díade)",
};

const SERVICO_QUALI_LABEL: Record<string, string> = {
  recrutamento: "Recrutamento",
  incentivo: "Pagamento de incentivo",
  moderacao: "Moderação / entrevistas",
  analises: "Análises",
  gravacao: "Gravação",
  transcricao: "Transcrição",
};

export async function gerarBriefingQuanti(
  dados: DadosBasicos,
  q: NonNullable<ExtractedBriefing["quanti"]>
): Promise<Buffer> {
  const children = [
    heading("Briefing de Amostra — Quantitativa"),
    ...dadosBasicosParagraphs(dados),
    subheading("Amostra"),
    campo("Amostra total", q.amostra_total),
    campo("LOI (duração do questionário)", q.loi),
    ...lista("Metodologia", q.metodologia.map((m) => METODOLOGIA_LABEL[m] ?? m)),
    campo("Perfil dos respondentes e cotas", q.perfil_respondentes),
    ...lista("Serviços a cotar", q.servicos.map((s) => SERVICO_QUANTI_LABEL[s] ?? s)),
  ].filter((p): p is Paragraph => p !== null);
  return toBuffer(children);
}

export async function gerarBriefingQuali(
  dados: DadosBasicos,
  ql: NonNullable<ExtractedBriefing["quali"]>
): Promise<Buffer> {
  const children = [
    heading("Briefing de Amostra — Qualitativa"),
    ...dadosBasicosParagraphs(dados),
    subheading("Amostra"),
    ...lista("Métodos", ql.metodos.map((m) => METODO_QUALI_LABEL[m] ?? m)),
    campo("Nº de entrevistas / díades", ql.n_entrevistas),
    campo("Nº de grupos focais", ql.n_grupos_focais),
    campo("Participantes por grupo", ql.n_participantes_por_grupo),
    campo("Perfil dos entrevistados", ql.perfil_entrevistados),
    ...lista("Serviços a cotar", ql.servicos.map((s) => SERVICO_QUALI_LABEL[s] ?? s)),
  ].filter((p): p is Paragraph => p !== null);
  return toBuffer(children);
}

export async function gerarBriefingSocial(dados: DadosBasicos, detalhe: string | null): Promise<Buffer> {
  const children = [
    heading("Briefing — Social Listening"),
    ...dadosBasicosParagraphs(dados),
    subheading("Detalhamento"),
    new Paragraph({ text: detalhe || "(sem detalhamento adicional)" }),
  ];
  return toBuffer(children);
}

export async function gerarBriefingFreelas(dados: DadosBasicos, detalhe: string | null): Promise<Buffer> {
  const children = [
    heading("Briefing — Freelas / Serviço Avulso"),
    ...dadosBasicosParagraphs(dados),
    subheading("Detalhamento"),
    new Paragraph({ text: detalhe || "(sem detalhamento adicional)" }),
  ];
  return toBuffer(children);
}

// Sem IA disponível no momento: em vez de gerar um briefing por frente a partir
// de dados estruturados extraídos por IA, geramos UM anexo organizado com o
// texto exatamente como o solicitante escreveu (fonte da verdade), só formatado
// em .docx com os dados básicos no topo — nada de classificação automática.
export async function gerarBriefingGenerico(dados: DadosBasicos, textoLivre: string): Promise<Buffer> {
  const linhas = textoLivre.split(/\r?\n/);
  const children = [
    heading("Briefing — Solicitação de Orçamento"),
    ...dadosBasicosParagraphs(dados),
    subheading("Descrição enviada pelo solicitante"),
    ...linhas.map((linha) => new Paragraph({ text: linha || " ", spacing: { after: 100 } })),
  ];
  return toBuffer(children);
}

export function nomeArquivoSeguro(base: string): string {
  return base
    .normalize("NFD")
    .replace(new RegExp("[\\u0300-\\u036f]", "g"), "")
    .replace(/[^a-zA-Z0-9 -]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}
