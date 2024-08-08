import { sendPromp } from "@/utils/gemini/sendPromp";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

type Res = {
  msg: string;
};

export async function GET(req: Request) {
  return Response.json({ msg: "asfd" });
}
