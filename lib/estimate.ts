// Gera uma estimativa de custo com fornecedores para a solicitação atual, com
// base no histórico real de orçamentos (lib/precosData.ts). Roda só no
// servidor: o histórico completo (com nomes de clientes) nunca é exposto ao
// solicitante — a IA recebe o histórico como contexto e é instruída a nunca
// citar nomes de clientes na resposta, só fornecedores e valores agregados.

import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { PRECOS } from "./precosData";
import type { ExtractedBriefing } from "./extract";

const FrenteEstimativaSchema = z
  .object({
    min_brl: z.number().nullable().describe("Estimativa mínima de custo com fornecedores, em reais."),
    max_brl: z.number().nullable().describe("Estimativa máxima de custo com fornecedores, em reais."),
    resumo: z.string().describe("1-3 frases explicando a estimativa, citando fornecedores (nunca clientes)."),
    fornecedores_considerados: z.array(z.string()).describe("Nomes de fornecedores usados como referência, sem nomes de clientes."),
  })
  .nullable();

export const EstimativaSchema = z.object({
  quanti: FrenteEstimativaSchema,
  quali: FrenteEstimativaSchema,
  social_listening: FrenteEstimativaSchema,
  freelas: FrenteEstimativaSchema,
  aviso: z.string().describe("Aviso curto lembrando que é uma estimativa, não uma cotação garantida."),
});

export type Estimativa = z.infer<typeof EstimativaSchema>;

const SYSTEM_PROMPT = `Você ajuda a estimar o custo com fornecedores de uma nova solicitação de pesquisa de
mercado, com base num histórico de orçamentos REAIS recebidos de fornecedores em projetos anteriores da
Valometry/Ana Couto.

REGRA MAIS IMPORTANTE, SEM EXCEÇÃO: NUNCA mencione nomes de clientes (as empresas que contrataram a pesquisa)
em nenhum campo da resposta — nem no resumo, nem nos fornecedores considerados. Nomes de clientes anteriores
são estritamente confidenciais e não podem aparecer de forma alguma. Você PODE e DEVE citar nomes de
FORNECEDORES (as empresas prestadoras do serviço de campo/coleta/recrutamento, ex: "Painel TAP", "On The Go",
"Participe Pesquisas", "Brazil Panels", "Zygon", "Toluna" etc).

Para cada frente presente na nova solicitação (quanti, quali, social_listening, freelas), observe os
orçamentos históricos fornecidos daquela frente com escopo/amostra parecidos (tamanho de amostra, metodologia,
nº de grupos focais/entrevistas, tipo de serviço) e estime uma faixa de valor (mínimo e máximo) plausível para
a nova solicitação, ajustando proporcionalmente quando a amostra da nova solicitação for maior ou menor que a
dos precedentes. Se não houver dados históricos comparáveis o suficiente para uma frente, retorne null nos
campos min_brl/max_brl dessa frente (mas ainda assim explique brevemente por que não foi possível estimar) —
nunca invente um valor sem base nos dados fornecidos.

Frentes ausentes na solicitação (não pedidas) devem ficar como null no objeto todo.

Escreva tudo em português do Brasil.`;

export async function estimarCusto(extraido: ExtractedBriefing): Promise<Estimativa> {
  const client = new Anthropic();

  const frentesRelevantes = new Set<string>(extraido.frentes);
  const historicoRelevante = PRECOS.filter((p) => frentesRelevantes.has(p.frente));

  const contexto = {
    solicitacao_atual: extraido,
    historico_de_orcamentos_reais: historicoRelevante,
  };

  const response = await client.messages.parse({
    model: "claude-opus-5",
    max_tokens: 4000,
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: JSON.stringify(contexto) }],
    output_config: {
      format: zodOutputFormat(EstimativaSchema),
    },
  });

  if (!response.parsed_output) {
    throw new Error("A IA não conseguiu gerar a estimativa (parsed_output vazio).");
  }

  return response.parsed_output;
}
