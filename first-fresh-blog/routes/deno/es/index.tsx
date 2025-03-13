import { PageProps } from "$fresh/server.ts";
import HomeComponent from "../../../components/HomeComponent.tsx";
import { heroContentRecord, navContentRecord } from "../../../locales/locales.ts";

// Main page - Español
export default function Home(props: PageProps) {
  const active = props.url.pathname;
  const navContent = navContentRecord[active];
  const heroContent = heroContentRecord[active];

  const contents = {
    navContent,
    heroContent,
  };

  return (
    <>
      <HomeComponent active={active} contents={contents} />
    </>
  );
}
