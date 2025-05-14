import { Handlers, PageProps } from "$fresh/server.ts";
import { KoHeader } from "../../components/KoHeader.tsx";
import { IPost, PostAPI } from "../api/post.ts";
import { LuSparkles as Sparkles } from "@preact-icons/lu";

const IS_DEV = Deno.env.get("IS_DEV") === "true" ? true : false;
const CACHE_DURATION = Deno.env.get("POST_CACHE_DURATION") ? parseInt(Deno.env.get("POST_CACHE_DURATION")!) : 1000 * 60 * 5; // 5분

let postListCache: {
  data: IPost[] | null,
  timestamp: number;
} = {
  data: null,
  timestamp: 0
};


export const handler: Handlers<IPost[] | { error: string; } | null> = {
  async GET(_req, ctx) {
    const now = Date.now();

    if (postListCache.data && (now - postListCache.timestamp < CACHE_DURATION)) {
      console.log('Use Cached Data');
      return ctx.render(postListCache.data, {
        headers: {
          "Cache-Control": `public, max-age=${CACHE_DURATION / 1000}, must-revalidate`,
          "Expires": new Date(now + CACHE_DURATION).toUTCString()
        }
      });
    }
    try {
      const posts: IPost[] = await PostAPI.getAllPosts();
      // 성공시
      postListCache.data = posts;
      postListCache.timestamp = now;

      return ctx.render(posts, {
        headers: {
          "Cache-Control": `public, max-age=${CACHE_DURATION / 1000}, must-revalidate`,
          "Expires": new Date(now + CACHE_DURATION).toUTCString(),
        }
      });
    } catch (error) {
      console.error(error);
      return ctx.render({ error: error.message || "알 수 없는 오류 발생" }, { status: 500 });
    }
  }
};

export default function Blog(props: PageProps<IPost[] | { error: string; } | null>) {
  const data = props.data;
  console.log(data);
  // 에러 발생시 랜더
  if (data && typeof data === 'object' && 'error' in data) {
    return (
      <>
        <head>
          <title> 오류 발생...</title>
        </head>
        <div class="flex flex-col items-center justify-center h-screen">
          <h1 class="text-4xl font-bold text-center">
            오류 발생
          </h1>
          <p class="mt-4 text-lg text-center">
            {data.error}
          </p>
          <p class="mt-2 text-sm text-muted-foreground text-center">
            잠시 후 다시 시도해주세요.
          </p>
        </div>
      </>
    );
  }


  const posts = data as IPost[];

  return (
    <>
      <KoHeader active={'/blog'} />
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen">
        {/* 타이틀 영역 - Tailwind config의 beige, warm, neutral 색상 활용 */}
        <div class="text-center mb-16">
          {/* ProjectSection의 뱃지 스타일 참고 */}
          <div class="inline-flex items-center gap-2 rounded-full bg-beige-200/70 dark:bg-zinc-800/70 px-4 py-2 text-sm text-warm-700 dark:text-purple-400 backdrop-blur-sm mb-4 border border-beige-300/50 dark:border-zinc-700/50">
            <Sparkles class="h-4 w-4" /> {/* 예시 아이콘 */}
            <span>최신 게시물</span>
          </div>
          <h1 class="text-4xl font-bold text-beige-900 dark:text-white sm:text-5xl">
            뱅어포 직판장의 게시물~
          </h1>
          <p class="mt-4 text-lg text-beige-600 dark:text-zinc-400 max-w-2xl mx-auto">
            차근차근 공사중입니다~
          </p>
        </div>

        {/* 게시물 리스트 */}
        {posts && Array.isArray(posts) && posts.length > 0 ? (
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post => {
              return (
                <a
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  class="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-zinc-800 border border-beige-200 dark:border-zinc-700 flex flex-col"
                >
                  {/* 이미지 썸네일 생각해보기. */}
                  <div class="p-6 flex-grow">
                    <h2 class="text-xl font-semibold text-beige-900 dark:text-white mb-2">{post.title}</h2>
                    {post.summary && (
                      <p class="text-beige-700 dark:text-zinc-400 text-sm mb-4">
                        {post.summary}
                      </p>
                    )}
                  </div>
                  <div class="p-6 border-t border-beige-200 dark:border-zinc-700 text-right">
                    {post.createdAt && (
                      <p class="text-xs text-beige-500 dark:text-zinc-500">
                        {new Date(post.createdAt).toLocaleDateString("ko-KR", { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                      </p>
                    )}
                  </div>
                </a>);
            }))}
          </div>
        ) :
          (
            <p> 게시물이 없습니다.</p>
          )}
      </div >
    </>
  );
};