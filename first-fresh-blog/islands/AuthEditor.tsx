import { useEffect, useState } from "preact/hooks";
import { isAuthenticatedClientSide, verifyToken } from "../routes/api/auth.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import Editor from "./Editor.tsx";
import { Button } from "../components/Button.tsx";



export function AuthEditor() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    let isMounted = true;
    // 브라우저 환경에서만 실행되도록 확인
    async function authCheck() {
      if (!IS_BROWSER) return;
      if (isAuthenticatedClientSide()) {
        console.log("인증 토큰 감지됨. ");
        const isValid = await verifyToken();
        if (isValid) {
          setIsAuthenticated(true);
        }
        else {
          console.log("인증 토큰 없음. 블로그 페이지로 리다이렉트합니다.");
          setIsAuthenticated(false); // 토큰이 없으면 isAuthenticated state를 false로 설정
          // ✅ localStorage에 토큰이 없으면 로그인 페이지로 즉시 리다이렉트
          // window.location.href를 사용하면 페이지 전체가 새로 로드됩니다.
          globalThis.location.href = '/blog';
        }
      }
    }
    authCheck();
    return () => { isMounted = false; };
  }, []); // 빈 의존성 배열 -> 컴포넌트가 브라우저에 마운트될 때 한 번만 실행

  if (isAuthenticated === null) {
    return (
      <div class="loading-page flex flex-col justify-center items-center" style="display: flex; justify-content: center; align-items: center; height: 100vh;">
        관리자 페이지입니다.
        {/* 로딩 스피너 등을 추가할 수 있습니다. */}
        <div class=" mt-10 border-fuchsia-300 border p-4 " style="border-radius:8px;" onClick={() => globalThis.location.href = '/blog'}>
          <Button >블로그로 돌아가기</Button>
        </div>
      </div>
    );
  }

  if (isAuthenticated === false) {
    return (
      <div class="not-authenticated-page" style="display: flex; justify-content: center; align-items: center; height: 100vh;">
        로그인이 필요합니다. 로그인 페이지로 이동 중...
      </div>
    );
  }

  return (
    <>
      <Editor />
    </>
  );
}