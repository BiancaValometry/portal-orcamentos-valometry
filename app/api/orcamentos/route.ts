import { NextRequest, NextResponse } from "next/server";
import { CLIENT_OPTIONS, OUTRO_CLIENTE } from "@/lib/clientOptions";
import { ExtractedBriefingSchema, type ExtractedBriefing } from "@/lib/extract";
import {
  FIELD,
  TIPO_PESQUISA_OPTION,
  CONSIDERAR_OPTION,
  LOI_OPTION,
  METODOLOGIA_QUANTI_OPTION,
  METODO_QUALITATIVO_OPTION,
  N_ENTREVISTAS_IDS,
  N_GRUPOS_FOCAIS_IDS,
  N_PARTICIPANTES_POR_GRUPO_IDS,
  createTask,
  setCustomField,
  attachFile,
  addComment,
} from "@/lib/clickup";

export const runtime = "nodejs";
export const maxDuration = 60;

function str(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v.trim() : "";
}

const CONSIDERAR_QUANTI_MAP: Record<string, string> = {
  programacao: CONSIDERAR_OPTION.quantiProgramacao,
  disparo: CONSIDERAR_OPTION.quantiDisparo,
  relatorio: CONSIDERAR_OPTION.quantiRelatorio,
  analises: CONSIDERAR_OPTION.quantiAnalises,
  apresentacao: CONSIDERAR_OPTION.quantiApresentacao,
};

const CONSIDERAR_QUALI_MAP: Record<string, string> = {
  recrutamento: CONSIDERAR_OPTION.qualiRecrutamento,
  incentivo: CONSIDERAR_OPTION.qualiIncentivo,
  moderacao: CONSIDERAR_OPTION.qualiModeracao,
  analises: CONSIDERAR_OPTION.qualiAnalises,
  gravacao: CONSIDERAR_OPTION.qualiGravacao,
  transcricao: CONSIDERAR_OPTION.qualiTranscricao,
};

const METODOLOGIA_QUANTI_MAP: Record<string, string> = {
  cati: METODOLOGIA_QUANTI_OPTION.cati,
  painel_online: METODOLOGIA_QUANTI_OPTION.painelOnline,
  fornecedor_propoe: METODOLOGIA_QUANTI_OPTION.fornecedorPropoe,
};

const METODO_QUALITATIVO_MAP: Record<string, string> = {
  idi: METODO_QUALITATIVO_OPTION.idi,
  grupos_focais: METODO_QUALITATIVO_OPTION.gruposFocais,
  diade: METODO_QUALITATIVO_OPTION.diade,
};

const FRENTE_LABEL: Record<string, string> = {
  quanti: "Quantitativa",
  quali: "Qualitativa",
  social_listening: "Social Listening",
  freelas: "Freelas / serviço avulso",
};

