// Integração com a API do ClickUp para a lista "Orçamentos" (Valometry | HUB).
// IDs de lista/campos descobertos em 2026-08-17 via MCP do ClickUp. Se a estrutura
// da lista mudar, atualize os IDs abaixo.

const CLICKUP_API = "https://api.clickup.com/api/v2";
export const LIST_ID = "901327121833";
export const BIANCA_USER_ID = 105900378;

function apiToken(): string {
  const token = process.env.CLICKUP_API_TOKEN;
  if (!token) {
    throw new Error(
      "CLICKUP_API_TOKEN não configurado. Configure a variável de ambiente no painel da Vercel."
    );
  }
  return token;
}

function headers() {
  return {
    Authorization: apiToken(),
    "Content-Type": "application/json",
  };
}

// ---------- IDs dos custom fields da lista Orçamentos ----------

export const FIELD = {
  cliente: "92747d1a-e166-4cb3-a46d-e3affe7e9838",
  projeto: "ee51ed62-5b8f-49f3-905c-958a7b5c9fc7",
  tipoPesquisa: "4270c53b-d6e0-4514-8d10-39fd6841c21a",
  considerarOrcamento: "b07505e9-256f-49a4-930b-657f4b1019c4",
  amostraQuanti: "60bc2278-068f-4ed6-8c1b-e2049cb553e0",
  loi: "13a8a79f-f3aa-4750-8de7-be8656b41dc2",
  perfilRespondentesQuanti: "b87b77ab-1637-4a71-8962-fc6e8913264b",
  metodologiaQuanti: "cf789dcc-4310-4770-8ec6-55864111b2e3",
  metodosQualitativos: "6fd2be60-594f-4f52-af02-e4d1d65ad8a2",
  nEntrevistas: "57dbc16c-a362-4399-9b39-58330427192e",
  nGruposFocais: "45c4d5f7-c59a-486c-97b3-7727ed6c9748",
  nParticipantesPorGrupo: "c5ead3d8-cef4-4f27-8cdb-126048fffbf4",
  perfilEntrevistadosQuali: "4554a0df-5206-4636-944e-e33001b3ef90",
  entregaFinal: "172d16ab-6130-4c0f-8080-668201a02064",
  observacoes: "bb14938e-b57a-4e63-8e3a-f4b60e66fdb5",
  servicosAdicionais: "595ad621-37d0-4849-bccf-f30f7b797b05",
} as const;

export const TIPO_PESQUISA_OPTION = {
  Quali: "6a967e7c-091d-4ebf-9123-acb465e5a977",
  Quanti: "b453fcb6-9086-406c-a36f-787da748d0d3",
  Ambas: "c8efa70f-b17f-41b5-9537-c813321ff7bb",
  Nenhuma: "278402a2-cb1c-49aa-812f-a75b5775c323",
} as const;

export const CONSIDERAR_OPTION = {
  quantiProgramacao: "f52248a1-f892-4193-a82d-14ee69eeb30b",
  quantiDisparo: "f92dc613-88a3-4eb1-8202-b9a9819adfec",
  quantiRelatorio: "4ab7db3b-124a-46cc-9289-c232e67bb3fb",
  quantiAnalises: "ee93e4d9-499a-4d7c-b035-68561565419d",
  quantiApresentacao: "ffdab6a2-c246-45af-991d-4b240148964b",
  qualiRecrutamento: "ba463c63-31d0-41c3-9e08-eecdd43ca985",
  qualiIncentivo: "226ec53a-705b-4c42-9062-0b0e32d01a62",
  qualiModeracao: "54eb0806-1f2f-4c29-8aba-4eb99d468b8b",
  qualiAnalises: "db79222d-1f95-4093-93d5-14c373df20c1",
  qualiGravacao: "a3d9919e-476e-4e1d-ad94-ea20abeef08c",
  qualiTranscricao: "e3b310b4-80a3-465f-82ad-6620e66303ca",
} as const;

