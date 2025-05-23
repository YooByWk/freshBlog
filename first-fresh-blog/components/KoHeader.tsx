import type { JSX } from "preact";
import { LanguageSwitch } from "../islands/LanguageSwitch.tsx";
import { ThemeToggle } from "../islands/ThemeToggle.tsx";
import { navContentType } from "../locales/locales.ts";
import { Button } from "./Button.tsx";

interface KoHeaderProps {
  active: string;
}

const KoHeaderInfo = ({ active }: KoHeaderProps) => {
  return (
    <nav class="hidden md:flex items-center space-x-8">
      <a
        href="/"
        class={`text-sm font-medium transition-colors ${active === "/" || active === "/ko"
          ? "text-beige-900 dark:text-white"
          : "text-beige-700 hover:text-beige-900 dark:text-zinc-400 dark:hover:text-white"
          }`}
      >
        홈
      </a>
      <a
        href="/projects"
        class={`text-sm font-medium transition-colors ${active === "/projects"
          ? "text-beige-900 dark:text-white"
          : "text-beige-700 hover:text-beige-900 dark:text-zinc-400 dark:hover:text-white"
          }`}
      >
        프로젝트
      </a>
      <a
        href="/blog"
        class={`text-sm font-medium transition-colors ${active === "/blog"
          ? "text-beige-900 dark:text-white"
          : "text-beige-700 hover:text-beige-900 dark:text-zinc-400 dark:hover:text-white"
          }`}
      >
        블로그
      </a>
      <a
        href="/about"
        class={`text-sm font-medium transition-colors ${active === "/about"
          ? "text-beige-900 dark:text-white"
          : "text-beige-700 hover:text-beige-900 dark:text-zinc-400 dark:hover:text-white"
          }`}
      >
        소개
      </a>

      {/* 언어 선택기 */}
      {/* <LanguageSwitch curPath={active} /> */}

      {/* 테마 토글 버튼 */}
      <ThemeToggle />
      <a
        href="/contact"
        class="inline-flex items-center rounded-full bg-gradient-to-r from-warm-400 to-warm-600 dark:from-pink-500 dark:to-purple-600 px-4 py-2 text-sm font-medium text-white hover:shadow-lg hover:shadow-warm-500/25 dark:hover:shadow-pink-500/25 transition-all duration-300"
      >
        연락하기
      </a>
    </nav>
  );
};

// 헤더 컴포넌트
export function KoHeader({ active }: KoHeaderProps): JSX.Element {
  return (
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300  opacity-90 dark:bg-black/80 bg-white/90">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          {/* 로고 */}
          <a href="/" class="flex items-center">
            <span class="text-xl font-bold text-beige-900 dark:text-white">
              Banger Direct
              <span class="pl-2 text-warm-600 dark:text-pink-500">
                @
              </span>
            </span>
          </a>

          {/* 데스크탑 메뉴 */}
          <KoHeaderInfo active={active} />
          {/* 모바일 메뉴 버튼 */}
          <Button
            class="md:hidden text-beige-700 hover:text-beige-900 dark:text-zinc-400 dark:hover:text-white"
            id="mobile-menu-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>

      {/* 모바일 메뉴 (JavaScript로 토글) */}
    </header>
  );
}
