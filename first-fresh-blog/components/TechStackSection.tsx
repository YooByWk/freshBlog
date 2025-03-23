import { LuCode as Code } from "@preact-icons/lu";
import { techContentType } from "../locales/locales.ts";
import { TechStackCard } from "./cards/TechStackCard.tsx";

interface TechSectionProps {
  techContent: techContentType;
  active: string;
}

export default function TechStackSection(
  { techContent, active }: TechSectionProps,
) {
  return (
    <section class="flex h-screen items-center justify-center pt-16 pb-20 bg-[hsl(35,25%,92%)] dark:bg-zinc-900 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-[hsl(35,25%,92%)] dark:from-zinc-900 via-[hsl(35,25%,92%)]/95 dark:via-zinc-900/95 to-[hsl(35,25%,92%)] dark:to-zinc-900">
      </div>
      <div class="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-warm-600/10 dark:from-purple-900/10 to-transparent">
      </div>
      <div class="absolute right-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-l from-warm-700/10 dark:from-cyan-900/10 to-transparent">
      </div>

      <div class="container mx-auto  px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 rounded-full bg-beige-200/70 dark:bg-zinc-800/70 px-4 py-2 text-sm text-warm-600 dark:text-pink-400 backdrop-blur-sm mb-6 border border-beige-300/50 dark:border-zinc-700/50">
            <Code class="h-4 w-4" />
            <span>{techContent.badge}</span>
          </div>
          <h2 class="text-3xl font-bold text-beige-900 dark:text-white sm:text-5xl">
            {techContent.badge}
          </h2>
          <p class="mt-4 text-lg text-beige-600 dark:text-zinc-400 max-w-2xl mx-auto">
            {techContent.description}
          </p>
        </div>

        {/* 비정형 그리드 레이아웃 */}
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techContent.techStacks.slice(0, 4).map((tech, index) => (
            <TechStackCard
              key={tech.name}
              tech={tech}
              index={index}
              className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}
            />
          ))}

          {techContent.techStacks.slice(4, 8).map((tech, index) => (
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
  );
}
