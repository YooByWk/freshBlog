import { FreshContext } from "$fresh/server.ts";

export async function handler(req: Request, ctx: FreshContext) {
  const url = new URL(req.url);
  const path = url.pathname;
  // 정적 파일 확장자 목록
  const staticExtensions = [
    ".js",
    ".css",
    ".map",
    ".ico",
    ".png",
    ".jpg",
    ".svg",
  ];

  // 정적 파일이 아니면 로그 출력
  if (
    req.method === "GET" && !staticExtensions.some((ext) => path.endsWith(ext))
  ) {
    console.log(
      `  🖥️  %c${req.headers.get("x-real-ip")} %c::  🔗  %c- ${req.url}`,
      "color:red",
      "color:blue",
      "color:blue; font-weight:bold",
    );
  }
  return await ctx.next();
}
