import { auth } from "@/lib/auth"; import { headers } from "next/headers"; import { NextResponse } from "next/server";
const bucket=new Map<string,{count:number;expires:number}>();
export async function currentUser(){const session=await auth.api.getSession({headers:await headers()});return session?.user??null}
export async function requireUser(){const user=await currentUser();if(!user)throw new Response("Non authentifié",{status:401});return user}
export async function requireAdmin(){const user=await requireUser();if((user as {role?:string}).role!=="ADMIN")throw new Response("Accès interdit",{status:403});return user}
export function protectMutation(request:Request){const origin=request.headers.get("origin");const host=request.headers.get("host");if(origin&&host&&new URL(origin).host!==host)return NextResponse.json({error:"Origine refusée"},{status:403});const key=request.headers.get("x-forwarded-for")?.split(',')[0]??"local";const now=Date.now(),state=bucket.get(key);if(!state||state.expires<now)bucket.set(key,{count:1,expires:now+60_000});else if(++state.count>40)return NextResponse.json({error:"Trop de requêtes"},{status:429});return null}
export function apiError(error:unknown){if(error instanceof Response)return new NextResponse(error.body,{status:error.status});console.error(error);return NextResponse.json({error:"Erreur interne"},{status:500})}
