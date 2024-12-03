export async function GET() {
  return new Response("Logged out", {
    status: 200,
    headers: {
      "Set-Cookie": "authToken=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict",
    },
  });
}