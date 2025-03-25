import { redirectBasedOnRole } from "utils/server-side-helper";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
export function middleware(request: NextRequest) {
  let hasAccess: any = redirectBasedOnRole(request, request.nextUrl.pathname);

  if (!hasAccess.isAutherized && hasAccess.path !== request.nextUrl.pathname) {
    return NextResponse.redirect(new URL(hasAccess.path, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
