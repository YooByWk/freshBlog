import {
  LuGithub as Github,
  LuLinkedin as Linkedin,
  LuMail as Mail,
  LuPenTool as PenTool,
  LuTwitter as Twitter,
} from "@preact-icons/lu";
import BorderedTag from "./BorderedTag.tsx";
import { heroContentType } from "../locales/locales.ts";

interface HeroContentProps {
  heroContent: heroContentType;
  active: string;
}

export function HeroSection({ heroContent, active }: HeroContentProps) {
  return (
    <section class="relative overflow-hidden py-20 sm:py-32">
      {/* 비정형 배경 요소들 */}

      <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div
          class="absolute top-40 right-1/4 w-80 h-80 bg-warm-700/10 dark:bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        >
        </div>
        <div
          class="absolute bottom-20 left-1/3 w-64 h-64 bg-warm-600/10 dark:bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        >
        </div>

        {/* 사선 디자인 요소 */}
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-full transform -skew-y-6 bg-gradient-to-r from-warm-500/5 to-warm-700/5 dark:from-pink-500/5 dark:to-purple-500/5 -z-10">
          </div>
        </div>
      </div>

      <div
        class="container mx-auto px-4 sm:px-6 lg:px-8 z-10"
        style="min-height:73vh"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          <div>
            <BorderedTag>{heroContent.tag1}</BorderedTag>
            <BorderedTag
              className="ml-2"
              iconColor="bg-purple-500 dark:bg-purple-500"
              textColor="text-purple-500 dark:text-purple-500"
            >
              {heroContent.tag3}
            </BorderedTag>
            <BorderedTag
              className="ml-2"
              iconColor="bg-fresh-bg dark:bg-fresh-bg"
              textColor="text-fresh-bg dark:text-fresh-bg"
            >
              {heroContent.tag2}
            </BorderedTag>
            <h1 class="text-5xl font-bold tracking-tight text-beige-900 dark:text-white sm:text-6xl lg:text-7xl">
              <span class="block">{heroContent.greeting}</span>
              <span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-warm-500 via-warm-600 to-warm-700 dark:from-pink-500 dark:via-purple-500 dark:to-cyan-400 animate-gradient">
                {heroContent.welcome}
              </span>
            </h1>
            <p class="mt-6 text-lg text-beige-700 dark:text-zinc-300 max-w-2xl">
              {heroContent.description}
            </p>
            <p class="mt-6 text-lg text-beige-700 dark:text-zinc-300 max-w-2xl">
              {heroContent.description2}
            </p>
            <div class="mt-8 flex flex-wrap gap-4">
              <a
                href="/projects"
                class="group relative inline-flex items-center rounded-full bg-gradient-to-r from-warm-500 to-warm-700 dark:from-pink-500 dark:to-purple-600 px-6 py-3 text-base font-medium text-white shadow-lg hover:shadow-warm-500/25 dark:hover:shadow-pink-500/25 transition-all duration-300 overflow-hidden"
              >
                <span class="relative z-10 flex items-center">
                  {heroContent.cta.projects}
                  <svg
                    class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
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
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
                <span class="absolute inset-0 bg-gradient-to-r from-warm-600 to-warm-800 dark:from-pink-600 dark:to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity">
                </span>
              </a>
              <a
                href="/blog"
                class="group relative inline-flex items-center rounded-full border border-beige-300 dark:border-zinc-700 bg-beige-200/50 dark:bg-zinc-800/50 px-6 py-3 text-base font-medium text-beige-900 dark:text-white backdrop-blur-sm hover:bg-beige-200 dark:hover:bg-zinc-800 transition-all duration-300"
              >
                <span class="relative z-10 flex items-center">
                  {heroContent.cta.blog}
                  <svg
                    class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
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
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </a>
              <a
                href="/blog/editor"
                class="group relative inline-flex items-center rounded-full border border-warm-600/50 dark:border-cyan-700/50 bg-warm-500/10 dark:bg-cyan-900/20 px-6 py-3 text-base font-medium text-warm-700 dark:text-cyan-300 backdrop-blur-sm hover:bg-warm-500/20 dark:hover:bg-cyan-900/30 transition-all duration-300"
              >
                <span class="relative z-10 flex items-center">
                  <PenTool class="mr-2 h-4 w-4" />
                  {heroContent.cta.write}
                </span>
              </a>
            </div>

            {/* 언어 선택 */}
            <div class="mt-6 flex items-center gap-4 z-10">
              <a
                href="/"
                class={`z-10 px-3 py-1 rounded-full 
                  ${
                  active === "/" || active === "/ko"
                    ? "bg-warm-500/20 text-warm-700 dark:bg-pink-500/20 dark:text-pink-400 font-medium"
                    : "hover:bg-warm-500/10 text-beige-700 dark:text-zinc-400 hover:text-warm-700 dark:hover:text-pink-400"
                }`}
              >
                🇰🇷 한국어
              </a>
              <a
                href="/en"
                class={`z-10 px-3 py-1 rounded-full 
                  ${
                  active === "/en"
                    ? "bg-warm-500/20 text-warm-700 dark:bg-pink-500/20 dark:text-pink-400 font-medium"
                    : "hover:bg-warm-500/10 text-beige-700 dark:text-zinc-400 hover:text-warm-700 dark:hover:text-pink-400"
                }`}
              >
                🇺🇸 English
              </a>
              <a
                href="/es"
                class={`z-10 px-3 py-1 rounded-full 
                ${
                  active === "/es"
                    ? "bg-warm-500/20 text-warm-700 dark:bg-pink-500/20 dark:text-pink-400 font-medium"
                    : "hover:bg-warm-500/10 text-beige-700 dark:text-zinc-400 hover:text-warm-700 dark:hover:text-pink-400"
                }`}
              >
                🇪🇸 Español
              </a>
            </div>

            <div class="mt-10 flex items-center gap-4">
              <a
                href="https://github.com"
                class="text-beige-600 hover:text-beige-900 dark:text-zinc-400 dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
              >
                <Github class="h-6 w-6" />
                <span class="sr-only">GitHub</span>
              </a>
              <a
                href="https://twitter.com"
                class="text-beige-600 hover:text-beige-900 dark:text-zinc-400 dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
              >
                <Twitter class="h-6 w-6" />
                <span class="sr-only">Twitter</span>
              </a>
              <a
                href="https://linkedin.com"
                class="text-beige-600 hover:text-beige-900 dark:text-zinc-400 dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
              >
                <Linkedin class="h-6 w-6" />
                <span class="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:hello@example.com"
                class="text-beige-600 hover:text-beige-900 dark:text-zinc-400 dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
              >
                <Mail class="h-6 w-6" />
                <span class="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* 비대칭 3D 이미지 */}
          <div class="hidden lg:block relative">
            <div class="relative w-full max-w-md mx-auto transform rotate-3">
              <div class="absolute inset-0 bg-gradient-to-r from-warm-500 to-warm-700 dark:from-pink-500 dark:to-purple-600 rounded-2xl blur-xl opacity-30 animate-pulse">
              </div>
              <div class="relative bg-beige-100 dark:bg-zinc-800 border border-beige-300/50 dark:border-zinc-700/50 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-300">
                <img
                  src="/ava.png"
                  alt="Portfolio Preview"
                  width="500"
                  height="500"
                  class="w-full h-auto"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-beige-900/200 dark:from-zinc-900 via-transparent to-transparent opacity-20">
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-6">
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 rounded-full bg-warm-500 dark:bg-pink-500">
                    </div>
                    <div class="w-3 h-3 rounded-full bg-warm-600 dark:bg-purple-500">
                    </div>
                    <div class="w-3 h-3 rounded-full bg-warm-700 dark:bg-cyan-500">
                    </div>
                  </div>
                </div>
              </div>

              {/* 장식 요소들 */}
              <div class="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-warm-600/20 to-warm-600/10 dark:from-cyan-500/20 dark:to-cyan-500/10 rounded-xl border border-warm-600/30 dark:border-cyan-500/30 transform rotate-12">
              </div>
              <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-warm-500/20 to-warm-500/10 dark:from-pink-500/20 dark:to-pink-500/10 rounded-xl border border-warm-500/30 dark:border-pink-500/30 transform -rotate-6">
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span class="text-beige-500 dark:text-zinc-500 text-sm mb-2">
          Scroll
        </span>
        <div class="w-6 h-10 border-2 border-beige-500 dark:border-zinc-500 rounded-full flex justify-center p-1">
          <div class="w-1 h-2 bg-beige-400 dark:bg-zinc-400 rounded-full animate-bounce">
          </div>
        </div>
      </div>
    </section>
  );
}
