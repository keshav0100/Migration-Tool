import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;

  const isAuthPage =
    pathname.startsWith("/login") || pathname.startsWith("/signup");

  // ✅ API skip
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // ❌ not logged in → redirect
  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // ❌ logged in → block login/signup
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

// ✅ VERY IMPORTANT
export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};
