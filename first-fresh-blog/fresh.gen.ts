// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $api_joke from "./routes/api/joke.ts";
import * as $deno_index from "./routes/deno/index.tsx";
import * as $en_index from "./routes/en/index.tsx";
import * as $es_index from "./routes/es/index.tsx";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $LanguageSwitch from "./islands/LanguageSwitch.tsx";
import * as $ThemeToggle from "./islands/ThemeToggle.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_middleware.ts": $_middleware,
    "./routes/api/joke.ts": $api_joke,
    "./routes/deno/index.tsx": $deno_index,
    "./routes/en/index.tsx": $en_index,
    "./routes/es/index.tsx": $es_index,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
    "./islands/LanguageSwitch.tsx": $LanguageSwitch,
    "./islands/ThemeToggle.tsx": $ThemeToggle,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
