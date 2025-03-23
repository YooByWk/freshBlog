import type { JSX } from "preact";
import { ProjectCard } from "./cards/ProjectCard.tsx";
import {
  LuSparkles as Sparkles,
  LuStar as Star
} from "@preact-icons/lu";
import { projectContentType, projectDetailRecord } from "../locales/locales.ts";


// import { Sparkles, Star } from "../../utils/icons.tsx"
// import { projects } from "../../data/projects.ts"

interface ProjectSectionProps {
  projectContent: projectContentType;
  active: string;
}

export function ProjectSection({ projectContent, active }: ProjectSectionProps): JSX.Element {
  const projects = projectDetailRecord[active];
  console.log(projects);
  return (
    <section class="flex items-center justify-center h-screen py-20 bg-gradient-to-b from-[hsl(35,25%,92%)] dark:from-zinc-900 to-[hsl(35,25%,92%)]/95 dark:to-zinc-900/95 relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('/dot-pattern.svg')] bg-center opacity-5"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="flex flex-col md:flex-row items-center justify-between mb-12">
          <div class="text-center md:text-left mb-6 md:mb-0">
            <div class="inline-flex items-center gap-2 rounded-full bg-beige-200/70 dark:bg-zinc-800/70 px-4 py-2 text-sm text-warm-700 dark:text-purple-400 backdrop-blur-sm mb-4 border border-beige-300/50 dark:border-zinc-700/50">
              <Sparkles class="h-4 w-4" />
              <span>{projectContent.badge}</span>
            </div>
            <h2 class="text-3xl font-bold text-beige-900 dark:text-white sm:text-5xl">{projectContent.title}</h2>
            <p class="mt-4 text-lg text-beige-600 dark:text-zinc-400 max-w-2xl">{projectContent.description}</p>
          </div>
          <a
            href="/projects"
            class="hidden sm:inline-flex items-center text-warm-700 hover:text-warm-800 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
          >
            {projectContent.viewAll}
            <svg
              class="ml-2 h-4 w-4"
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
          </a>
        </div>

        {/* 비정형 프로젝트 그리드 */}
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div class="md:col-span-8">
            <ProjectCard project={projects[0]} className="h-full" imageHeight="h-64" titleSize="text-2xl" />
          </div>
          {/* <div class="md:col-span-4"> */}
          {/* <ProjectCard project={projects[1]} className="h-full" imageHeight="h-48" titleSize="text-xl" /> */}
          {/* </div> */}
          {/* <div class="md:col-span-4"> */}
          {/* <ProjectCard project={projects[2]} className="h-full" imageHeight="h-48" titleSize="text-xl" /> */}
          {/* </div> */}
          <div class="md:col-span-8">
            <div class="h-full p-8 rounded-2xl bg-gradient-to-br from-warm-600/30 to-warm-700/30 dark:from-purple-900/30 dark:to-pink-900/30 border border-warm-600/30 dark:border-purple-700/30 flex flex-col justify-center">
              <div class="flex items-center gap-2 mb-4">
                <Star class="h-5 w-5 text-warm-600 dark:text-purple-400" />
                <h3 class="text-xl font-bold text-beige-900 dark:text-white">{projectContent.title}</h3>
              </div>
              <p class="text-beige-700 dark:text-zinc-300 mb-6">
                {projectContent.custom.description}
              </p>
              <a
                href="/contact"
                class="inline-flex items-center rounded-full bg-warm-500/20 border border-warm-500/50 dark:bg-purple-500/20 dark:border-purple-500/50 px-6 py-3 text-warm-700 dark:text-purple-300 hover:bg-warm-500/30 dark:hover:bg-purple-500/30 transition-colors self-start"
              >
                {projectContent.custom.cta}
                <svg
                  class="ml-2 h-4 w-4"
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
              </a>
            </div>
          </div>
        </div>

        <div class="mt-10 text-center sm:hidden">
          <a
            href="/projects"
            class="inline-flex items-center text-warm-700 hover:text-warm-800 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
          >
            {projectContent.viewAll}
            <svg
              class="ml-2 h-4 w-4"
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
          </a>
        </div>
      </div>
    </section>
  );
}

