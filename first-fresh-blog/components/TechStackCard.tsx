import {
  LuBug,
  LuCode,
  LuDatabase,
  LuFileText,
  LuGitBranch,
  LuLink2,
  LuMonitor,
  LuPlug2,
  LuServer,
} from "@preact-icons/lu";
import { techContentType } from "../locales/locales.ts";
import { JSX } from "preact";

interface techType {
  name: string;
  description: string;
  icon: string;
}

interface TechStackCardProps {
  tech: techType;
  index: number;
  icon: string;
  className?: string;
}

export function TechStackCard(
  { tech, index, icon, className = "" }: TechStackCardProps,
) {
  const iconObj: Record<string, JSX.Element> = {
    fe: <LuMonitor />,
    be: <LuServer />,
    link: <LuLink2 />,
    db: <LuDatabase />,
    git: <LuGitBranch />,
    plug: <LuPlug2 />,
    bug: <LuBug />,
    file: <LuFileText />,
  };

  return (
    <div
      class={`group flex flex-col items-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 hover:border-warm-500/50 dark:hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-warm-500/10 dark:hover:shadow-pink-500/10 transform hover:-translate-y-1 ${className}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div class="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-warm-500/20 to-warm-700/20 dark:from-pink-500/20 dark:to-purple-600/20 text-warm-600 dark:text-pink-400 group-hover:from-warm-500/30 group-hover:to-warm-700/30 dark:group-hover:from-pink-500/30 dark:group-hover:to-purple-600/30 transition-all duration-300">
        {iconObj[tech.icon]}
      </div>
      <h3 class="mt-4 text-lg font-medium text-foreground group-hover:text-warm-600 dark:group-hover:text-pink-400 transition-colors">
        {tech.name}
      </h3>
      <p class="mt-2 text-sm text-muted-foreground text-center">
        {tech.description}
      </p>
    </div>
  );
}
