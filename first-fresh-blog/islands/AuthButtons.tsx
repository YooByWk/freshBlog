import { PageProps } from "$fresh/server.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useEffect, useState } from "preact/hooks";
import { verifyToken } from "../routes/api/auth.ts";
import { Button } from "../components/Button.tsx";
import { PostAPI } from "../routes/api/post.ts";



export function AuthButtons({ slug }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    async function authCheck() {
      if (!IS_BROWSER) return;
      const isValid = await verifyToken();
      if (isValid) {
        setIsAuthenticated(true);
      }
    }
    authCheck();
  }, []);

  async function handleDelete() {
    const userOpt = globalThis.window.confirm("정말로 삭제하시겠습니까?");

    if (userOpt) {
      await PostAPI.deletePostBySlug(slug);
      globalThis.location.href = '/blog';
    }

  }

  if (!isAuthenticated) {
    return <></>;
  }

  return (
    <div class="flex flex-row">
      <Button onClick={handleDelete} class="flex items-center w-fit p-4 h-3 border-solid mr-4 border-zinc-400  bg-zinc-400 rounded-md"><p>삭제</p></Button>
      <Button onClick={() => { }} class="flex items-center border-solid w-fit p-4 h-3 border-zinc-400 rounded-md bg-zinc-400"> <p>수정</p></Button>
    </div>
  );
}