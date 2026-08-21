import { NextRequest, NextResponse } from "next/server";
import { CLIENT_OPTIONS, OUTRO_CLIENTE } from "@/lib/clientOptions";
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

function bool(v: FormDataEntryValue | null): boolean {
  return v === "true";
}

function str(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const solicitanteNome = str(form.get("solicitanteNome"));
    const solicitanteEmail = str(form.get("solicitanteEmail"));
    const clienteId = str(form.get("clienteId"));
    const clienteOutro = str(form.get("clienteOutro"));
    const projeto = str(form.get("projeto"));
    const prazo = str(form.get("prazo")); // yyyy-mm-dd

    const frenteQuanti = bool(form.get("frenteQuanti"));
    const frenteQuali = bool(form.get("frenteQuali"));
    const frenteSocial = bool(form.get("frenteSocial"));

    const amostraTotal = str(form.get("amostraTotal"));
    const loi = str(form.get("loi"));
    const metCati = bool(form.get("metCati"));
    const metPainel = bool(form.get("metPainel"));
    const metFornecedorPropoe = bool(form.get("metFornecedorPropoe"));
    const perfilRespondentes = str(form.get("perfilRespondentes"));
    const cQuantiProgramacao = bool(form.get("cQuantiProgramacao"));
    const cQuantiDisparo = bool(form.get("cQuantiDisparo"));
    const cQuantiRelatorio = bool(form.get("cQuantiRelatorio"));
    const cQuantiAnalises = bool(form.get("cQuantiAnalises"));
    const cQuantiApresentacao = bool(form.get("cQuantiApresentacao"));

    const metIdi = bool(form.get("metIdi"));
    const metGruposFocais = bool(form.get("metGruposFocais"));
    const metDiade = bool(form.get("metDiade"));
    const nEntrevistas = str(form.get("nEntrevistas"));
    const nGruposFocais = str(form.get("nGruposFocais"));
    const nParticipantesPorGrupo = str(form.get("nParticipantesPorGrupo"));
    const perfilEntrevistados = str(form.get("perfilEntrevistados"));
    const cQualiRecrutamento = bool(form.get("cQualiRecrutamento"));
    const cQualiIncentivo = bool(form.get("cQualiIncentivo"));
    const cQualiModeracao = bool(form.get("cQualiModeracao"));
    const cQualiAnalises = bool(form.get("cQualiAnalises"));
    const cQualiGravacao = bool(form.get("cQualiGravacao"));
    const cQualiTranscricao = bool(form.get("cQualiTranscricao"));

    const socialDetalhe = str(form.get("socialDetalhe"));
    const servicosAdicionais = str(form.get("servicosAdicionais"));
    const observacoes = str(form.get("observacoes"));

    const arquivos = form.getAll("arquivos").filter((f): f is File => f instanceof File && f.size > 0);

    if (!solicitanteNome || !solicitanteEmail || !clienteId || !projeto) {
      return NextResponse.json({ ok: false, error: "Campos obrigatórios ausentes." }, { status: 400 });
    }
    if (!frenteQuanti && !frenteQuali && !frenteSocial) {
      return NextResponse.json({ ok: false, error: "Selecione ao menos uma frente de pesquisa." }, { status: 400 });
    }

    const clienteNome =
      clienteId === OUTRO_CLIENTE
        ? clienteOutro || "Não informado"
        : CLIENT_OPTIONS.find((c) => c.id === clienteId)?.name ?? "Não identificado";

    const frentesLabels = [
      frenteQuanti ? "Quantitativa" : null,
      frenteQuali ? "Qualitativa" : null,
      frenteSocial ? "Social Listening" : null,
    ].filter(Boolean);

    // ---------- Monta a descrição completa (fonte da verdade, sempre visível) ----------
    const lines: string[] = [];
    lines.push(`## Solicitação de orçamento`);
    lines.push(``);
    lines.push(`**Solicitante:** ${solicitanteNome} (${solicitanteEmail})`);
    lines.push(`**Cliente:** ${clienteNome}`);
    lines.push(`**Projeto:** ${projeto}`);
    if (prazo) lines.push(`**Prazo desejado:** ${prazo}`);
    lines.push(`**Frentes solicitadas:** ${frentesLabels.join(", ")}`);

    if (frenteQuanti) {
      lines.push(``, `### Quantitativa`);
      if (amostraTotal) lines.push(`- Amostra total: ${amostraTotal}`);
      if (loi) lines.push(`- LOI: ${loi}`);
      const metodologias = [
        metCati ? "CATI" : null,
        metPainel ? "Painel online" : null,
        metFornecedorPropoe ? "Fornecedor pode propor o método" : null,
      ].filter(Boolean);
      if (metodologias.length) lines.push(`- Metodologia: ${metodologias.join(", ")}`);
      if (perfilRespondentes) lines.push(`- Perfil dos respondentes/cotas: ${perfilRespondentes}`);
      const considerarQuanti = [
        cQuantiProgramacao ? "Programação de pesquisa" : null,
        cQuantiDisparo ? "Disparo (painel/CATI etc)" : null,
        cQuantiRelatorio ? "Relatório/Dash" : null,
        cQuantiAnalises ? "Análises" : null,
        cQuantiApresentacao ? "Apresentação" : null,
      ].filter(Boolean);
      if (considerarQuanti.length) lines.push(`- Cotar: ${considerarQuanti.join(", ")}`);
    }

    if (frenteQuali) {
      lines.push(``, `### Qualitativa`);
      const metodosQuali = [
        metIdi ? "IDI" : null,
        metGruposFocais ? "Grupos focais" : null,
        metDiade ? "Díade" : null,
      ].filter(Boolean);
      if (metodosQuali.length) lines.push(`- Métodos: ${metodosQuali.join(", ")}`);
      if (nEntrevistas) lines.push(`- Nº de entrevistas/díades: ${nEntrevistas}`);
      if (nGruposFocais) lines.push(`- Nº de grupos focais: ${nGruposFocais}`);
      if (nParticipantesPorGrupo) lines.push(`- Participantes por grupo: ${nParticipantesPorGrupo}`);
      if (perfilEntrevistados) lines.push(`- Perfil dos entrevistados: ${perfilEntrevistados}`);
      const considerarQuali = [
        cQualiRecrutamento ? "Recrutamento" : null,
        cQualiIncentivo ? "Pagamento de incentivo" : null,
        cQualiModeracao ? "Moderação/entrevistas" : null,
        cQualiAnalises ? "Análises" : null,
        cQualiGravacao ? "Gravação" : null,
        cQualiTranscricao ? "Transcrição" : null,
      ].filter(Boolean);
      if (considerarQuali.length) lines.push(`- Cotar: ${considerarQuali.join(", ")}`);
    }

    if (frenteSocial) {
      lines.push(``, `### Social Listening`);
      lines.push(socialDetalhe || "_(sem detalhamento adicional)_");
    }

    if (servicosAdicionais) lines.push(``, `### Serviços adicionais`, servicosAdicionais);
    if (observacoes) lines.push(``, `### Observações`, observacoes);

    if (arquivos.length) {
      lines.push(``, `**Arquivos enviados:** ${arquivos.map((f) => f.name).join(", ")}`);
    }

    const description = lines.join("\n");

    const tags = [
      ...(frenteQuanti ? ["quanti"] : []),
      ...(frenteQuali ? ["quali"] : []),
      ...(frenteSocial ? ["social-listening"] : []),
      "solicitacao-portal",
    ];

    const dueDateMs = prazo ? new Date(`${prazo}T12:00:00`).getTime() : undefined;

    // ---------- Cria a task ----------
    const task = await createTask({
      name: `[${clienteNome}] ${projeto}`,
      description,
      tags,
      dueDateMs,
    });

    // ---------- Preenche custom fields (melhor esforço, task já existe de qualquer forma) ----------
    const fieldFailures: string[] = [];

    async function set(fieldId: string, value: unknown, label: string) {
      if (value === undefined || value === null || value === "") return;
      const result = await setCustomField(task.id, fieldId, value);
      if (!result.ok) fieldFailures.push(`${label} (${result.error ?? "erro desconhecido"})`);
    }

    if (clienteId && clienteId !== OUTRO_CLIENTE) {
      await set(FIELD.cliente, clienteId, "Cliente");
    }
    await set(FIELD.projeto, projeto, "Projeto");

    const tipoPesquisaValue = frenteQuanti && frenteQuali
      ? TIPO_PESQUISA_OPTION.Ambas
      : frenteQuanti
      ? TIPO_PESQUISA_OPTION.Quanti
      : frenteQuali
      ? TIPO_PESQUISA_OPTION.Quali
      : TIPO_PESQUISA_OPTION.Nenhuma;
    await set(FIELD.tipoPesquisa, tipoPesquisaValue, "Tipo de Pesquisa");

    const considerarIds = [
      cQuantiProgramacao ? CONSIDERAR_OPTION.quantiProgramacao : null,
      cQuantiDisparo ? CONSIDERAR_OPTION.quantiDisparo : null,
      cQuantiRelatorio ? CONSIDERAR_OPTION.quantiRelatorio : null,
      cQuantiAnalises ? CONSIDERAR_OPTION.quantiAnalises : null,
      cQuantiApresentacao ? CONSIDERAR_OPTION.quantiApresentacao : null,
      cQualiRecrutamento ? CONSIDERAR_OPTION.qualiRecrutamento : null,
      cQualiIncentivo ? CONSIDERAR_OPTION.qualiIncentivo : null,
      cQualiModeracao ? CONSIDERAR_OPTION.qualiModeracao : null,
      cQualiAnalises ? CONSIDERAR_OPTION.qualiAnalises : null,
      cQualiGravacao ? CONSIDERAR_OPTION.qualiGravacao : null,
      cQualiTranscricao ? CONSIDERAR_OPTION.qualiTranscricao : null,
    ].filter((v): v is string => Boolean(v));
    if (considerarIds.length) await set(FIELD.considerarOrcamento, considerarIds, "O que deve ser considerado");

    if (amostraTotal) await set(FIELD.amostraQuanti, Number(amostraTotal), "Amostra Quanti");
    if (loi) await set(FIELD.loi, LOI_OPTION[loi], "LOI");
    if (perfilRespondentes) await set(FIELD.perfilRespondentesQuanti, perfilRespondentes, "Perfil respondentes");

    const metodologiaIds = [
      metCati ? METODOLOGIA_QUANTI_OPTION.cati : null,
      metPainel ? METODOLOGIA_QUANTI_OPTION.painelOnline : null,
      metFornecedorPropoe ? METODOLOGIA_QUANTI_OPTION.fornecedorPropoe : null,
    ].filter((v): v is string => Boolean(v));
    if (metodologiaIds.length) await set(FIELD.metodologiaQuanti, metodologiaIds, "Metodologia Quanti");

    const metodosQualiIds = [
      metIdi ? METODO_QUALITATIVO_OPTION.idi : null,
      metGruposFocais ? METODO_QUALITATIVO_OPTION.gruposFocais : null,
      metDiade ? METODO_QUALITATIVO_OPTION.diade : null,
    ].filter((v): v is string => Boolean(v));
    if (metodosQualiIds.length) await set(FIELD.metodosQualitativos, metodosQualiIds, "Métodos qualitativos");

    if (nEntrevistas) {
      const idx = Number(nEntrevistas);
      if (idx >= 1 && idx < N_ENTREVISTAS_IDS.length) {
        await set(FIELD.nEntrevistas, N_ENTREVISTAS_IDS[idx], "Nº de entrevistas");
      }
    }
    if (nGruposFocais) {
      const idx = Number(nGruposFocais);
      if (idx >= 1 && idx < N_GRUPOS_FOCAIS_IDS.length) {
        await set(FIELD.nGruposFocais, N_GRUPOS_FOCAIS_IDS[idx], "Nº de grupos focais");
      }
    }
    if (nParticipantesPorGrupo) {
      const id = N_PARTICIPANTES_POR_GRUPO_IDS[Number(nParticipantesPorGrupo)];
      if (id) await set(FIELD.nParticipantesPorGrupo, id, "Participantes por grupo");
    }
    if (perfilEntrevistados) await set(FIELD.perfilEntrevistadosQuali, perfilEntrevistados, "Perfil entrevistados");

    if (dueDateMs) await set(FIELD.entregaFinal, dueDateMs, "Entrega Final");
    if (observacoes) await set(FIELD.observacoes, observacoes, "Observações");
    if (servicosAdicionais) await set(FIELD.servicosAdicionais, servicosAdicionais, "Serviços adicionais");

    // ---------- Anexa arquivos ----------
    const attachFailures: string[] = [];
    for (const file of arquivos) {
      const result = await attachFile(task.id, file);
      if (!result.ok) attachFailures.push(`${file.name} (${result.error ?? "erro desconhecido"})`);
    }

    if (fieldFailures.length || attachFailures.length) {
      const noteLines = [`⚠️ Preenchimento automático incompleto (a descrição acima tem todas as respostas originais):`];
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
