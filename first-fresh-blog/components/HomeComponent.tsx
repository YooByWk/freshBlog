// components/HomeComponent.tsx
import { Header } from "../components/Header.tsx";
import { localesContentsType } from "../locales/locales.ts";

import { HeroSection } from "./HeroSection.tsx";

interface Props {
  active: string;
  contents: localesContentsType;
}

export default function HomeComponent({ active, contents }: Props) {
  return (
    <>
      <Header active={active} navContent={contents.navContent} />
      <HeroSection active={active} heroContent={contents.heroContent} />
      <></> {/* 기술스택 */}
      <></> {/* 프로젝트 */}
      <></> {/* 블로그 */}
    </>
  );
}
