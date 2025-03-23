import { PageProps } from "$fresh/server.ts";
import HomeComponent from "../components/HomeComponent.tsx";
import {
  heroContentRecord,
  navContentRecord,
  techContentRecord,
  procjectContentRecord,
} from "../locales/locales.ts";

// 기본 메인 대문
export default function Home(props: PageProps) {
  const active = props.url.pathname;
  const navContent = navContentRecord[active];
  const heroContent = heroContentRecord[active];
  const techContent = techContentRecord[active];
  const projectContent = procjectContentRecord[active];
  const contents = {
    navContent,
    heroContent,
    techContent,
    projectContent,
  };

  return (
    <>
      <HomeComponent active={active} contents={contents} />
    </>
  );
}
