import { sendPromp } from "@/utils/gemini/sendPromp";

export const GET = async () => {
  return Response.json({ msg: "hello from getGeminiProp" });
};

export async function POST(req: Request) {
  const { promp } = await req.json();

  const geminiRes = await sendPromp(promp);
  return Response.json({ aiResponse: geminiRes });
}
