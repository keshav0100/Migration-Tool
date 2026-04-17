import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; 
import { users } from "@/app/lib/db";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const existing = users.find((u) => u.email === email);
  if (existing) {
    return NextResponse.json({ error: "User exists" }, { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);

  users.push({ email, password: hashed });

  const token = jwt.sign({ email }, "secretkey", { expiresIn: "1d" });

  const res = NextResponse.json({ message: "User created" });

  res.cookies.set("token", token, {
    httpOnly: true,
    path: "/",
  });

  return res;
}
