import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // If the pathname is /home, redirect to /
  if (url.pathname === "/home") {
    url.pathname = "/";
    // 308 is for permanent redirect for optimal SEO and browser caching
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}
