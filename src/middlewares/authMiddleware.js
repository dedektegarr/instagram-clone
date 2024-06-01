import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function authMiddleware(request) {
  const protectedRoute = ["/", "/search"];

  const pathname = request.nextUrl.pathname;

  if (protectedRoute.includes(pathname)) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });
    if (!token) {
      const url = new URL("/login", request.url);
      console.log(request.url);
      // url.searchParams.set("callbackUrl", encodeURIComponent(request.url));
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}