function buildDescription(params: {
  solicitanteNome: string;
  solicitanteEmail: string;
  clienteNome: string;
  projeto: string;
  prazo: string;
  textoLivre: string;
  extraido: ExtractedBriefing | null;
  arquivosNomes: string[];
}) {
  const { solicitanteNome, solicitanteEmail, clienteNome, projeto, prazo, textoLivre, extraido, arquivosNomes } = params;
  const lines: string[] = [];
  lines.push(`## Solicitação de orçamento`);
  lines.push(``);
  lines.push(`**Solicitante:** ${solicitanteNome} (${solicitanteEmail})`);
  lines.push(`**Cliente:** ${clienteNome}`);
  lines.push(`**Projeto:** ${projeto}`);
  if (prazo) lines.push(`**Prazo desejado:** ${prazo}`);

  if (extraido) {
    lines.push(`**Frentes identificadas pela IA:** ${extraido.frentes.map((f) => FRENTE_LABEL[f] ?? f).join(", ") || "nenhuma identificada"}`);
    lines.push(``, `### Resumo (IA)`, extraido.resumo);

    if (extraido.quanti) {
      lines.push(``, `### Quantitativa`);
      if (extraido.quanti.amostra_total) lines.push(`- Amostra total: ${extraido.quanti.amostra_total}`);
      if (extraido.quanti.loi) lines.push(`- LOI: ${extraido.quanti.loi}`);
      if (extraido.quanti.metodologia.length) lines.push(`- Metodologia: ${extraido.quanti.metodologia.join(", ")}`);
      if (extraido.quanti.perfil_respondentes) lines.push(`- Perfil dos respondentes/cotas: ${extraido.quanti.perfil_respondentes}`);
      if (extraido.quanti.servicos.length) lines.push(`- Cotar: ${extraido.quanti.servicos.join(", ")}`);
    }
    if (extraido.quali) {
      lines.push(``, `### Qualitativa`);
      if (extraido.quali.metodos.length) lines.push(`- Métodos: ${extraido.quali.metodos.join(", ")}`);
      if (extraido.quali.n_entrevistas) lines.push(`- Nº de entrevistas/díades: ${extraido.quali.n_entrevistas}`);
      if (extraido.quali.n_grupos_focais) lines.push(`- Nº de grupos focais: ${extraido.quali.n_grupos_focais}`);
      if (extraido.quali.n_participantes_por_grupo) lines.push(`- Participantes por grupo: ${extraido.quali.n_participantes_por_grupo}`);
      if (extraido.quali.perfil_entrevistados) lines.push(`- Perfil dos entrevistados: ${extraido.quali.perfil_entrevistados}`);
      if (extraido.quali.servicos.length) lines.push(`- Cotar: ${extraido.quali.servicos.join(", ")}`);
    }
    if (extraido.social_listening) {
      lines.push(``, `### Social Listening`, extraido.social_listening.detalhe || "_(sem detalhamento)_");
    }
    if (extraido.freelas) {
      lines.push(``, `### Freelas / serviço avulso`, extraido.freelas.detalhe || "_(sem detalhamento)_");
    }
    if (extraido.faltando.length) {
      lines.push(``, `### ⚠️ Faltou informar (identificado pela IA)`);
      for (const item of extraido.faltando) lines.push(`- ${item}`);
    }
  }

  lines.push(``, `### Texto original do solicitante`, textoLivre);

  if (arquivosNomes.length) {
    lines.push(``, `**Arquivos enviados:** ${arquivosNomes.join(", ")}`);
  }

  return lines.join("\n");
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const solicitanteNome = str(form.get("solicitanteNome"));
    const solicitanteEmail = str(form.get("solicitanteEmail"));
    const clienteId = str(form.get("clienteId"));
    const clienteOutro = str(form.get("clienteOutro"));
    const projeto = str(form.get("projeto"));
    const prazo = str(form.get("prazo"));
    const textoLivre = str(form.get("textoLivre"));
    const extraidoRaw = str(form.get("extraido"));

    const arquivos = form.getAll("arquivos").filter((f): f is File => f instanceof File && f.size > 0);

    if (!solicitanteNome || !solicitanteEmail || !clienteId || !projeto || !textoLivre) {
      return NextResponse.json({ ok: false, error: "Campos obrigatórios ausentes." }, { status: 400 });
    }

    let extraido: ExtractedBriefing | null = null;
    if (extraidoRaw) {
      const parsed = ExtractedBriefingSchema.safeParse(JSON.parse(extraidoRaw));
      if (parsed.success) extraido = parsed.data;
    }

    const clienteNome =
      clienteId === OUTRO_CLIENTE
        ? clienteOutro || "Não informado"
        : CLIENT_OPTIONS.find((c) => c.id === clienteId)?.name ?? "Não identificado";

    const description = buildDescription({
      solicitanteNome,
      solicitanteEmail,
      clienteNome,
      projeto,
      prazo,
      textoLivre,
      extraido,
      arquivosNomes: arquivos.map((f) => f.name),
    });

    const tags = [
      ...(extraido?.frentes.includes("quanti") ? ["quanti"] : []),
      ...(extraido?.frentes.includes("quali") ? ["quali"] : []),
      ...(extraido?.frentes.includes("social_listening") ? ["social-listening"] : []),
      ...(extraido?.frentes.includes("freelas") ? ["freelas"] : []),
      "solicitacao-portal",
    ];

    const dueDateMs = prazo ? new Date(`${prazo}T12:00:00`).getTime() : undefined;

    const task = await createTask({
      name: `[${clienteNome}] ${projeto}`,
      description,
      tags,
      dueDateMs,
    });

    const fieldFailures: string[] = [];
    async function set(fieldId: string, value: unknown, label: string) {
      if (value === undefined || value === null || value === "") return;
      const result = await setCustomField(task.id, fieldId, value);
      if (!result.ok) fieldFailures.push(`${label} (${result.error ?? "erro desconhecido"})`);
    }

    if (clienteId && clienteId !== OUTRO_CLIENTE) await set(FIELD.cliente, clienteId, "Cliente");
    await set(FIELD.projeto, projeto, "Projeto");
    if (dueDateMs) await set(FIELD.entregaFinal, dueDateMs, "Entrega Final");
    if (extraido?.resumo) await set(FIELD.observacoes, extraido.resumo, "Observações (resumo IA)");
    if (extraido?.freelas?.detalhe) await set(FIELD.servicosAdicionais, extraido.freelas.detalhe, "Freelas/serviços adicionais");

    if (extraido) {
      const temQuanti = extraido.frentes.includes("quanti");
      const temQuali = extraido.frentes.includes("quali");
      const tipoPesquisaValue =
        temQuanti && temQuali
          ? TIPO_PESQUISA_OPTION.Ambas
          : temQuanti
          ? TIPO_PESQUISA_OPTION.Quanti
          : temQuali
          ? TIPO_PESQUISA_OPTION.Quali
          : TIPO_PESQUISA_OPTION.Nenhuma;
      await set(FIELD.tipoPesquisa, tipoPesquisaValue, "Tipo de Pesquisa");

      const considerarIds = [
        ...(extraido.quanti?.servicos.map((s) => CONSIDERAR_QUANTI_MAP[s]).filter(Boolean) ?? []),
        ...(extraido.quali?.servicos.map((s) => CONSIDERAR_QUALI_MAP[s]).filter(Boolean) ?? []),
      ] as string[];
      if (considerarIds.length) await set(FIELD.considerarOrcamento, considerarIds, "O que deve ser considerado");

      if (extraido.quanti) {
        const q = extraido.quanti;
        if (q.amostra_total) await set(FIELD.amostraQuanti, q.amostra_total, "Amostra Quanti");
        if (q.loi) await set(FIELD.loi, LOI_OPTION[q.loi], "LOI");
        if (q.perfil_respondentes) await set(FIELD.perfilRespondentesQuanti, q.perfil_respondentes, "Perfil respondentes");
        const metIds = q.metodologia.map((m) => METODOLOGIA_QUANTI_MAP[m]).filter(Boolean) as string[];
        if (metIds.length) await set(FIELD.metodologiaQuanti, metIds, "Metodologia Quanti");
      }

      if (extraido.quali) {
        const ql = extraido.quali;
        const metodoIds = ql.metodos.map((m) => METODO_QUALITATIVO_MAP[m]).filter(Boolean) as string[];
        if (metodoIds.length) await set(FIELD.metodosQualitativos, metodoIds, "Métodos qualitativos");
        if (ql.n_entrevistas && ql.n_entrevistas >= 1 && ql.n_entrevistas < N_ENTREVISTAS_IDS.length) {
          await set(FIELD.nEntrevistas, N_ENTREVISTAS_IDS[Math.round(ql.n_entrevistas)], "Nº de entrevistas");
        }
        if (ql.n_grupos_focais && ql.n_grupos_focais >= 1 && ql.n_grupos_focais < N_GRUPOS_FOCAIS_IDS.length) {
          await set(FIELD.nGruposFocais, N_GRUPOS_FOCAIS_IDS[Math.round(ql.n_grupos_focais)], "Nº de grupos focais");
        }
        if (ql.n_participantes_por_grupo) {
          const id = N_PARTICIPANTES_POR_GRUPO_IDS[Math.round(ql.n_participantes_por_grupo)];
          if (id) await set(FIELD.nParticipantesPorGrupo, id, "Participantes por grupo");
        }
        if (ql.perfil_entrevistados) await set(FIELD.perfilEntrevistadosQuali, ql.perfil_entrevistados, "Perfil entrevistados");
      }
    }

    const attachFailures: string[] = [];
    for (const file of arquivos) {
      const result = await attachFile(task.id, file);
      if (!result.ok) attachFailures.push(`${file.name} (${result.error ?? "erro desconhecido"})`);
    }

    if (fieldFailures.length || attachFailures.length) {
      const noteLines = [`⚠️ Preenchimento automático incompleto (a descrição acima tem o texto original completo):`];
      if (fieldFailures.length) noteLines.push(`- Campos não preenchidos: ${fieldFailures.join("; ")}`);
      if (attachFailures.length) noteLines.push(`- Arquivos não anexados: ${attachFailures.join("; ")}`);
      await addComment(task.id, noteLines.join("\n"));
    }

    return NextResponse.json({ ok: true, taskId: task.id });
  } catch (err: any) {
    console.error("Erro ao processar solicitação de orçamento:", err);
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Erro inesperado ao processar a solicitação." },
      { status: 500 }
    );
  }
}
