"use client";

import { useState } from "react";
import { CLIENT_OPTIONS, OUTRO_CLIENTE } from "@/lib/clientOptions";
import type { ExtractedBriefing } from "@/lib/extract";

const FRENTE_LABEL: Record<string, string> = {
  quanti: "Quantitativa",
  quali: "Qualitativa",
  social_listening: "Social Listening",
  freelas: "Freelas / serviço avulso",
};

type Status = "idle" | "analisando" | "revisao" | "enviando" | "success" | "erro";

export default function Page() {
  const [solicitanteNome, setSolicitanteNome] = useState("");
  const [solicitanteEmail, setSolicitanteEmail] = useState("");
  const [clienteId, setClienteId] = useState("");
  const [clienteOutro, setClienteOutro] = useState("");
  const [projeto, setProjeto] = useState("");
  const [prazo, setPrazo] = useState("");
  const [textoLivre, setTextoLivre] = useState("");
  const [arquivos, setArquivos] = useState<File[]>([]);

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [extraido, setExtraido] = useState<ExtractedBriefing | null>(null);
  const [analiseIndisponivel, setAnaliseIndisponivel] = useState(false);

  function onFilesSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    setArquivos((prev) => [...prev, ...files]);
    e.target.value = "";
  }

  function removeFile(idx: number) {
    setArquivos((prev) => prev.filter((_, i) => i !== idx));
  }

  function validateBasico(): string | null {
    if (!solicitanteNome.trim()) return "Informe seu nome.";
    if (!solicitanteEmail.trim()) return "Informe seu e-mail.";
    if (!clienteId) return "Selecione o cliente.";
    if (clienteId === OUTRO_CLIENTE && !clienteOutro.trim()) return "Informe o nome do cliente.";
    if (!projeto.trim()) return "Informe o nome do projeto/estudo.";
    if (!textoLivre.trim() || textoLivre.trim().length < 15) return "Descreva sua solicitação com um pouco mais de detalhe.";
    return null;
  }

  async function onAnalisar(e: React.FormEvent) {
    e.preventDefault();
    const validationError = validateBasico();
    if (validationError) {
      setStatus("erro");
      setErrorMsg(validationError);
      return;
    }

    setStatus("analisando");
    setErrorMsg("");
    setAnaliseIndisponivel(false);

    try {
      const res = await fetch("/api/analisar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ textoLivre }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data?.error || "Falha na análise.");
      setExtraido(data.extraido);
      setStatus("revisao");
    } catch (err) {
      // Resiliência: se a IA falhar, deixa o solicitante seguir mesmo assim.
      setExtraido(null);
      setAnaliseIndisponivel(true);
      setStatus("revisao");
    }
  }

  async function onConfirmarEnvio() {
    setStatus("enviando");
    setErrorMsg("");

    const fd = new FormData();
    fd.set("solicitanteNome", solicitanteNome);
    fd.set("solicitanteEmail", solicitanteEmail);
    fd.set("clienteId", clienteId);
    fd.set("clienteOutro", clienteOutro);
    fd.set("projeto", projeto);
    fd.set("prazo", prazo);
    fd.set("textoLivre", textoLivre);
    fd.set("extraido", extraido ? JSON.stringify(extraido) : "");
    arquivos.forEach((file) => fd.append("arquivos", file, file.name));

    try {
      const res = await fetch("/api/orcamentos", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data?.error || "Não foi possível enviar a solicitação.");
      setStatus("success");
    } catch (err: any) {
      setStatus("revisao");
      setErrorMsg(err?.message ?? "Erro inesperado ao enviar.");
    }
  }

  function onVoltarEEditar() {
    setStatus("idle");
    setErrorMsg("");
  }

  if (status === "success") {
    return (
      <main>
        <div className="confirmation card">
          <h1>Solicitação enviada ✅</h1>
          <p>
            Recebemos o briefing do seu projeto. A equipe de orçamentos da Valometry foi notificada
            e vai iniciar a cotação com os fornecedores.
          </p>
          <button onClick={() => window.location.reload()}>Enviar outra solicitação</button>
        </div>
      </main>
    );
  }

  if (status === "revisao" || status === "enviando") {
    return (
      <main>
        <div className="header">
          <h1>Confira antes de enviar</h1>
          <p>Veja o que entendemos da sua solicitação. Se algo estiver faltando ou errado, você pode voltar e complementar o texto.</p>
        </div>

        {errorMsg && <div className="notice error">{errorMsg}</div>}

        {analiseIndisponivel && (
          <div className="notice error">
            Não conseguimos analisar automaticamente sua solicitação agora. Sem problema — você pode
            enviar mesmo assim, o texto completo será revisado manualmente pela equipe.
          </div>
        )}

        {extraido && (
          <section className="card">
            <h2>O que entendemos</h2>
            <div className="field">
              <label>Resumo</label>
              <p>{extraido.resumo}</p>
            </div>
            <div className="field">
              <label>Frentes identificadas</label>
              <div className="frentes">
                {extraido.frentes.length ? (
                  extraido.frentes.map((f) => (
                    <div className="frente-toggle active" key={f}>
                      {FRENTE_LABEL[f] ?? f}
                    </div>
                  ))
                ) : (
                  <span className="hint">Nenhuma frente identificada com clareza.</span>
                )}
              </div>
            </div>

            {extraido.quanti && (
              <div className="field">
                <label>Quantitativa</label>
                <ul>
                  {extraido.quanti.amostra_total && <li>Amostra total: {extraido.quanti.amostra_total}</li>}
                  {extraido.quanti.loi && <li>LOI: {extraido.quanti.loi}</li>}
                  {extraido.quanti.metodologia.length > 0 && <li>Metodologia: {extraido.quanti.metodologia.join(", ")}</li>}
                  {extraido.quanti.perfil_respondentes && <li>Perfil: {extraido.quanti.perfil_respondentes}</li>}
                  {extraido.quanti.servicos.length > 0 && <li>Cotar: {extraido.quanti.servicos.join(", ")}</li>}
                </ul>
              </div>
            )}

            {extraido.quali && (
              <div className="field">
                <label>Qualitativa</label>
                <ul>
                  {extraido.quali.metodos.length > 0 && <li>Métodos: {extraido.quali.metodos.join(", ")}</li>}
                  {extraido.quali.n_entrevistas && <li>Nº de entrevistas/díades: {extraido.quali.n_entrevistas}</li>}
                  {extraido.quali.n_grupos_focais && <li>Nº de grupos focais: {extraido.quali.n_grupos_focais}</li>}
                  {extraido.quali.n_participantes_por_grupo && (
                    <li>Participantes por grupo: {extraido.quali.n_participantes_por_grupo}</li>
                  )}
                  {extraido.quali.perfil_entrevistados && <li>Perfil: {extraido.quali.perfil_entrevistados}</li>}
                  {extraido.quali.servicos.length > 0 && <li>Cotar: {extraido.quali.servicos.join(", ")}</li>}
                </ul>
              </div>
            )}

            {extraido.social_listening && (
              <div className="field">
                <label>Social Listening</label>
                <p>{extraido.social_listening.detalhe || "(sem detalhamento)"}</p>
              </div>
            )}

            {extraido.freelas && (
              <div className="field">
                <label>Freelas / serviço avulso</label>
                <p>{extraido.freelas.detalhe || "(sem detalhamento)"}</p>
              </div>
            )}
          </section>
        )}

        {extraido && extraido.faltando.length > 0 && (
          <section className="card">
            <h2>⚠️ Antes de enviar, considere complementar</h2>
            <p className="hint">Isso ajuda a Bianca a orçar mais rápido — mas você pode enviar mesmo assim.</p>
            <ul>
              {extraido.faltando.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        <div className="submit-bar">
          <button onClick={onVoltarEEditar} disabled={status === "enviando"} type="button">
            Voltar e editar
          </button>
          <button className="primary" onClick={onConfirmarEnvio} disabled={status === "enviando"} type="button">
            {status === "enviando" ? "Enviando..." : "Confirmar e enviar"}
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="header">
        <h1>Solicitação de Orçamento de Pesquisa</h1>
        <p>Preencha os dados do projeto e descreva sua solicitação com suas palavras. A IA organiza os detalhes antes de virar uma tarefa para a equipe orçar com os fornecedores.</p>
      </div>

      {status === "erro" && errorMsg && <div className="notice error">{errorMsg}</div>}

      <form onSubmit={onAnalisar}>
        <section className="card">
          <h2>Dados do projeto</h2>
          <div className="row">
            <div className="field">
              <label className="required">Seu nome</label>
              <input type="text" value={solicitanteNome} onChange={(e) => setSolicitanteNome(e.target.value)} />
            </div>
            <div className="field">
              <label className="required">Seu e-mail</label>
              <input type="email" value={solicitanteEmail} onChange={(e) => setSolicitanteEmail(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="field">
              <label className="required">Cliente</label>
              <select value={clienteId} onChange={(e) => setClienteId(e.target.value)}>
                <option value="">Selecione...</option>
                {CLIENT_OPTIONS.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
                <option value={OUTRO_CLIENTE}>Outro / não listado</option>
              </select>
              {clienteId === OUTRO_CLIENTE && (
                <input
                  style={{ marginTop: 8 }}
                  type="text"
                  placeholder="Nome do cliente"
                  value={clienteOutro}
                  onChange={(e) => setClienteOutro(e.target.value)}
                />
              )}
            </div>
            <div className="field">
              <label>Prazo desejado para entrega do orçamento</label>
              <input type="date" value={prazo} onChange={(e) => setPrazo(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="required">Nome do projeto / estudo</label>
            <input type="text" value={projeto} onChange={(e) => setProjeto(e.target.value)} />
          </div>
        </section>

        <section className="card">
          <h2>Escreva aqui sua solicitação</h2>
          <div className="field">
            <label className="required">Descreva o escopo e a amostra da pesquisa, como preferir</label>
            <span className="hint">
              Não precisa ter um arquivo de amostra pronto — pode escrever livremente, como se estivesse
              explicando pra um colega: o que precisa ser pesquisado, quali e/ou quanti e/ou social
              listening, tamanho de amostra, perfil do público, quantos grupos focais e quantas pessoas
              por grupo, prazo, o que já foi decidido e o que ainda está em aberto.
            </span>
            <textarea
              style={{ minHeight: 180 }}
              value={textoLivre}
              onChange={(e) => setTextoLivre(e.target.value)}
              placeholder="Ex: Precisamos orçar uma pesquisa quanti com 500 respondentes, público mulheres 25-45 anos, classe AB, questionário de uns 15 minutos. Também precisamos de social listening no Instagram e TikTok dos últimos 3 meses..."
            />
          </div>
        </section>

        <section className="card">
          <h2>Arquivos do briefing</h2>
          <div className="field">
            <label>Anexe arquivo(s) complementares, se tiver (opcional)</label>
            <div className="file-drop">
              <input type="file" multiple onChange={onFilesSelected} />
              <div className="hint">Word, PDF, Excel, PPT... Evite arquivos muito grandes (acima de ~4 MB).</div>
            </div>
            {arquivos.length > 0 && (
              <ul className="file-list">
                {arquivos.map((f, i) => (
                  <li key={i}>
                    <span>{f.name} ({(f.size / 1024).toFixed(0)} KB)</span>
                    <button type="button" onClick={() => removeFile(i)}>remover</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <div className="submit-bar">
          <button className="primary" type="submit" disabled={status === "analisando"}>
            {status === "analisando" ? "Analisando..." : "Revisar e enviar"}
          </button>
        </div>
      </form>
    </main>
  );
}
