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
  if (!staticExtensions.some((ext) => path.endsWith(ext))) {
    console.log(`🖥️  ${req.headers.get("x-real-ip")} ::  🔗 - ${req.url}`);
  }

  return await ctx.next();
}
