// components/HomeComponent.tsx
import { Header } from "../components/Header.tsx";
import { localesContentsType } from "../locales/locales.ts";

import { HeroSection } from "./HeroSection.tsx";
import { ProjectSection } from "./ProjectSection.tsx";
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
      <ProjectSection active={active} projectContent={contents.projectContent} />
      <p>블로그 포스트 comp</p> {/* 블로그 */}
    </>
  );
}