export const LOI_OPTION: Record<string, string> = {
  "10min": "99cdd1a0-6580-445c-9ab6-065baeb745f8",
  "15min": "29d31355-1c1f-439c-a0b9-ab898b72f097",
  "20min": "ed55af66-515f-479b-843b-2db37141ebef",
  "25min": "0d1adeec-a221-49cc-98da-925bc9e21d4b",
};

export const METODOLOGIA_QUANTI_OPTION = {
  cati: "095a68f7-5aaf-45de-b585-5319256ba4e5",
  painelOnline: "84ab3da3-9eda-4e7e-8f8a-b261bc19dc33",
  fornecedorPropoe: "7fa02435-6c93-4874-bdf5-6f6d27b78758",
} as const;

export const METODO_QUALITATIVO_OPTION = {
  idi: "6c05fda3-afaf-4f3d-b02e-fe2bcc9d2e16",
  gruposFocais: "7a1a38e9-f3b4-4ec8-ae6e-f6032f919dee",
  diade: "ec145d18-f1bc-4f9c-a984-adc0a74c8ec2",
} as const;

// Dropdowns numéricos: índice do array = valor selecionado (1..N). Posição 0 é o "-".
export const N_ENTREVISTAS_IDS: string[] = [
  "d71cae56-4e70-43c2-9156-bbbbbca9a547", // "-"
  "01081bc7-199e-4cf4-8cd7-806c4d0e95e8",
  "32179a76-0992-4190-ac75-a11d2e5d09b7",
  "328e3957-93ec-4a80-a4ea-82b4fa23ffee",
  "16788a1c-5955-4841-864d-98328bab1568",
  "eb49db34-5da6-489a-b723-5507ba38af01",
  "4afa6585-ee81-4459-951e-881cdd8e9542",
  "a6c8930e-e74a-4886-b921-b52ef7823ed3",
  "ca7d6ee2-8044-46eb-9825-101b8178b33f",
  "851ed351-7c3c-45ca-a895-4cc3cf7afbae",
  "35172813-0d27-42df-b48e-a218a52a0002",
  "acdf9fcd-901b-41a5-a8c3-2e6e7d61d56e",
  "2f64bf61-f2b1-40da-b449-19d74097dc1f",
  "31128d76-8f8e-4990-b13a-33f16428496c",
  "c89fc15e-ea85-4996-a81f-ff1ea6149d01",
  "ccdabd4e-4295-453b-8a19-f3e3f3d252af",
  "f869bcbd-c06e-4ac6-a8d8-617eb5c3c2b8",
  "84227ede-23e0-4acc-9192-cf5b94a79963",
  "38760e51-62b5-4f78-b207-df0b14f525ca",
  "c7ebae90-045b-48f8-9685-41e12dab95c8",
  "610dfcc6-a948-4dbc-b07d-31e6d3be341b",
  "c6fadc30-0fdb-460d-9729-de6834794cda",
  "49b87d21-a6e5-4a05-a25b-fbde3e385194",
  "3d5770cd-12aa-4986-932c-0fc020e9f05c",
  "3446aab0-5d5b-470c-950b-e874454febfa",
  "6d9dc650-52f3-400d-8c3a-27355b73880e",
  "c0cac67a-6025-4083-ac47-eec37d78b830",
  "324b12e4-cb66-46ee-bd96-ced090e70fb5",
  "28ea7aa8-8416-430f-80db-1ee749f6c25c",
  "9803d318-87bc-4bbc-9efa-8937dc04b027",
  "a1fc6472-a343-45a1-8f02-b5a25dcba60c",
  "27dad492-cb49-4640-ad8e-fdfb6cb4785b",
  "4dda3f3d-9766-4ad2-8551-36b86857ebc0",
  "eba314aa-8f65-4277-bb46-4fe6fcd249a7",
  "ea5cc5c7-c456-4631-b2a2-6148ff9c53c2",
  "b7c93f65-b036-4d14-86e7-e3728a63e9cf",
  "ee620ffc-c213-4daf-81b4-2da453b92dfc",
  "63df3c13-d281-44de-b5df-845cfc0be773",
  "3a83f00b-3e7e-48a3-b4da-58e0a2b042de",
  "5363e1db-1571-403e-96ea-bc33e60fc8f9",
  "f12f5ce8-c99f-492d-b409-62de47b35845",
];

