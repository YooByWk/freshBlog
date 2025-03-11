import {
  LuArrowRight as ArrowRight,
  LuCode as Code,
  LuFileText as FileText,
  LuGithub as Github,
  LuLinkedin as Linkedin,
  LuMail as Mail,
  LuPenTool as PenTool,
  LuSparkles as Sparkles,
  LuStar as Star,
} from "@preact-icons/lu";

// from "../components/LucideIcons.tsx";
export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(35,25%,92%)] dark:bg-zinc-900 overflow-hidden">
      {/* 비대칭 히어로 섹션 */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        {/* 비정형 배경 요소들 */}
        <div className="absolute inset-0 bg-gradient-to-br from-warm-500/10 dark:from-purple-900/20 via-[hsl(35,25%,92%)] dark:via-background to-[hsl(35,25%,92%)] dark:to-background">
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-warm-500/10 dark:bg-pink-500/20 rounded-full filter blur-3xl animate-pulse">
          </div>
          <div
            className="absolute top-40 right-1/4 w-80 h-80 bg-warm-700/10 dark:bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          >
          </div>
          <div
            className="absolute bottom-20 left-1/3 w-64 h-64 bg-warm-600/10 dark:bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          >
          </div>

          {/* 사선 디자인 요소 */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full transform -skew-y-6 bg-gradient-to-r from-warm-500/5 to-warm-700/5 dark:from-pink-500/5 dark:to-purple-500/5 -z-10">
            </div>
          </div>

          {/* 도트 패턴 */}
          <div className="absolute inset-0 bg-[url('/dot-pattern.svg')] bg-center opacity-5">
          </div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-beige-200/70 dark:bg-zinc-800/70 px-4 py-2 text-sm text-warm-600 dark:text-cyan-400 backdrop-blur-sm mb-6 border border-beige-300/50 dark:border-zinc-700/50 shadow-lg">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warm-600 dark:bg-cyan-400 opacity-75">
                  </span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-warm-500 dark:bg-cyan-500">
                  </span>
                </span>
                <span>개발자 & 디자이너</span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-beige-900 dark:text-white sm:text-6xl lg:text-7xl">
                <span className="block">안녕하세요,</span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-warm-500 via-warm-600 to-warm-700 dark:from-pink-500 dark:via-purple-500 dark:to-cyan-400 animate-gradient">
                  포트폴리오와 블로그에 오신 것을 환영합니다
                </span>
              </h1>
              <p className="mt-6 text-lg text-beige-700 dark:text-zinc-300 max-w-2xl">
                웹 개발, 디자인, 그리고 창의적인 프로젝트에 대한 저의 여정을
                공유합니다. 최신 기술 스택과 디자인 트렌드를 활용한 작업물을
                확인해보세요.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/projects"
                  className="group relative inline-flex items-center rounded-full bg-gradient-to-r from-warm-500 to-warm-700 dark:from-pink-500 dark:to-purple-600 px-6 py-3 text-base font-medium text-white shadow-lg hover:shadow-warm-500/25 dark:hover:shadow-pink-500/25 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    프로젝트 보기
                    <ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-warm-600 to-warm-800 dark:from-pink-600 dark:to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  </span>
                </a>
                <a
                  href="/blog"
                  className="group relative inline-flex items-center rounded-full border border-beige-300 dark:border-zinc-700 bg-beige-200/50 dark:bg-zinc-800/50 px-6 py-3 text-base font-medium text-beige-900 dark:text-white backdrop-blur-sm hover:bg-beige-200 dark:hover:bg-zinc-800 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    블로그 읽기
                    <ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
                <a
                  href="/blog/editor"
                  className="group relative inline-flex items-center rounded-full border border-warm-600/50 dark:border-cyan-700/50 bg-warm-500/10 dark:bg-cyan-900/20 px-6 py-3 text-base font-medium text-warm-700 dark:text-cyan-300 backdrop-blur-sm hover:bg-warm-500/20 dark:hover:bg-cyan-900/30 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    <PenTool class="mr-2 h-4 w-4" />글 작성하기
                  </span>
                </a>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <a
                  href="https://github.com"
                  className="text-beige-600 hover:text-beige-900 dark:text-zinc-400 dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
                >
                  <Github class="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-beige-600 hover:text-beige-900 dark:text-zinc-400 dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
                >
                  <Linkedin class="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="text-beige-600 hover:text-beige-900 dark:text-zinc-400 dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
                >
                  <Mail class="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>

            {/* 비대칭 3D 이미지 */}
            <div className="hidden lg:block relative">
              <div className="relative w-full max-w-md mx-auto transform rotate-3">
                <div className="absolute inset-0 bg-gradient-to-r from-warm-500 to-warm-700 dark:from-pink-500 dark:to-purple-600 rounded-2xl blur-xl opacity-30 animate-pulse">
                </div>
                <div className="relative bg-beige-100 dark:bg-zinc-800 border border-beige-300/50 dark:border-zinc-700/50 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-300">
                  <img
                    src="/placeholder.svg?height=500&width=500"
                    alt="Portfolio Preview"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-beige-900/50 dark:from-zinc-900 via-transparent to-transparent opacity-60">
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warm-500 dark:bg-pink-500">
                      </div>
                      <div className="w-3 h-3 rounded-full bg-warm-600 dark:bg-purple-500">
                      </div>
                      <div className="w-3 h-3 rounded-full bg-warm-700 dark:bg-cyan-500">
                      </div>
                    </div>
                  </div>
                </div>

                {/* 장식 요소들 */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-warm-600/20 to-warm-600/10 dark:from-cyan-500/20 dark:to-cyan-500/10 rounded-xl border border-warm-600/30 dark:border-cyan-500/30 transform rotate-12">
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-warm-500/20 to-warm-500/10 dark:from-pink-500/20 dark:to-pink-500/10 rounded-xl border border-warm-500/30 dark:border-pink-500/30 transform -rotate-6">
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 스크롤 인디케이터 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-beige-500 dark:text-zinc-500 text-sm mb-2">
            스크롤
          </span>
          <div className="w-6 h-10 border-2 border-beige-500 dark:border-zinc-500 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-beige-400 dark:bg-zinc-400 rounded-full animate-bounce">
            </div>
          </div>
        </div>
      </section>

      {/* 기술 스택 섹션 - 비정형 레이아웃 */}
      <section className="py-20 bg-[hsl(35,25%,92%)] dark:bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(35,25%,92%)] dark:from-zinc-900 via-[hsl(35,25%,92%)]/95 dark:via-zinc-900/95 to-[hsl(35,25%,92%)] dark:to-zinc-900">
        </div>
        <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-warm-600/10 dark:from-purple-900/10 to-transparent">
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-l from-warm-700/10 dark:from-cyan-900/10 to-transparent">
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-beige-200/70 dark:bg-zinc-800/70 px-4 py-2 text-sm text-warm-600 dark:text-pink-400 backdrop-blur-sm mb-4 border border-beige-300/50 dark:border-zinc-700/50">
              <Code />
              <span>TECH STACK</span>
            </div>
            <h2 className="text-3xl font-bold text-beige-900 dark:text-white sm:text-5xl">
              기술 스택
            </h2>
            <p className="mt-4 text-lg text-beige-600 dark:text-zinc-400 max-w-2xl mx-auto">
              프로젝트에서 사용하는 주요 기술과 도구들입니다
            </p>
          </div>

          {/* 비정형 그리드 레이아웃 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStacks.slice(0, 4).map((tech, index) => (
              <TechStackCard
                key={tech.name}
                tech={tech}
                index={index}
                className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}
              />
            ))}

            {techStacks.slice(4, 8).map((tech, index) => (
              <TechStackCard
                key={tech.name}
                tech={tech}
                index={index + 4}
                className={index === 1 ? "md:col-span-2" : ""}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 주요 프로젝트 섹션 - 비대칭 디자인 */}
      <section className="py-20 bg-gradient-to-b from-[hsl(35,25%,92%)] dark:from-zinc-900 to-[hsl(35,25%,92%)]/95 dark:to-zinc-900/95 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/dot-pattern.svg')] bg-center opacity-5">
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <div className="inline-flex items-center gap-2 rounded-full bg-beige-200/70 dark:bg-zinc-800/70 px-4 py-2 text-sm text-warm-700 dark:text-purple-400 backdrop-blur-sm mb-4 border border-beige-300/50 dark:border-zinc-700/50">
                <Sparkles class="h-4 w-4" />
                <span>PROJECTS</span>
              </div>
              <h2 className="text-3xl font-bold text-beige-900 dark:text-white sm:text-5xl">
                주요 프로젝트
              </h2>
              <p className="mt-4 text-lg text-beige-600 dark:text-zinc-400 max-w-2xl">
                최근에 작업한 주요 프로젝트들입니다
              </p>
            </div>
            <a
              href="/projects"
              className="hidden sm:inline-flex items-center text-warm-700 hover:text-warm-800 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
            >
              모든 프로젝트 보기
              <ArrowRight class="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* 비정형 프로젝트 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <ProjectCard
                project={projects[0]}
                className="h-full"
                imageHeight="h-64"
                titleSize="text-2xl"
              />
            </div>
            <div className="md:col-span-4">
              <ProjectCard
                project={projects[1]}
                className="h-full"
                imageHeight="h-48"
                titleSize="text-xl"
              />
            </div>
            <div className="md:col-span-4">
              <ProjectCard
                project={projects[2]}
                className="h-full"
                imageHeight="h-48"
                titleSize="text-xl"
              />
            </div>
            <div className="md:col-span-8">
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-warm-600/30 to-warm-700/30 dark:from-purple-900/30 dark:to-pink-900/30 border border-warm-600/30 dark:border-purple-700/30 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Star class="h-5 w-5 text-warm-600 dark:text-purple-400" />
                  <h3 className="text-xl font-bold text-beige-900 dark:text-white">
                    맞춤형 프로젝트가 필요하신가요?
                  </h3>
                </div>
                <p className="text-beige-700 dark:text-zinc-300 mb-6">
                  다양한 기술 스택과 경험을 바탕으로 귀하의 비즈니스에 맞는
                  맞춤형 솔루션을 제공해 드립니다.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-warm-500/20 border border-warm-500/50 dark:bg-purple-500/20 dark:border-purple-500/50 px-6 py-3 text-warm-700 dark:text-purple-300 hover:bg-warm-500/30 dark:hover:bg-purple-500/30 transition-colors self-start"
                >
                  문의하기
                  <ArrowRight class="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center sm:hidden">
            <a
              href="/projects"
              className="inline-flex items-center text-warm-700 hover:text-warm-800 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
            >
              모든 프로젝트 보기
              <ArrowRight class="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 블로그 포스트 섹션 - 비대칭 디자인 */}
      <section className="py-20 bg-[hsl(35,25%,92%)]/80 dark:bg-zinc-900/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/dot-pattern.svg')] bg-center opacity-5">
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-warm-600/10 dark:from-cyan-900/10 to-transparent">
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <div className="inline-flex items-center gap-2 rounded-full bg-beige-200/70 dark:bg-zinc-800/70 px-4 py-2 text-sm text-warm-600 dark:text-cyan-400 backdrop-blur-sm mb-4 border border-beige-300/50 dark:border-zinc-700/50">
                <FileText class="h-4 w-4" />
                <span>BLOG</span>
              </div>
              <h2 className="text-3xl font-bold text-beige-900 dark:text-white sm:text-5xl">
                최근 블로그 포스트
              </h2>
              <p className="mt-4 text-lg text-beige-600 dark:text-zinc-400 max-w-2xl">
                개발, 디자인, 그리고 창의적인 생각들에 대한 이야기
              </p>
            </div>
            <a
              href="/blog"
              className="hidden sm:inline-flex items-center text-warm-600 hover:text-warm-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors"
            >
              모든 포스트 보기
              <ArrowRight class="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* 비정형 블로그 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-6">
              <BlogPostCard
                post={blogPosts[0]}
                className="h-full"
                imageHeight="h-56"
                titleSize="text-2xl"
              />
            </div>
            <div className="md:col-span-6">
              <div className="grid grid-cols-1 gap-8 h-full">
                <BlogPostCard
                  post={blogPosts[1]}
                  className=""
                  imageHeight="h-40"
                  titleSize="text-xl"
                />
                <BlogPostCard
                  post={blogPosts[2]}
                  className=""
                  imageHeight="h-40"
                  titleSize="text-xl"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 text-center sm:hidden">
            <a
              href="/blog"
              className="inline-flex items-center text-warm-600 hover:text-warm-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors"
            >
              모든 포스트 보기
              <ArrowRight class="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 뉴스레터 섹션 - 비대칭 디자인 */}
      <section className="py-20 bg-gradient-to-br from-[hsl(35,25%,92%)] via-[hsl(35,25%,92%)] to-beige-100/50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-warm-600/10 dark:from-purple-900/10 to-transparent">
        </div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-warm-700/10 dark:from-cyan-900/10 to-transparent">
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-beige-200/70 dark:bg-zinc-800/70 px-4 py-2 text-sm text-warm-600 dark:text-cyan-400 backdrop-blur-sm mb-6 border border-beige-300/50 dark:border-zinc-700/50">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warm-600 dark:bg-cyan-400 opacity-75">
                    </span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-warm-500 dark:bg-cyan-500">
                    </span>
                  </span>
                  <span>STAY UPDATED</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-beige-900 dark:text-white mb-4">
                  최신 개발 트렌드를
                  <br />
                  놓치지 마세요
                </h2>
                <p className="text-beige-700 dark:text-zinc-300 mb-6">
                  새로운 블로그 포스트와 프로젝트 소식을 가장 먼저 받아보세요.
                  스팸은 보내지 않으며, 언제든지 구독을 취소할 수 있습니다.
                </p>
              </div>

              <div className="md:col-span-2">
                <div className="bg-beige-100/50 dark:bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-beige-300/50 dark:border-zinc-700/50 shadow-xl">
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-beige-700 dark:text-zinc-300 mb-1"
                      >
                        이름
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="홍길동"
                        className="w-full px-4 py-3 rounded-xl bg-beige-200/50 dark:bg-zinc-700/50 border border-beige-300/50 dark:border-zinc-600/50 text-beige-900 dark:text-white placeholder-beige-500 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-warm-500/50 dark:focus:ring-cyan-500/50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-beige-700 dark:text-zinc-300 mb-1"
                      >
                        이메일
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="hello@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-beige-200/50 dark:bg-zinc-700/50 border border-beige-300/50 dark:border-zinc-600/50 text-beige-900 dark:text-white placeholder-beige-500 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-warm-500/50 dark:focus:ring-cyan-500/50"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-warm-500 to-warm-700 dark:from-cyan-500 dark:to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-warm-500/25 dark:hover:shadow-cyan-500/25 transition-all duration-300"
                    >
                      구독하기
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// 기술 스택 카드 컴포넌트
function TechStackCard({
  tech,
  index,
  className = "",
}: {
  tech: any;
  index: number;
  className?: string;
}) {
  return (
    <div
      className={`group flex flex-col items-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 hover:border-warm-500/50 dark:hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-warm-500/10 dark:hover:shadow-pink-500/10 transform hover:-translate-y-1 ${className}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-warm-500/20 to-warm-700/20 dark:from-pink-500/20 dark:to-purple-600/20 text-warm-600 dark:text-pink-400 group-hover:from-warm-500/30 group-hover:to-warm-700/30 dark:group-hover:from-pink-500/30 dark:group-hover:to-purple-600/30 transition-all duration-300">
        {tech.icon}
      </div>
      <h3 className="mt-4 text-lg font-medium text-foreground group-hover:text-warm-600 dark:group-hover:text-pink-400 transition-colors">
        {tech.name}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground text-center">
        {tech.description}
      </p>
    </div>
  );
}

// 프로젝트 카드 컴포넌트
function ProjectCard({
  project,
  className = "",
  imageHeight = "h-48",
  titleSize = "text-xl",
}: {
  project: any;
  className?: string;
  imageHeight?: string;
  titleSize?: string;
}) {
  return (
    <a
      href={`/projects/${project.slug}`}
      className={`group relative overflow-hidden rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-warm-600/50 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-warm-600/10 dark:hover:shadow-purple-500/10 transform hover:-translate-y-1 block ${className}`}
    >
      <div className={`overflow-hidden ${imageHeight}`}>
        <img
          src={project.coverImage || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={340}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300">
        </div>
      </div>
      <div className="p-6">
        <h3
          className={`${titleSize} font-bold text-foreground group-hover:text-warm-700 dark:group-hover:text-purple-400 transition-colors`}
        >
          {project.title}
        </h3>
        <p className="mt-2 text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="inline-block rounded-full bg-secondary/50 px-3 py-1 text-xs text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

// 블로그 포스트 카드 컴포넌트
function BlogPostCard({
  post,
  className = "",
  imageHeight = "h-48",
  titleSize = "text-xl",
  compact = false,
}: {
  post: any;
  className?: string;
  imageHeight?: string;
  titleSize?: string;
  compact?: boolean;
}) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className={`group relative overflow-hidden rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-warm-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-warm-500/10 dark:hover:shadow-cyan-500/10 transform hover:-translate-y-1 block ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div
          className={`md:col-span-${
            compact ? "5" : "12"
          } overflow-hidden ${imageHeight}`}
        >
          <img
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            width={600}
            height={340}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300">
          </div>
        </div>
        <div className={`md:col-span-${compact ? "7" : "12"} p-6`}>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <time dateTime={post.date}>{post.date}</time>
            <span>•</span>
            <span>{post.readingTime} 분 읽기</span>
          </div>
          <h3
            className={`${titleSize} font-bold text-foreground group-hover:text-warm-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2`}
          >
            {post.title}
          </h3>
          {!compact && (
            <p className="mt-2 text-muted-foreground line-clamp-2">
              {post.excerpt}
            </p>
          )}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {post.tags.slice(0, compact ? 1 : 2).map((tag: string) => (
              <span
                key={tag}
                className="inline-block rounded-full bg-secondary/50 px-3 py-1 text-xs text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > (compact ? 1 : 2) && (
              <span className="inline-block rounded-full bg-secondary/50 px-3 py-1 text-xs text-secondary-foreground">
                +{post.tags.length - (compact ? 1 : 2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}

// Sample data
const techStacks = [
  {
    name: "Frontend",
    description: "React, Vue, Svelte를 활용한 모던 UI 개발",
    icon: <Code class="h-6 w-6" />,
  },
  {
    name: "Backend",
    description: "Node.js, Express, Django를 이용한 서버 개발",
    icon: <Code class="h-6 w-6" />,
  },
  {
    name: "Design",
    description: "Figma, Adobe XD를 활용한 UI/UX 디자인",
    icon: <Code class="h-6 w-6" />,
  },
  {
    name: "Database",
    description: "MongoDB, PostgreSQL, Firebase를 활용한 데이터 관리",
    icon: <Code class="h-6 w-6" />,
  },
  {
    name: "DevOps",
    description: "Docker, AWS, Vercel을 활용한 배포 및 운영",
    icon: <Code class="h-6 w-6" />,
  },
  {
    name: "Mobile",
    description: "React Native, Flutter를 활용한 모바일 앱 개발",
    icon: <Code class="h-6 w-6" />,
  },
  {
    name: "Testing",
    description: "Jest, Cypress를 활용한 테스트 자동화",
    icon: <Code class="h-6 w-6" />,
  },
  {
    name: "Content",
    description: "Markdown, CMS를 활용한 콘텐츠 관리",
    icon: <FileText class="h-6 w-6" />,
  },
];

const blogPosts = [
  {
    id: 1,
    title: "웹 개발에서 타입스크립트의 중요성",
    slug: "importance-of-typescript",
    excerpt:
      "타입스크립트가 어떻게 개발 경험을 향상시키고 버그를 줄이는지 알아봅니다.",
    date: "2023-11-15",
    readingTime: 5,
    coverImage: "/placeholder.svg?height=340&width=600",
    tags: ["TypeScript", "Web Development"],
  },
  {
    id: 2,
    title: "모던 CSS 프레임워크 비교",
    slug: "modern-css-frameworks",
    excerpt:
      "Tailwind CSS, Bootstrap 5, Bulma 등 인기 있는 CSS 프레임워크를 비교해봅니다.",
    date: "2023-10-28",
    readingTime: 7,
    coverImage: "/placeholder.svg?height=340&width=600",
    tags: ["CSS", "Frontend"],
  },
  {
    id: 3,
    title: "효율적인 상태 관리 전략",
    slug: "state-management-strategies",
    excerpt:
      "복잡한 애플리케이션에서 상태를 효율적으로 관리하는 방법을 알아봅니다.",
    date: "2023-10-10",
    readingTime: 6,
    coverImage: "/placeholder.svg?height=340&width=600",
    tags: ["React", "State Management"],
  },
];

const projects = [
  {
    id: 1,
    title: "AI 기반 이미지 생성 앱",
    slug: "ai-image-generator",
    description: "인공지능을 활용한 이미지 생성 웹 애플리케이션",
    coverImage: "/placeholder.svg?height=340&width=600",
    technologies: ["React", "TensorFlow.js", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "실시간 협업 플랫폼",
    slug: "realtime-collaboration",
    description: "WebSocket을 활용한 실시간 문서 협업 도구",
    coverImage: "/placeholder.svg?height=340&width=600",
    technologies: ["Next.js", "Socket.io", "MongoDB"],
  },
  {
    id: 3,
    title: "암호화폐 트래킹 대시보드",
    slug: "crypto-dashboard",
    description: "다양한 암호화폐의 가격과 트렌드를 추적하는 대시보드",
    coverImage: "/placeholder.svg?height=340&width=600",
    technologies: ["Vue.js", "D3.js", "CoinGecko API"],
  },
];
