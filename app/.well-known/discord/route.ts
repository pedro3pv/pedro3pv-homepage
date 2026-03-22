export const dynamic = "force-static";

export async function GET() {
  return new Response("dh=8b2e21c225ab4810d44f894bed376f195c7950fb", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
