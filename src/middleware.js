export const runtime = "nodejs";

import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

const secret = new TextEncoder().encode("secret");

export default async function middleware(req) {
  const token = req.cookies.get("authToken");


  try {
    if (req.nextUrl.pathname === "/login") {
      if (!token)
        return NextResponse.next();
    }
    await jwtVerify(token.value, secret);

    if (req.nextUrl.pathname === "/login") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.log("JWT verification failed:", error);

    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard",
    "/login"
  ],
};
