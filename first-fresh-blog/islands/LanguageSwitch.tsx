interface LanguageSwitchProps {
  curPath: string;
}

export function LanguageSwitch({ curPath }: LanguageSwitchProps) {
  const currentLang = curPath.startsWith("/ko") || curPath === "/"
    ? "ko"
    : curPath.startsWith("/en")
      ? "en"
      : "es";

  console.log("lang", currentLang);

  return (
    <div class="flex space-x-2">
      <a
        href="/"
        class={`px-2 py-1 rounded-md text-sm ${currentLang === "ko"
            ? "bg-warm-500/20 text-warm-700 dark:bg-pink-500/20 dark:text-pink-400"
            : "text-beige-700 dark:text-zinc-400 hover:text-warm-700 dark:hover:text-pink-400"
          }`}
      >
        🇰🇷
      </a>
      <a
        href="/en"
        class={`px-2 py-1 rounded-md text-sm ${currentLang === "en"
            ? "bg-warm-500/20 text-warm-700 dark:bg-pink-500/20 dark:text-pink-400"
            : "text-beige-700 dark:text-zinc-400 hover:text-warm-700 dark:hover:text-pink-400"
          }`}
      >
        en
      </a>
      <a
        href="/es"
        class={`px-2 py-1 rounded-md text-sm ${currentLang === "es"
            ? "bg-warm-500/20 text-warm-700 dark:bg-pink-500/20 dark:text-pink-400"
            : "text-beige-700 dark:text-zinc-400 hover:text-warm-700 dark:hover:text-pink-400"
          }`}
      >
        🇪🇸
      </a>
    </div>
  );
}
