import { NextRequest, NextResponse } from "next/server";
const protectedPaths=["/dashboard","/profile","/settings","/shops","/orders","/admin"];
export function middleware(request:NextRequest){ const needsAuth=protectedPaths.some(path=>request.nextUrl.pathname.startsWith(path)); const hasSession=[...request.cookies.getAll()].some(c=>c.name.includes("session_token")); if(needsAuth&&!hasSession)return NextResponse.redirect(new URL("/login",request.url)); return NextResponse.next(); }
export const config={matcher:["/dashboard/:path*","/profile/:path*","/settings/:path*","/shops/:path*","/orders/:path*","/admin/:path*"]};
