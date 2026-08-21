import { NextRequest, NextResponse } from "next/server";
import { ExtractedBriefingSchema } from "@/lib/extract";
import { estimarCusto } from "@/lib/estimate";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = ExtractedBriefingSchema.safeParse(body?.extraido);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Dados extraídos inválidos." }, { status: 400 });
    }

    const estimativa = await estimarCusto(parsed.data);
    return NextResponse.json({ ok: true, estimativa });
  } catch (err: any) {
    console.error("Erro ao estimar custo:", err);
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Erro inesperado ao estimar custo." },
      { status: 500 }
    );
  }
}
