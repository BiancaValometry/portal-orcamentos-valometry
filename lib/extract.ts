// Interpreta o texto livre do solicitante (a "conversa" com a IA) e extrai os
// dados estruturados de amostra/escopo, além de identificar informações
// essenciais que faltam para conseguir orçar a pesquisa com fornecedores.

import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";

const FrenteEnum = z.enum(["quanti", "quali", "social_listening", "freelas"]);

export const ExtractedBriefingSchema = z.object({
  frentes: z
    .array(FrenteEnum)
    .describe("Frentes de orçamento identificadas no texto do solicitante."),
  quanti: z
    .object({
      amostra_total: z.number().nullable().describe("Tamanho total da amostra quantitativa, se mencionado."),
      loi: z.enum(["10min", "15min", "20min", "25min"]).nullable().describe("Duração aproximada do questionário, arredondada para a opção mais próxima."),
      metodologia: z.array(z.enum(["cati", "painel_online", "fornecedor_propoe"])),
      perfil_respondentes: z.string().nullable().describe("Perfil dos respondentes e cotas, resumido."),
      servicos: z.array(z.enum(["programacao", "disparo", "relatorio", "analises", "apresentacao"])),
    })
    .nullable(),
  quali: z
    .object({
      metodos: z.array(z.enum(["idi", "grupos_focais", "diade"])),
      n_entrevistas: z.number().nullable().describe("Nº de entrevistas ou díades, se aplicável."),
      n_grupos_focais: z.number().nullable(),
      n_participantes_por_grupo: z.number().nullable().describe("Nº de participantes POR grupo focal — não confundir com o nº de grupos."),
      perfil_entrevistados: z.string().nullable(),
      servicos: z.array(z.enum(["recrutamento", "incentivo", "moderacao", "analises", "gravacao", "transcricao"])),
    })
    .nullable(),
  social_listening: z
    .object({
      detalhe: z.string().nullable().describe("Plataformas, período, palavras-chave/menções, concorrentes etc."),
    })
    .nullable(),
  freelas: z
    .object({
      detalhe: z.string().nullable().describe("Descrição do serviço freelance/pontual solicitado (ex: moderador avulso, transcritor, etc)."),
    })
    .nullable(),
  resumo: z.string().describe("Resumo objetivo de 1-2 frases da solicitação, em português, para leitura rápida."),
  faltando: z
    .array(z.string())
    .describe(
      "Lista de informações ESSENCIAIS para orçar a pesquisa que faltam ou estão ambíguas no texto, em português, uma frase objetiva por item. Vazio se nada essencial faltar."
    ),
});

export type ExtractedBriefing = z.infer<typeof ExtractedBriefingSchema>;

const SYSTEM_PROMPT = `Você ajuda a equipe de orçamentos da Valometry (agência de pesquisa de mercado) a
transformar o pedido em texto livre de um solicitante em dados estruturados para orçar a
pesquisa com fornecedores.

Frentes possíveis: "quanti" (pesquisa quantitativa), "quali" (pesquisa qualitativa),
"social_listening" (monitoramento de redes/menções), "freelas" (serviço avulso/freelance,
ex: moderador extra, transcritor avulso, que não se encaixa nas outras frentes).

Regras de inferência de serviços (campo "servicos" de quanti/quali):
- Quanti quase sempre precisa de "programacao" (programação do questionário) e "disparo"
  (coleta/fornecimento de respondentes via painel ou CATI) — inclua esses dois por padrão
  quando a frente quanti for identificada, a menos que o texto diga explicitamente que não
  são necessários. Só inclua "relatorio", "analises" ou "apresentacao" se o texto pedir
  explicitamente entregáveis desse tipo — não invente.
- Quali quase sempre precisa de "recrutamento" — inclua por padrão quando a frente quali for
  identificada. Só inclua "incentivo" se o texto mencionar pagamento/incentivo aos
  entrevistados (ou for prática óbvia pelo contexto, como grupos focais com público final).
  Só inclua "moderacao", "gravacao", "transcricao" ou "analises" se pedidos explicitamente.

Regra central sobre "faltando": pense como quem vai pedir cotação a um fornecedor. Para cada
frente identificada, verifique se as informações mínimas pra cotar estão presentes e liste o
que falta, em frases objetivas e específicas (nunca genéricas). Exemplos do tipo de lacuna que
você deve pegar:
- Quali com grupos focais: se o nº de grupos foi informado mas o nº de participantes POR GRUPO
  não foi, isso é uma lacuna essencial — diga isso especificamente.
- Quanti: amostra total não informada, ou LOI (duração do questionário) não informado.
- Quali: perfil dos entrevistados vago ou ausente (fornecedor não consegue recrutar sem
  perfil).
- Social listening: período de monitoramento ou palavras-chave/plataformas não informados.
- Qualquer frente identificada sem NENHUM detalhe de amostra/escopo.
Não liste como faltante algo que já está claramente respondido no texto, mesmo que de forma
resumida. Se não faltar nada essencial, retorne uma lista vazia — não invente pendências.

Responda somente com os dados extraídos, no idioma português do Brasil.`;

export async function extractBriefing(textoLivre: string): Promise<ExtractedBriefing> {
  const client = new Anthropic();

  const response = await client.messages.parse({
    model: "claude-opus-5",
    max_tokens: 4000,
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: textoLivre }],
    output_config: {
      format: zodOutputFormat(ExtractedBriefingSchema),
    },
  });

  if (!response.parsed_output) {
    throw new Error("A IA não conseguiu estruturar a solicitação (parsed_output vazio).");
  }

  return response.parsed_output;
}
