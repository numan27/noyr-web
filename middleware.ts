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

// Maintenance Mode

// import { redirectBasedOnRole } from "utils/server-side-helper";
// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   // ✅ Toggle maintenance mode
//   const maintenance = true;

//   // ✅ Bypass redirect if already on /maintenance
//   if (maintenance && !request.nextUrl.pathname.startsWith("/maintenance")) {
//     return NextResponse.rewrite(new URL("/maintenance", request.url));
//   }

//   // Your existing role-based logic
//   let hasAccess: any = redirectBasedOnRole(request, request.nextUrl.pathname);
//   if (!hasAccess.isAutherized && hasAccess.path !== request.nextUrl.pathname) {
//     return NextResponse.redirect(new URL(hasAccess.path, request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!_next|favicon.ico|images|icons|fonts|maintenance).*)"],
// };
