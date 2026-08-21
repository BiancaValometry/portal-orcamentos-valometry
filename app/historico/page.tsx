"use client";

import { useState, useMemo } from "react";
import type { PrecoItem } from "@/lib/precosData";

const FRENTE_KEYS = ["quanti", "quali", "social_listening", "freelas"] as const;

const FRENTE_LABEL: Record<string, string> = {
  quanti: "Quantitativa",
  quali: "Qualitativa",
  social_listening: "Social Listening",
  freelas: "Freelas",
};

// Unidade usada pra calcular o custo unitário "genérico" (só usado pra
// Quantitativa — Qualitativa tem sua própria lógica de grupo/entrevista, ver
// calcularStats). Social Listening e Freelas são serviços fechados (não
// cobrados "por pessoa"), por isso não têm unidade.
const UNIDADE_LABEL: Record<string, string> = {
  quanti: "respondente",
  quali: "",
  social_listening: "",
  freelas: "",
};

function formatBRL(v: number | null): string {
  if (v === null || v === undefined) return "—";
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function Badge({ frente }: { frente: string }) {
  return <span className={`badge badge-${frente}`}>{FRENTE_LABEL[frente] ?? frente}</span>;
}

export default function HistoricoPage() {
  const [senha, setSenha] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const [dados, setDados] = useState<PrecoItem[]>([]);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const [filtroFrente, setFiltroFrente] = useState("");
  const [busca, setBusca] = useState("");
  const [perfisSelecionados, setPerfisSelecionados] = useState<string[]>([]);
  const [volumeAmostral, setVolumeAmostral] = useState("");

  async function entrar(e: React.FormEvent) {
    e.preventDefault();
    setCarregando(true);
    setErro("");
    try {
      const res = await fetch("/api/historico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ senha }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data?.error || "Não foi possível entrar.");
      setDados(data.dados);
      setAutenticado(true);
    } catch (err: any) {
      setErro(err?.message ?? "Erro inesperado.");
    } finally {
      setCarregando(false);
    }
  }

  const perfisDisponiveis = useMemo(() => {
    const set = new Set<string>();
    for (const item of dados) {
      for (const p of item.perfil) set.add(p);
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b, "pt-BR"));
  }, [dados]);

  function togglePerfil(p: string) {
    setPerfisSelecionados((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]));
  }

  // Filtro "base": frente + busca, sem o perfil. Serve de fallback quando a
  // combinação frente+perfil não tem nenhum histórico (perfil raramente
  // aparece em todas as frentes — ex.: "Viajantes" só existe em projetos
  // quali no levantamento atual).
  const filtradosBase = useMemo(() => {
    return dados.filter((item) => {
      if (filtroFrente && item.frente !== filtroFrente) return false;
      if (busca) {
        const alvo = `${item.cliente} ${item.projeto} ${item.fornecedor} ${item.escopo_resumo}`.toLowerCase();
        if (!alvo.includes(busca.toLowerCase())) return false;
      }
      return true;
    });
  }, [dados, filtroFrente, busca]);

  // Filtro "preciso": base + perfil. Usado na tabela (que deve mostrar
  // exatamente o que bate com os filtros, mesmo que fique vazia).
  const filtrados = useMemo(() => {
    if (perfisSelecionados.length === 0) return filtradosBase;
    return filtradosBase.filter((item) => item.perfil.some((p) => perfisSelecionados.includes(p)));
  }, [filtradosBase, perfisSelecionados]);

  const volumeNum = parseInt(volumeAmostral, 10) || 0;

  function calcularStats(itens: PrecoItem[]) {
    const valores = itens
      .map((i) => i.valor_total_brl)
      .filter((v): v is NonNullable<typeof v> => v !== null)
      .map((v) => Number(v));
    const custoMedio = valores.length ? valores.reduce((a, b) => a + b, 0) / valores.length : null;

    // Custo unitário "genérico" (usado pra Quantitativa): valor / tamanho da amostra.
    const unitarios: number[] = [];
    for (const item of itens) {
      const valor = item.valor_total_brl;
      const amostra = item.amostra_tamanho;
      if (valor !== null && amostra !== null && Number(amostra) > 0) {
        unitarios.push(Number(valor) / Number(amostra));
      }
    }
    const custoUnitarioMedio = unitarios.length ? unitarios.reduce((a, b) => a + b, 0) / unitarios.length : null;

    // Custo por Grupo Focal (Qualitativa) — só entra a cotação que é 100% grupos
    // focais (sem entrevistas misturadas), pra não ratear um valor combinado.
    const porGrupo: number[] = [];
    for (const item of itens) {
      const valor = item.valor_total_brl;
      const g = item.n_grupos_focais;
      const e = item.n_entrevistas;
      if (valor !== null && g !== null && Number(g) > 0 && (e === null || Number(e) === 0)) {
        porGrupo.push(Number(valor) / Number(g));
      }
    }
    const custoPorGrupo = porGrupo.length ? porGrupo.reduce((a, b) => a + b, 0) / porGrupo.length : null;

    // Custo por Entrevista/EP (Qualitativa) — mesmo critério, só cotação 100% entrevistas.
    const porEntrevista: number[] = [];
    for (const item of itens) {
      const valor = item.valor_total_brl;
      const g = item.n_grupos_focais;
      const e = item.n_entrevistas;
      if (valor !== null && e !== null && Number(e) > 0 && (g === null || Number(g) === 0)) {
        porEntrevista.push(Number(valor) / Number(e));
      }
    }
    const custoPorEntrevista = porEntrevista.length ? porEntrevista.reduce((a, b) => a + b, 0) / porEntrevista.length : null;

    return {
      registros: itens.length,
      comValor: valores.length,
      custoMedio,
      custoUnitarioMedio,
      custoPorGrupo,
      amostrasGrupo: porGrupo.length,
      custoPorEntrevista,
      amostrasEntrevista: porEntrevista.length,
    };
  }

  // Painel por frente: tenta primeiro a combinação exata (frente + perfil
  // selecionado). Se não existir nenhum histórico para essa combinação — mas
  // existir histórico geral daquela frente — a estimativa cai pra média geral
  // da frente (ignorando o perfil) em vez de simplesmente zerar, e sinaliza
  // isso pro usuário. A média sempre agrega vários clientes/projetos (nunca
  // exige que exista uma cotação idêntica anterior).
  const porFrente = useMemo(() => {
    const result: Record<
      string,
      ReturnType<typeof calcularStats> & { usouFallback: boolean }
    > = {};
    for (const key of FRENTE_KEYS) {
      const preciso = calcularStats(filtrados.filter((i) => i.frente === key));
      if (preciso.registros > 0 || perfisSelecionados.length === 0) {
        result[key] = { ...preciso, usouFallback: false };
      } else {
        const geral = calcularStats(filtradosBase.filter((i) => i.frente === key));
        result[key] = { ...geral, usouFallback: geral.registros > 0 };
      }
    }
    return result;
  }, [filtrados, filtradosBase, perfisSelecionados]);

  if (!autenticado) {
    return (
      <main>
        <div className="header">
          <h1>Histórico de Preços — acesso interno</h1>
          <p>Área restrita ao time Valometry. Não compartilhe esse link fora da equipe.</p>
        </div>
        {erro && <div className="notice error">{erro}</div>}
        <form onSubmit={entrar} className="card">
          <div className="field">
            <label className="required">Senha</label>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} autoFocus />
          </div>
          <div className="submit-bar">
            <button className="primary" type="submit" disabled={carregando}>
              {carregando ? "Entrando..." : "Entrar"}
            </button>
          </div>
        </form>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 1100 }}>
      <div className="header">
        <h1>Histórico de Preços de Fornecedores</h1>
        <p>
          Extraído de orçamentos reais de projetos anteriores (2026). Use como referência de mercado — não é
          cotação garantida, sempre confirme valores e disponibilidade com o fornecedor antes de fechar.
        </p>
      </div>

      <section className="card">
        <div className="row">
          <div className="field">
            <label>Frente</label>
            <select value={filtroFrente} onChange={(e) => setFiltroFrente(e.target.value)}>
              <option value="">Todas</option>
              <option value="quanti">Quantitativa</option>
              <option value="quali">Qualitativa</option>
              <option value="social_listening">Social Listening</option>
              <option value="freelas">Freelas</option>
            </select>
          </div>
          <div className="field">
            <label>Buscar (cliente, fornecedor, projeto, escopo)</label>
            <input type="text" value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Ex: Painel TAP, grupos focais, Nintendo..." />
          </div>
        </div>

        <div className="field">
          <label>
            Perfil (selecione um ou mais){" "}
            {perfisSelecionados.length > 0 && (
              <button type="button" className="chip-clear" onClick={() => setPerfisSelecionados([])}>
                limpar
              </button>
            )}
          </label>
          <div className="chip-group">
            {perfisDisponiveis.map((p) => (
              <button
                type="button"
                key={p}
                className={`chip ${perfisSelecionados.includes(p) ? "active" : ""}`}
                onClick={() => togglePerfil(p)}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="field">
          <label>Volume amostral (opcional)</label>
          <input
            type="number"
            min={1}
            style={{ maxWidth: 220 }}
            value={volumeAmostral}
            onChange={(e) => setVolumeAmostral(e.target.value)}
            placeholder="Ex: 100"
          />
          <span className="hint">
            Informe uma quantidade (nº de respondentes/participantes) pra estimar o custo total com base no custo
            unitário médio histórico, considerando a frente e o(s) perfil(is) filtrados acima.
          </span>
        </div>
      </section>

      <section className="card">
        <h2>Painel por frente</h2>
        <p className="hint" style={{ marginTop: -10, marginBottom: 16 }}>
          Médias calculadas a partir de vários clientes/projetos do histórico (não é preciso ter existido uma
          cotação idêntica antes).
        </p>
        <div className="dashboard-grid">
          {FRENTE_KEYS.map((key) => {
            const stat = porFrente[key];
            const unidade = UNIDADE_LABEL[key];
            return (
              <div className={`stat-card stat-card-${key}`} key={key}>
                <Badge frente={key} />
                {stat.registros === 0 ? (
                  <p className="stat-empty">Sem registros com esses filtros.</p>
                ) : (
                  <>
                    {stat.usouFallback && (
                      <p className="stat-sub" style={{ marginTop: 8, fontStyle: "italic" }}>
                        Sem histórico do perfil selecionado nesta frente — usando a média geral de{" "}
                        {FRENTE_LABEL[key]}.
                      </p>
                    )}
                    <p className="stat-sub" style={{ marginTop: stat.usouFallback ? 0 : 8 }}>
                      {stat.registros} registro{stat.registros === 1 ? "" : "s"} ({stat.comValor} com valor)
                    </p>
                    <p className="stat-big">{formatBRL(stat.custoMedio)}</p>
                    <p className="stat-sub">custo médio por cotação</p>

                    {key === "quali" ? (
                      <>
                        {stat.custoPorGrupo !== null && (
                          <>
                            <p className="stat-big">
                              {formatBRL(stat.custoPorGrupo)} <span className="stat-unit">/ grupo focal</span>
                            </p>
                            <p className="stat-sub">
                              custo unitário médio ({stat.amostrasGrupo} cotaç{stat.amostrasGrupo === 1 ? "ão" : "ões"}{" "}
                              só de grupo)
                            </p>
                          </>
                        )}
                        {stat.custoPorEntrevista !== null && (
                          <>
                            <p className="stat-big">
                              {formatBRL(stat.custoPorEntrevista)} <span className="stat-unit">/ entrevista (EP)</span>
                            </p>
                            <p className="stat-sub">
                              custo unitário médio ({stat.amostrasEntrevista} cotaç{stat.amostrasEntrevista === 1 ? "ão" : "ões"}{" "}
                              só de entrevista)
                            </p>
                          </>
                        )}
                        {stat.custoPorGrupo === null && stat.custoPorEntrevista === null && (
                          <p className="stat-sub">
                            Sem cotações "puras" (só grupo ou só entrevista) pra calcular custo unitário — as
                            cotações aqui misturam metodologias.
                          </p>
                        )}
                        {volumeNum > 0 && (stat.custoPorGrupo !== null || stat.custoPorEntrevista !== null) && (
                          <div className="stat-estimate">
                            {stat.custoPorGrupo !== null && (
                              <p className="stat-sub">
                                Se forem {volumeNum} grupo{volumeNum === 1 ? "" : "s"} focal
                                {volumeNum === 1 ? "" : "is"}:{" "}
                                <strong>{formatBRL(stat.custoPorGrupo * volumeNum)}</strong>
                              </p>
                            )}
                            {stat.custoPorEntrevista !== null && (
                              <p className="stat-sub">
                                Se forem {volumeNum} entrevista{volumeNum === 1 ? "" : "s"}:{" "}
                                <strong>{formatBRL(stat.custoPorEntrevista * volumeNum)}</strong>
                              </p>
                            )}
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        {stat.custoUnitarioMedio !== null && unidade && (
                          <>
                            <p className="stat-big">
                              {formatBRL(stat.custoUnitarioMedio)} <span className="stat-unit">/ {unidade}</span>
                            </p>
                            <p className="stat-sub">custo unitário médio</p>
                          </>
                        )}

                        {volumeNum > 0 && stat.custoUnitarioMedio !== null && unidade && (
                          <div className="stat-estimate">
                            <p className="stat-sub">
                              Estimativa para {volumeNum} {unidade}
                              {volumeNum === 1 ? "" : "s"}
                            </p>
                            <p className="stat-big">{formatBRL(stat.custoUnitarioMedio * volumeNum)}</p>
                          </div>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="card" style={{ overflowX: "auto", padding: 0 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid var(--border)", background: "#fafaf8" }}>
              <th style={{ padding: 10 }}>Cliente</th>
              <th style={{ padding: 10 }}>Projeto</th>
              <th style={{ padding: 10 }}>Frente</th>
              <th style={{ padding: 10 }}>Perfil</th>
              <th style={{ padding: 10 }}>Fornecedor</th>
              <th style={{ padding: 10 }}>Valor</th>
              <th style={{ padding: 10 }}>Escopo</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((item, i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--border)", verticalAlign: "top" }} title={item.observacoes ?? undefined}>
                <td style={{ padding: 10, whiteSpace: "nowrap" }}>{item.cliente}</td>
                <td style={{ padding: 10 }}>{item.projeto}</td>
                <td style={{ padding: 10, whiteSpace: "nowrap" }}>
                  <Badge frente={item.frente} />
                </td>
                <td style={{ padding: 10, minWidth: 140 }}>{item.perfil.length ? item.perfil.join(", ") : "—"}</td>
                <td style={{ padding: 10, whiteSpace: "nowrap" }}>{item.fornecedor}</td>
                <td style={{ padding: 10, whiteSpace: "nowrap", fontWeight: 600 }}>{formatBRL(item.valor_total_brl)}</td>
                <td style={{ padding: 10, minWidth: 260 }}>{item.escopo_resumo}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtrados.length === 0 && <p style={{ padding: 16 }}>Nenhum registro encontrado com esses filtros.</p>}
      </section>
    </main>
  );
}
