import { NextResponse } from "next/server";
export default async function middleware(request) {
  const path = request.nextUrl.pathname;
  console.log("path", path);
  console.log("request", request);
  const isPublic =
    path === "/login" || path === "/logout" || path === "/register";
  const token = request.cookies.get("token")?.value;
  console.log("token middleware", token);
  if (isPublic && token) {
    return NextResponse.redirect(new URL("/chatbot/:id", request.url));
  }
  if (!isPublic && !token) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
}

export const config = {
  matcher: ["/chatbot/:path*", "/chatbot"],
};
