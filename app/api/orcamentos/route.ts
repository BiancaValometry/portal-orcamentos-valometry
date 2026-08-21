import { NextRequest, NextResponse } from "next/server";
import { CLIENT_OPTIONS, OUTRO_CLIENTE } from "@/lib/clientOptions";
import { FIELD, createTask, setCustomField, attachFile, addComment } from "@/lib/clickup";
import { gerarBriefingGenerico, nomeArquivoSeguro, type DadosBasicos } from "@/lib/docx";

export const runtime = "nodejs";
export const maxDuration = 60;

function str(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v.trim() : "";
}

function buildDescription(params: {
  solicitanteNome: string;
  solicitanteEmail: string;
  clienteNome: string;
  projeto: string;
  prazo: string;
  textoLivre: string;
  arquivosNomes: string[];
}) {
  const { solicitanteNome, solicitanteEmail, clienteNome, projeto, prazo, textoLivre, arquivosNomes } = params;
  const lines: string[] = [];
  lines.push(`## Solicitação de orçamento`);
  lines.push(``);
  lines.push(`**Solicitante:** ${solicitanteNome} (${solicitanteEmail})`);
  lines.push(`**Cliente:** ${clienteNome}`);
  lines.push(`**Projeto:** ${projeto}`);
  if (prazo) lines.push(`**Prazo desejado:** ${prazo}`);

  lines.push(``, `### Descrição do solicitante`);
  lines.push(textoLivre || "_(não informado — aguardando detalhamento)_");

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

    const arquivos = form.getAll("arquivos").filter((f): f is File => f instanceof File && f.size > 0);

    if (!solicitanteNome || !solicitanteEmail || !clienteId || !projeto) {
      return NextResponse.json({ ok: false, error: "Campos obrigatórios ausentes." }, { status: 400 });
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
      arquivosNomes: arquivos.map((f) => f.name),
    });

    const dueDateMs = prazo ? new Date(`${prazo}T12:00:00`).getTime() : undefined;

    const task = await createTask({
      name: `[${clienteNome}] ${projeto}`,
      description,
      tags: ["solicitacao-portal"],
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

    const attachFailures: string[] = [];
    for (const file of arquivos) {
      const result = await attachFile(task.id, file, file.name);
      if (!result.ok) attachFailures.push(`${file.name} (${result.error ?? "erro desconhecido"})`);
    }

    // ---------- Gera e anexa UM briefing organizado em .docx com o texto original ----------
    // Sem IA disponível: nada de classificar por frente. Só formata o texto exatamente
    // como o solicitante escreveu, com os dados básicos no topo, e anexa na task.
    const briefingFailures: string[] = [];
    let briefingGerado = false;
    if (textoLivre) {
      const dadosBasicos: DadosBasicos = {
        cliente: clienteNome,
        projeto,
        solicitante: `${solicitanteNome} (${solicitanteEmail})`,
        prazo,
      };
      const slug = nomeArquivoSeguro(projeto) || task.id;
      const filename = `Briefing-${slug}.docx`;
      try {
        const buf = await gerarBriefingGenerico(dadosBasicos, textoLivre);
        const blob = new Blob([new Uint8Array(buf)], {
          type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });
        const result = await attachFile(task.id, blob, filename);
        if (result.ok) briefingGerado = true;
        else briefingFailures.push(`${filename} (${result.error ?? "erro desconhecido"})`);
      } catch (err: any) {
        briefingFailures.push(`geração do briefing (${err?.message ?? "erro desconhecido"})`);
      }
    }

    if (fieldFailures.length || attachFailures.length || briefingFailures.length) {
      const noteLines = [`⚠️ Preenchimento automático incompleto (a descrição acima tem o texto original completo):`];
      if (fieldFailures.length) noteLines.push(`- Campos não preenchidos: ${fieldFailures.join("; ")}`);
      if (attachFailures.length) noteLines.push(`- Arquivos não anexados: ${attachFailures.join("; ")}`);
      if (briefingFailures.length) noteLines.push(`- Briefing organizado não gerado/anexado: ${briefingFailures.join("; ")}`);
      await addComment(task.id, noteLines.join("\n"));
    } else if (briefingGerado) {
      await addComment(task.id, `📎 Briefing organizado gerado automaticamente e anexado a esta task.`);
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
