// BorderedTag.tsx
import { JSX } from "preact/jsx-runtime";
// tailwind-merge 사용
import { twMerge } from "tailwind-merge";

type BorderedTagProps = JSX.HTMLAttributes<HTMLDivElement> & {
  children: string | JSX.Element | (string | JSX.Element)[];
  className?: string;
  iconColor?: string; // 아이콘(두 원)의 색상
  textColor?: string; // 텍스트의 색상
};

function BorderedTag({
  children,
  className,
  iconColor = "bg-warm-500 dark:bg-cyan-500", // 아이콘 기본 색상
  textColor = "text-warm-600 dark:text-cyan-400", // 텍스트 기본 색상
  ...rest
}: BorderedTagProps) {
  // 기본 컨테이너 클래스에서 텍스트 색상 제거
  const defaultClasses =
    "inline-flex items-center gap-2 rounded-full bg-beige-200/70 dark:bg-zinc-800/70 px-4 py-2 text-sm backdrop-blur-sm mb-6 border border-beige-300/50 dark:border-zinc-700/50 shadow-lg";

  // 컨테이너에 외부 클래스 병합
  const mergedClasses = twMerge(defaultClasses, className);

  return (
    <div class={mergedClasses} {...rest}>
      <span class="relative flex h-3 w-3">
        {/* 애니메이션 원: 외부 iconColor 적용 */}
        <span
          class={twMerge(
            "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
            iconColor,
          )}
        >
        </span>
        {/* 정적 원: 외부 iconColor 적용 */}
        <span
          class={twMerge(
            "relative inline-flex rounded-full h-3 w-3",
            iconColor,
          )}
        >
        </span>
      </span>
      {/* 텍스트: 외부 textColor 적용 */}
      <span class={twMerge(textColor)}>{children}</span>
    </div>
  );
}

export default BorderedTag;
