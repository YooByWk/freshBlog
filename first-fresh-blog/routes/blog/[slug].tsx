import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { IPost } from "../api/post.ts";
import { PostAPI } from "../api/post.ts";
import * as datetime from "@std/datetime";
import { KoHeader } from "../../components/KoHeader.tsx";
import DOMPurify from "npm:isomorphic-dompurify";
import { AuthButtons } from "../../islands/AuthButtons.tsx";




export const handler: Handlers<IPost | { error: string; } | null> = {
  async GET(_req, ctx) {
    const slug = ctx.params.slug;
    console.log(`Fetch by Slug: ${slug}  `);
    try {
      const post: IPost = await PostAPI.getPostBySlug(slug);

      if (!post) {
        return ctx.renderNotFound({ error: "포스트를 찾을 수 없습니다." });
      }

      const sanitizedContent = DOMPurify.sanitize(post.content);
      const postWithSanitizedContent = {
        ...post,
        content: sanitizedContent
      };

      return ctx.render(postWithSanitizedContent, {
        headers: {
          "Cache-Control": `public, max-age=60, must-revalidate`,
          "Expires": new Date(Date.now()).toUTCString(),
        }
      });

    } catch (error) {
      console.error(`게시물 상세 Fetch 중 오류 발생 (${slug}):`, error);
      const errorMessage = (error instanceof Error) ? error.message :
        (typeof error === 'object' && error !== null && 'message' in error && typeof error.message === 'string') ? error.message :
          "알 수 없는 오류 발생";
      return ctx.render({ error: errorMessage }, { status: 500 });
    }

  }
};

export default function PostDetailPage(props: PageProps<IPost | { error: string; } | null>) {
  const data = props.data;

  if (data && typeof data === 'object' && 'error' in data) {
    return (
      <>
        <Head>
          <title> 뱅어포와 공룡</title>
        </Head>
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen text-center">
          <h1 class="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">
            오류가 발생했습니다 . . .
          </h1>
          <p class="text-lg text-beige-700 dark:text-zinc-400">
            {data.error}
          </p>
        </div>
      </>
    );
  }

  const post: IPost = data as IPost;
  const formattedDate = post?.createdAt ? datetime.format(new Date(post.createdAt), "yyyy년 MM월 dd일 HH:mm") : "날짜 없음";
  const formattedUpdatedAt = post?.updatedAt && post.createdAt !== post.updatedAt ? datetime.format(new Date(post.updatedAt), "yyyy년 MM월 dd일 HH:mm") : null;

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <KoHeader active='/blog' />

      {/* 게시물 불러오기 */}
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen">

        <div class="pt-16 mb-8 px-16"> {/* mb-8은 제목/메타와 내용 사이 간격 */}
          <div class="flex flex-row justify-between">
            <h1 class="text-4xl font-bold text-beige-900 dark:text-white mb-2 break-words"> {/* 제목 스타일 강화 */}
              {post.title}
            </h1>
            <AuthButtons slug={post.slug} />
          </div>

          <div class="text-sm text-beige-600 dark:text-zinc-500"> {/* 메타 정보 스타일 */}
            {post.createdAt && <p>작성일: {formattedDate}</p>}
            {formattedUpdatedAt && <p>수정일: {formattedUpdatedAt}</p>}
          </div>
        </div>

        {/* 게시물 내용 */}
        <div
          style="max-width: 800px; margin: 0 auto;"
          class={`post-content prose prose-lg  dark:prose-invert leading-relaxed mt-4 text-beige-800 dark:text-zinc-300`}
          dangerouslySetInnerHTML={{ __html: post.content }}
        >
          {/* Quill 에디터가 생성한 HTML 콘텐츠. */}
        </div>
        {/* 목록버튼 */}
        <div class="mt-12 text-center">
          <a
            href='/blog'
            class="inline-block bg-beige-300/70 dark:bg-zinc-700/70 hover:bg-beige-400/70 dark:hover:bg-zinc-600/70 text-beige-800 dark:text-zinc-200 font-bold py-2 px-6 rounded-lg transition-colors duration-200"
          >
            목록으로 돌아가기
          </a>

        </div>
      </div>

    </>);
}