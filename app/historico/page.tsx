"use client";

import { useState, useMemo } from "react";
import type { PrecoItem } from "@/lib/precosData";

const FRENTE_LABEL: Record<string, string> = {
  quanti: "Quantitativa",
  quali: "Qualitativa",
  social_listening: "Social Listening",
  freelas: "Freelas",
};

function formatBRL(v: number | null): string {
  if (v === null || v === undefined) return "—";
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function HistoricoPage() {
  const [senha, setSenha] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const [dados, setDados] = useState<PrecoItem[]>([]);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const [filtroFrente, setFiltroFrente] = useState("");
  const [busca, setBusca] = useState("");

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

  const filtrados = useMemo(() => {
    return dados.filter((item) => {
      if (filtroFrente && item.frente !== filtroFrente) return false;
      if (busca) {
        const alvo = `${item.cliente} ${item.projeto} ${item.fornecedor} ${item.escopo_resumo}`.toLowerCase();
        if (!alvo.includes(busca.toLowerCase())) return false;
      }
      return true;
    });
  }, [dados, filtroFrente, busca]);

  const stats = useMemo(() => {
    const valores = filtrados.map((i) => i.valor_total_brl).filter((v): v is number => v !== null);
    if (!valores.length) return null;
    const soma = valores.reduce((a, b) => a + b, 0);
    return {
      count: filtrados.length,
      comValor: valores.length,
      media: soma / valores.length,
      min: Math.min(...valores),
      max: Math.max(...valores),
    };
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
      </section>

      {stats && (
        <section className="card">
          <h2>
            Resumo — {stats.count} registro{stats.count === 1 ? "" : "s"} ({stats.comValor} com valor confirmado)
          </h2>
          <div className="row">
            <div className="field">
              <label>Média</label>
              <p style={{ fontSize: "1.2rem", fontWeight: 600 }}>{formatBRL(stats.media)}</p>
            </div>
            <div className="field">
              <label>Mínimo</label>
              <p style={{ fontSize: "1.2rem", fontWeight: 600 }}>{formatBRL(stats.min)}</p>
            </div>
            <div className="field">
              <label>Máximo</label>
              <p style={{ fontSize: "1.2rem", fontWeight: 600 }}>{formatBRL(stats.max)}</p>
            </div>
          </div>
        </section>
      )}

      <section className="card" style={{ overflowX: "auto", padding: 0 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid var(--border)", background: "#fafaf8" }}>
              <th style={{ padding: 10 }}>Cliente</th>
              <th style={{ padding: 10 }}>Projeto</th>
              <th style={{ padding: 10 }}>Frente</th>
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
                <td style={{ padding: 10, whiteSpace: "nowrap" }}>{FRENTE_LABEL[item.frente] ?? item.frente}</td>
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
