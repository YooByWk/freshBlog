import { type PageProps } from "$fresh/server.ts";
import { Head } from '$fresh/runtime.ts';

export default function App({ Component }: PageProps) {
  return (
    <html class="dark">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>뱅어포와 공룡</title>
        <script src="/theme.js"></script>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/globals.css" />
      </Head>
      <body>
        <main className="flex flex-col min-h-screen">
          <Component />
        </main>
      </body>
    </html>
  );
}
