import { NextRequest, NextResponse } from "next/server";
import { PRECOS } from "@/lib/precosData";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const senha = typeof body?.senha === "string" ? body.senha : "";
  const senhaCorreta = process.env.HISTORICO_PASSWORD;

  if (!senhaCorreta) {
    return NextResponse.json(
      { ok: false, error: "Senha do histórico não configurada no servidor (HISTORICO_PASSWORD)." },
      { status: 500 }
    );
  }
  if (!senha || senha !== senhaCorreta) {
    return NextResponse.json({ ok: false, error: "Senha incorreta." }, { status: 401 });
  }

  return NextResponse.json({ ok: true, dados: PRECOS });
}
