export const runtime = "nodejs";
import { SignJWT } from "jose";

export async function POST(req) {
  const { email, password } = await req.json();
  let token;

  const secret = new TextEncoder().encode("secret"); // Encode the secret as Uint8Array

  if (email === "user" && password === "user") {
    token = await new SignJWT({ email, role: "user" })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1h")
      .sign(secret);
  } else if (email === "admin" && password === "admin") {
    token = await new SignJWT({ email, role: "admin" })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1h")
      .sign(secret);
  } else {
    return new Response(
      JSON.stringify({ msg: "Invalid credentials" }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return new Response("Login successful", {
    status: 200,
    headers: {
      "Set-Cookie": `authToken=${token}; HttpOnly; Path=/; SameSite=Strict`,
    },
  });
}
