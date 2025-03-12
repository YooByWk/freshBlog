// 테마 설정 스크립트
;(() => {
  // 저장된 테마 또는 시스템 설정 확인
  const savedTheme = localStorage.getItem("theme")
  const prefersDark = globalThis.matchMedia("(prefers-color-scheme: dark)").matches

  // 테마 적용
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }

  // 모바일 메뉴 토글 스크립트
  document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuButton = document.getElementById("mobile-menu-button")
    const mobileMenu = document.getElementById("mobile-menu")
    const themeToggleMobile = document.getElementById("theme-toggle-mobile")

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden")
      })
    }

    if (themeToggleMobile) {
      themeToggleMobile.addEventListener("click", () => {
        const isDark = document.documentElement.classList.contains("dark")
        if (isDark) {
          document.documentElement.classList.remove("dark")
          localStorage.setItem("theme", "light")
        } else {
          document.documentElement.classList.add("dark")
          localStorage.setItem("theme", "dark")
        }
      })
    }
  })
})()

