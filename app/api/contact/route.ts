import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.formData()
  const name = String(body.get("name") || "")
  const email = String(body.get("email") || "")
  const message = String(body.get("message") || "")
  if (!name || !email || !message) return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 })
  return NextResponse.redirect("/contact?success=1", { status: 302 })
}
