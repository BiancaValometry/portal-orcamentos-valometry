"use client";

import { useState } from "react";
import { CLIENT_OPTIONS, OUTRO_CLIENTE } from "@/lib/clientOptions";

type Frentes = { quanti: boolean; quali: boolean; social: boolean };

const initialFrentes: Frentes = { quanti: false, quali: false, social: false };

export default function Page() {
  const [solicitanteNome, setSolicitanteNome] = useState("");
  const [solicitanteEmail, setSolicitanteEmail] = useState("");
  const [clienteId, setClienteId] = useState("");
  const [clienteOutro, setClienteOutro] = useState("");
  const [projeto, setProjeto] = useState("");
  const [prazo, setPrazo] = useState("");

  const [frentes, setFrentes] = useState<Frentes>(initialFrentes);

  // Quanti
  const [amostraTotal, setAmostraTotal] = useState("");
  const [loi, setLoi] = useState("");
  const [metCati, setMetCati] = useState(false);
  const [metPainel, setMetPainel] = useState(false);
  const [metFornecedorPropoe, setMetFornecedorPropoe] = useState(false);
  const [perfilRespondentes, setPerfilRespondentes] = useState("");
  const [cQuantiProgramacao, setCQuantiProgramacao] = useState(false);
  const [cQuantiDisparo, setCQuantiDisparo] = useState(false);
  const [cQuantiRelatorio, setCQuantiRelatorio] = useState(false);
  const [cQuantiAnalises, setCQuantiAnalises] = useState(false);
  const [cQuantiApresentacao, setCQuantiApresentacao] = useState(false);

  // Quali
  const [metIdi, setMetIdi] = useState(false);
  const [metGruposFocais, setMetGruposFocais] = useState(false);
  const [metDiade, setMetDiade] = useState(false);
  const [nEntrevistas, setNEntrevistas] = useState("");
  const [nGruposFocais, setNGruposFocais] = useState("");
  const [nParticipantesPorGrupo, setNParticipantesPorGrupo] = useState("");
  const [perfilEntrevistados, setPerfilEntrevistados] = useState("");
  const [cQualiRecrutamento, setCQualiRecrutamento] = useState(false);
  const [cQualiIncentivo, setCQualiIncentivo] = useState(false);
  const [cQualiModeracao, setCQualiModeracao] = useState(false);
  const [cQualiAnalises, setCQualiAnalises] = useState(false);
  const [cQualiGravacao, setCQualiGravacao] = useState(false);
  const [cQualiTranscricao, setCQualiTranscricao] = useState(false);

  // Social listening
  const [socialDetalhe, setSocialDetalhe] = useState("");

  const [servicosAdicionais, setServicosAdicionais] = useState("");
  const [observacoes, setObservacoes] = useState("");
  const [arquivos, setArquivos] = useState<File[]>([]);

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function toggleFrente(key: keyof Frentes) {
    setFrentes((f) => ({ ...f, [key]: !f[key] }));
  }

  function onFilesSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    setArquivos((prev) => [...prev, ...files]);
    e.target.value = "";
  }

  function removeFile(idx: number) {
    setArquivos((prev) => prev.filter((_, i) => i !== idx));
  }

  const nenhumaFrenteSelecionada = !frentes.quanti && !frentes.quali && !frentes.social;

  function validate(): string | null {
    if (!solicitanteNome.trim()) return "Informe seu nome.";
    if (!solicitanteEmail.trim()) return "Informe seu e-mail.";
    if (!clienteId) return "Selecione o cliente.";
    if (clienteId === OUTRO_CLIENTE && !clienteOutro.trim()) return "Informe o nome do cliente.";
    if (!projeto.trim()) return "Informe o nome do projeto/estudo.";
    if (nenhumaFrenteSelecionada) return "Selecione ao menos uma frente de pesquisa (Quanti, Quali ou Social Listening).";
    return null;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setErrorMsg(validationError);
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    const fd = new FormData();
    fd.set("solicitanteNome", solicitanteNome);
    fd.set("solicitanteEmail", solicitanteEmail);
    fd.set("clienteId", clienteId);
    fd.set("clienteOutro", clienteOutro);
    fd.set("projeto", projeto);
    fd.set("prazo", prazo);

    fd.set("frenteQuanti", String(frentes.quanti));
    fd.set("frenteQuali", String(frentes.quali));
    fd.set("frenteSocial", String(frentes.social));

    fd.set("amostraTotal", amostraTotal);
    fd.set("loi", loi);
    fd.set("metCati", String(metCati));
    fd.set("metPainel", String(metPainel));
    fd.set("metFornecedorPropoe", String(metFornecedorPropoe));
    fd.set("perfilRespondentes", perfilRespondentes);
    fd.set("cQuantiProgramacao", String(cQuantiProgramacao));
    fd.set("cQuantiDisparo", String(cQuantiDisparo));
    fd.set("cQuantiRelatorio", String(cQuantiRelatorio));
    fd.set("cQuantiAnalises", String(cQuantiAnalises));
    fd.set("cQuantiApresentacao", String(cQuantiApresentacao));

    fd.set("metIdi", String(metIdi));
    fd.set("metGruposFocais", String(metGruposFocais));
    fd.set("metDiade", String(metDiade));
    fd.set("nEntrevistas", nEntrevistas);
    fd.set("nGruposFocais", nGruposFocais);
    fd.set("nParticipantesPorGrupo", nParticipantesPorGrupo);
    fd.set("perfilEntrevistados", perfilEntrevistados);
    fd.set("cQualiRecrutamento", String(cQualiRecrutamento));
    fd.set("cQualiIncentivo", String(cQualiIncentivo));
    fd.set("cQualiModeracao", String(cQualiModeracao));
    fd.set("cQualiAnalises", String(cQualiAnalises));
    fd.set("cQualiGravacao", String(cQualiGravacao));
    fd.set("cQualiTranscricao", String(cQualiTranscricao));

    fd.set("socialDetalhe", socialDetalhe);
    fd.set("servicosAdicionais", servicosAdicionais);
    fd.set("observacoes", observacoes);

    arquivos.forEach((file) => fd.append("arquivos", file, file.name));

    try {
      const res = await fetch("/api/orcamentos", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data?.error || "Não foi possível enviar a solicitação.");
      }
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message ?? "Erro inesperado ao enviar.");
    }
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

  return (
    <main>
      <div className="header">
        <h1>Solicitação de Orçamento de Pesquisa</h1>
        <p>Preencha os dados do projeto e anexe o briefing. Sua solicitação vira automaticamente uma tarefa para a equipe orçar com os fornecedores.</p>
      </div>

      {status === "error" && errorMsg && <div className="notice error">{errorMsg}</div>}

      <form onSubmit={onSubmit}>
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
          <h2>Frentes de pesquisa a orçar</h2>
          <div className="field">
            <label className="required">O que precisa ser orçado?</label>
            <div className="frentes">
              <div
                className={`frente-toggle ${frentes.quanti ? "active" : ""}`}
                onClick={() => toggleFrente("quanti")}
              >
                Quantitativa
              </div>
              <div
                className={`frente-toggle ${frentes.quali ? "active" : ""}`}
                onClick={() => toggleFrente("quali")}
              >
                Qualitativa
              </div>
              <div
                className={`frente-toggle ${frentes.social ? "active" : ""}`}
                onClick={() => toggleFrente("social")}
              >
                Social Listening
              </div>
            </div>
            <span className="hint">Pode selecionar mais de uma, se o projeto exigir orçamentos combinados.</span>
          </div>
        </section>

        {frentes.quanti && (
          <section className="card">
            <h2>Amostra — Quantitativa</h2>
            <div className="row">
              <div className="field">
                <label>Tamanho total da amostra</label>
                <input type="number" min="0" value={amostraTotal} onChange={(e) => setAmostraTotal(e.target.value)} />
              </div>
              <div className="field">
                <label>Duração do questionário (LOI)</label>
                <select value={loi} onChange={(e) => setLoi(e.target.value)}>
                  <option value="">Selecione...</option>
                  <option value="10min">10 min</option>
                  <option value="15min">15 min</option>
                  <option value="20min">20 min</option>
                  <option value="25min">25 min</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label>Metodologia</label>
              <div className="checkbox-group">
                <label className="checkbox-item"><input type="checkbox" checked={metCati} onChange={(e) => setMetCati(e.target.checked)} /> CATI</label>
                <label className="checkbox-item"><input type="checkbox" checked={metPainel} onChange={(e) => setMetPainel(e.target.checked)} /> Painel online</label>
                <label className="checkbox-item"><input type="checkbox" checked={metFornecedorPropoe} onChange={(e) => setMetFornecedorPropoe(e.target.checked)} /> Fornecedor pode propor o melhor método</label>
              </div>
            </div>
            <div className="field">
              <label>Perfil dos respondentes e cotas (se houver)</label>
              <textarea value={perfilRespondentes} onChange={(e) => setPerfilRespondentes(e.target.value)} />
            </div>
            <div className="field">
              <label>O que deve ser considerado neste orçamento?</label>
              <div className="checkbox-group">
                <label className="checkbox-item"><input type="checkbox" checked={cQuantiProgramacao} onChange={(e) => setCQuantiProgramacao(e.target.checked)} /> Programação de pesquisa</label>
                <label className="checkbox-item"><input type="checkbox" checked={cQuantiDisparo} onChange={(e) => setCQuantiDisparo(e.target.checked)} /> Disparo (painel/CATI etc)</label>
                <label className="checkbox-item"><input type="checkbox" checked={cQuantiRelatorio} onChange={(e) => setCQuantiRelatorio(e.target.checked)} /> Relatório / Dash</label>
                <label className="checkbox-item"><input type="checkbox" checked={cQuantiAnalises} onChange={(e) => setCQuantiAnalises(e.target.checked)} /> Análises</label>
                <label className="checkbox-item"><input type="checkbox" checked={cQuantiApresentacao} onChange={(e) => setCQuantiApresentacao(e.target.checked)} /> Apresentação</label>
              </div>
            </div>
          </section>
        )}

        {frentes.quali && (
          <section className="card">
            <h2>Amostra — Qualitativa</h2>
            <div className="field">
              <label>Métodos qualitativos</label>
              <div className="checkbox-group">
                <label className="checkbox-item"><input type="checkbox" checked={metIdi} onChange={(e) => setMetIdi(e.target.checked)} /> Entrevistas em profundidade (IDI)</label>
                <label className="checkbox-item"><input type="checkbox" checked={metGruposFocais} onChange={(e) => setMetGruposFocais(e.target.checked)} /> Grupos focais</label>
                <label className="checkbox-item"><input type="checkbox" checked={metDiade} onChange={(e) => setMetDiade(e.target.checked)} /> Entrevistas em dupla (Díade)</label>
              </div>
            </div>
            <div className="row">
              <div className="field">
                <label>Nº de entrevistas / díades</label>
                <select value={nEntrevistas} onChange={(e) => setNEntrevistas(e.target.value)}>
                  <option value="">Selecione...</option>
                  {Array.from({ length: 40 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
              {metGruposFocais && (
                <div className="field">
                  <label>Quantos grupos focais</label>
                  <select value={nGruposFocais} onChange={(e) => setNGruposFocais(e.target.value)}>
                    <option value="">Selecione...</option>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            {metGruposFocais && (
              <div className="field">
                <label>Nº de participantes por grupo</label>
                <select value={nParticipantesPorGrupo} onChange={(e) => setNParticipantesPorGrupo(e.target.value)}>
                  <option value="">Selecione...</option>
                  {Array.from({ length: 8 }, (_, i) => i + 3).map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
            )}
            <div className="field">
              <label>Perfil dos entrevistados</label>
              <textarea value={perfilEntrevistados} onChange={(e) => setPerfilEntrevistados(e.target.value)} />
            </div>
            <div className="field">
              <label>O que deve ser considerado neste orçamento?</label>
              <div className="checkbox-group">
                <label className="checkbox-item"><input type="checkbox" checked={cQualiRecrutamento} onChange={(e) => setCQualiRecrutamento(e.target.checked)} /> Recrutamento</label>
                <label className="checkbox-item"><input type="checkbox" checked={cQualiIncentivo} onChange={(e) => setCQualiIncentivo(e.target.checked)} /> Pagamento de incentivo</label>
                <label className="checkbox-item"><input type="checkbox" checked={cQualiModeracao} onChange={(e) => setCQualiModeracao(e.target.checked)} /> Moderação / entrevistas</label>
                <label className="checkbox-item"><input type="checkbox" checked={cQualiAnalises} onChange={(e) => setCQualiAnalises(e.target.checked)} /> Análises</label>
                <label className="checkbox-item"><input type="checkbox" checked={cQualiGravacao} onChange={(e) => setCQualiGravacao(e.target.checked)} /> Gravação</label>
                <label className="checkbox-item"><input type="checkbox" checked={cQualiTranscricao} onChange={(e) => setCQualiTranscricao(e.target.checked)} /> Transcrição</label>
              </div>
            </div>
          </section>
        )}

        {frentes.social && (
          <section className="card">
            <h2>Social Listening</h2>
            <div className="field">
              <label>O que precisa ser monitorado?</label>
              <span className="hint">Plataformas, período de monitoramento, palavras-chave/menções, concorrentes, etc.</span>
              <textarea value={socialDetalhe} onChange={(e) => setSocialDetalhe(e.target.value)} />
            </div>
          </section>
        )}

        <section className="card">
          <h2>Arquivos do briefing</h2>
          <div className="field">
            <label>Anexe o(s) arquivo(s) com os detalhes do projeto</label>
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

        <section className="card">
          <h2>Observações adicionais</h2>
          <div className="field">
            <label>Serviços adicionais além do já descrito acima</label>
            <textarea value={servicosAdicionais} onChange={(e) => setServicosAdicionais(e.target.value)} />
          </div>
          <div className="field">
            <label>Outras observações / considerações</label>
            <textarea value={observacoes} onChange={(e) => setObservacoes(e.target.value)} />
          </div>
        </section>

        <div className="submit-bar">
          <button className="primary" type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Enviando..." : "Enviar solicitação"}
          </button>
        </div>
      </form>
    </main>
  );
}
