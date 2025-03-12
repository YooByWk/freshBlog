import { PageProps } from "$fresh/server.ts";
import HomeComponent, {
  navContentRecord,
} from "../../components/HomeComponent.tsx";

// Main page - Español
export default function Home(props: PageProps) {
  const active = props.url.pathname;
  const navContent = navContentRecord[active];
  return (
    <>
      <p>스페인어 페이지임</p>
      <HomeComponent active={active} navContent={navContent} />
    </>
  );
}