export const N_GRUPOS_FOCAIS_IDS: string[] = [
  "", // sem posição 0
  "3329f097-7985-408c-84e6-d78b22501554",
  "a86c6a55-be18-452a-82fa-0f4983378161",
  "8feff101-48e2-43cc-b378-939fa4d3d531",
  "c1dade0a-b261-4238-bb44-35a8a9596998",
  "746a1656-730b-42a2-96e4-1d7791cf0dda",
  "8e36eabb-b3d6-48f9-a19a-feb32ea17c27",
  "4aa96118-e735-4402-92b4-d1c96aea97bc",
  "5db4e582-8f7c-4113-a48d-b00702c804d8",
  "836f173e-907e-43ae-a338-2094a0b46c90",
  "ec1de8fc-b839-4a3d-9425-1c31a7c51e7b",
];

export const N_PARTICIPANTES_POR_GRUPO_IDS: Record<number, string> = {
  3: "77461365-f4fd-4bfb-885c-b9b70c0f9c35",
  4: "46162c7f-8ffd-4920-bbac-b2158bdd8fe3",
  5: "b6ca0115-5307-4903-ad88-421544d962ac",
  6: "049795d3-3a09-406f-860e-0e1811cc79ea",
  7: "84d3afb6-66e2-475f-95ab-bcd202ba7d03",
  8: "ac86ac52-8b83-41b5-8ee2-5e02b6959926",
  9: "8d186e85-c06a-4df2-a2b9-10a6370656f8",
  10: "85d32a96-a3d6-44e0-9b63-3239bb2309e1",
};

// ---------- Chamadas de API ----------

export type CreateTaskInput = {
  name: string;
  description: string;
  tags: string[];
  dueDateMs?: number;
};

export async function createTask(input: CreateTaskInput): Promise<{ id: string; url: string }> {
  const res = await fetch(`${CLICKUP_API}/list/${LIST_ID}/task`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      name: input.name,
      description: input.description,
      assignees: [BIANCA_USER_ID],
      tags: input.tags,
      ...(input.dueDateMs ? { due_date: input.dueDateMs, due_date_time: false } : {}),
    }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Falha ao criar task no ClickUp (${res.status}): ${text}`);
  }
  const data = await res.json();
  return { id: data.id, url: data.url };
}

export type FieldSetResult = { fieldId: string; ok: boolean; error?: string };

export async function setCustomField(
  taskId: string,
  fieldId: string,
  value: unknown
): Promise<FieldSetResult> {
  try {
    const res = await fetch(`${CLICKUP_API}/task/${taskId}/field/${fieldId}`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({ value }),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return { fieldId, ok: false, error: `${res.status} ${text}` };
    }
    return { fieldId, ok: true };
  } catch (err: any) {
    return { fieldId, ok: false, error: String(err?.message ?? err) };
  }
}

export async function attachFile(
  taskId: string,
  file: Blob,
  filename: string
): Promise<{ ok: boolean; error?: string }> {
  try {
    const form = new FormData();
    form.append("attachment", file, filename);
    const res = await fetch(`${CLICKUP_API}/task/${taskId}/attachment`, {
      method: "POST",
      headers: { Authorization: apiToken() },
      body: form,
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return { ok: false, error: `${res.status} ${text}` };
    }
    return { ok: true };
  } catch (err: any) {
    return { ok: false, error: String(err?.message ?? err) };
  }
}

export async function addComment(taskId: string, commentText: string): Promise<void> {
  await fetch(`${CLICKUP_API}/task/${taskId}/comment`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ comment_text: commentText }),
  }).catch(() => undefined);
}
