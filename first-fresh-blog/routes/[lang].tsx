import { PageProps } from "$fresh/server.ts";
import HomeComponent from "../components/HomeComponent.tsx";
import {
  heroContentRecord,
  navContentRecord,
  techContentRecord,
} from "../locales/locales.ts";
import _404 from "./_404.tsx";

// 핸들러로 ko es en 외에 다른 lang 이라는 슬러그는 404 리다이렉트

export default function Lang(props: PageProps) {
  const lang = "/" + props.params.lang;
  const supportLangs = ["/ko", "/es", "/en"];
  if (!supportLangs.includes(lang)) return <_404 />;

  const navContent = navContentRecord[lang];
  const heroContent = heroContentRecord[lang];
  const techContent = techContentRecord[lang];

  const contents = {
    navContent,
    heroContent,
    techContent,
  };

  return (
    <>
      <HomeComponent active={lang} contents={contents} />
    </>
  );
}
