import { PageProps } from "$fresh/server.ts";
import HomeComponent, {
  navContentRecord,
} from "../components/HomeComponent.tsx";

// import {
//   LuArrowRight as ArrowRight,
//   LuCode as Code,
//   LuFileText as FileText,
//   LuGithub as Github,
//   LuLinkedin as Linkedin,
//   LuMail as Mail,
//   LuPenTool as PenTool,
//   LuSparkles as Sparkles,
//   LuStar as Star,
// } from "@preact-icons/lu";

// 기본 메인 대문
export default function Home(props: PageProps) {
  const active = props.url.pathname;
  const navContent = navContentRecord[active];
  return (
    <>
      <HomeComponent active={active} navContent={navContent} />
    </>
  );
}
