import type { JSX } from "preact"
// import type { Project } from "../../types/project.ts"

interface ProjectCardProps {
  project: any
  className?: string
  imageHeight?: string
  titleSize?: string
}

export function ProjectCard({
  project,
  className = "",
  imageHeight = "h-48",
  titleSize = "text-xl",
}: ProjectCardProps): JSX.Element {
  return (
    <a
      href={`/projects/${project.slug}`}
      class={`group relative overflow-hidden rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-warm-600/50 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-warm-600/10 dark:hover:shadow-purple-500/10 transform hover:-translate-y-1 block ${className}`}
    >
      <div class={`overflow-hidden ${imageHeight}`}>
        <img
          src={project.coverImage || "/placeholder.svg"}
          alt={project.title}
          width="600"
          height="340"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
      </div>
      <div class="p-6">
        <h3
          class={`${titleSize} font-bold text-foreground group-hover:text-warm-700 dark:group-hover:text-purple-400 transition-colors`}
        >
          {project.title}
        </h3>
        <p class="mt-2 text-muted-foreground">{project.description}</p>
        <div class="mt-4 flex flex-wrap items-center gap-2">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              class="inline-block rounded-full bg-secondary/50 px-3 py-1 text-xs text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

