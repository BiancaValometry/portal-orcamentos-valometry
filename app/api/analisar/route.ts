import { NextRequest, NextResponse } from "next/server";
import { extractBriefing } from "@/lib/extract";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const textoLivre = typeof body?.textoLivre === "string" ? body.textoLivre.trim() : "";

    if (!textoLivre) {
      return NextResponse.json({ ok: false, error: "Texto vazio." }, { status: 400 });
    }

    const extraido = await extractBriefing(textoLivre);
    return NextResponse.json({ ok: true, extraido });
  } catch (err: any) {
    console.error("Erro ao analisar solicitação:", err);
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Erro inesperado ao analisar a solicitação." },
      { status: 500 }
    );
  }
}
