// components/HomeComponent.tsx
import { Header } from "../components/Header.tsx";
import esNav from "../locales/es/nav.json" with { type: "json" };
import koNav from "../locales/ko/nav.json" with { type: "json" };
import enNav from "../locales/en/nav.json" with { type: "json" };

interface Props {
  active: string;
  navContent: navContentType;
}

// 번역 관련 파일 만들어서 옮기기
export const navContentRecord: Record<string, navContentType> = {
  "/": koNav,
  "/ko": koNav,
  "/en": enNav,
  "/es": esNav,
};

export default function HomeComponent({ active, navContent }: Props) {
  return (
    <>
      <Header active={active} navContent={navContent} />
      <p>공사장에 오신걸 환영합니다. 개판일걸요.</p>
    </>
  );
}

export type navContentType = typeof enNav;
