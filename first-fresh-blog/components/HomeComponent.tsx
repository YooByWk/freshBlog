// components/HomeComponent.tsx
import { Header } from "../components/Header.tsx";
import { localesContentsType } from "../locales/locales.ts";

import { HeroSection } from "./HeroSection.tsx";
import TechStackSection from "./TechStackSection.tsx";

interface Props {
  active: string;
  contents: localesContentsType;
}

export default function HomeComponent({ active, contents }: Props) {
  return (
    <>
      <Header active={active} navContent={contents.navContent} />
      <HeroSection active={active} heroContent={contents.heroContent} />
      <TechStackSection active={active} techContent={contents.techContent} />
      <></> {/* 프로젝트 */}
      <></> {/* 블로그 */}
    </>
  );
}
