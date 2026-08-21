"use client";

import { useState } from "react";
import { CLIENT_OPTIONS, OUTRO_CLIENTE } from "@/lib/clientOptions";

type Status = "idle" | "enviando" | "success" | "erro";

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
    return null;
  }

  async function onEnviar(e: React.FormEvent) {
    e.preventDefault();
    const validationError = validateBasico();
    if (validationError) {
      setStatus("erro");
      setErrorMsg(validationError);
      return;
    }

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
    arquivos.forEach((file) => fd.append("arquivos", file, file.name));

    try {
      const res = await fetch("/api/orcamentos", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data?.error || "Não foi possível enviar a solicitação.");
      setStatus("success");
    } catch (err: any) {
      setStatus("erro");
      setErrorMsg(err?.message ?? "Erro inesperado ao enviar.");
    }
  }

  if (status === "success") {
    return (
      <main>
        <div className="confirmation card">
          <h1>Solicitação enviada ✅</h1>
          <p>
            Recebemos sua solicitação. A equipe de orçamentos da Valometry foi notificada
            e vai iniciar a cotação com os fornecedores.
          </p>
          <button onClick={() => window.location.reload()}>Enviar outra solicitação</button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="header">
        <h1>Solicitação de Orçamento de Pesquisa</h1>
        <p>Preencha os dados do projeto e descreva sua solicitação com suas próprias palavras, do jeito que preferir.</p>
      </div>

      {status === "erro" && errorMsg && <div className="notice error">{errorMsg}</div>}

      <form onSubmit={onEnviar}>
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
            <label>Descreva o escopo e a amostra da pesquisa, como preferir (opcional)</label>
            <span className="hint">
              Não precisa ter um arquivo de amostra pronto — pode escrever livremente, como se estivesse
              explicando pra um colega: o que precisa ser pesquisado, quali e/ou quanti e/ou social
              listening, tamanho de amostra, perfil do público, quantos grupos focais e quantas pessoas
              por grupo, prazo, o que já foi decidido e o que ainda está em aberto. Se ainda não tiver
              esses detalhes, pode enviar assim mesmo e complementar depois.
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
          <button className="primary" type="submit" disabled={status === "enviando"}>
            {status === "enviando" ? "Enviando..." : "Enviar solicitação"}
          </button>
        </div>
      </form>
    </main>
  );
}
