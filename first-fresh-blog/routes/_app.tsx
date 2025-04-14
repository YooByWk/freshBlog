import { type PageProps } from "$fresh/server.ts";
import { Head } from '$fresh/runtime.ts';

export default function App({ Component }: PageProps) {
  return (
    <html class="dark">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
        <title>뱅어포와 공룡</title>
        <script src="/theme.js"></script>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/globals.css" />
        <link href="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css" rel="stylesheet"></link>
      </Head>
      <body>
        <main className="flex flex-col min-h-screen">
          <Component />
        </main>
      </body>
    </html>
  );
}
