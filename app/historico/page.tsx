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

// Unidade usada pra calcular o custo unitário de cada frente. Social Listening
// e Freelas são serviços fechados (não cobrados "por pessoa"), por isso não
// têm unidade — o painel mostra só o custo médio total pra essas duas.
const UNIDADE_LABEL: Record<string, string> = {
  quanti: "respondente",
  quali: "participante",
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

  const filtrados = useMemo(() => {
    return dados.filter((item) => {
      if (filtroFrente && item.frente !== filtroFrente) return false;
      if (busca) {
        const alvo = `${item.cliente} ${item.projeto} ${item.fornecedor} ${item.escopo_resumo}`.toLowerCase();
        if (!alvo.includes(busca.toLowerCase())) return false;
      }
      if (perfisSelecionados.length > 0) {
        const temPerfil = item.perfil.some((p) => perfisSelecionados.includes(p));
        if (!temPerfil) return false;
      }
      return true;
    });
  }, [dados, filtroFrente, busca, perfisSelecionados]);

  const volumeNum = parseInt(volumeAmostral, 10) || 0;

  const porFrente = useMemo(() => {
    const result: Record<
      string,
      { registros: number; comValor: number; custoMedio: number | null; custoUnitarioMedio: number | null }
    > = {};
    for (const key of FRENTE_KEYS) {
      const itens = filtrados.filter((i) => i.frente === key);
      const valores = itens
        .map((i) => i.valor_total_brl)
        .filter((v): v is NonNullable<typeof v> => v !== null)
        .map((v) => Number(v));
      const custoMedio = valores.length ? valores.reduce((a, b) => a + b, 0) / valores.length : null;

      const unitarios: number[] = [];
      for (const item of itens) {
        const valor = item.valor_total_brl;
        const amostra = item.amostra_tamanho;
        if (valor !== null && amostra !== null && Number(amostra) > 0) {
          unitarios.push(Number(valor) / Number(amostra));
        }
      }
      const custoUnitarioMedio = unitarios.length ? unitarios.reduce((a, b) => a + b, 0) / unitarios.length : null;

      result[key] = { registros: itens.length, comValor: valores.length, custoMedio, custoUnitarioMedio };
    }
    return result;
  }, [filtrados]);

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
        <h2>
          Painel por frente — {filtrados.length} registro{filtrados.length === 1 ? "" : "s"} nos filtros atuais
        </h2>
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
                    <p className="stat-sub" style={{ marginTop: 8 }}>
                      {stat.registros} registro{stat.registros === 1 ? "" : "s"} ({stat.comValor} com valor)
                    </p>
                    <p className="stat-big">{formatBRL(stat.custoMedio)}</p>
                    <p className="stat-sub">custo médio por cotação</p>

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
