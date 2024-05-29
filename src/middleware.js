import { NextResponse } from "next/server";
import { authMiddleware } from "./middlewares/authMiddleware";

const middlewares = [authMiddleware];

export async function middleware(request) {
  for (const middleware of middlewares) {
    const response = await middleware(request);
    if (response) return response;
  }

  return NextResponse.next();
}
