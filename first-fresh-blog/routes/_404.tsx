import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="flex h-screen justify-center items-center">
        <div class="px-4 py-8 h-2/3 mx-auto bg-[#86efac] flex items-center justify-center">
          <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center pb-10">
            <img
              class="my-6"
              src="/logo.svg"
              width="128"
              height="128"
              alt="the Fresh logo: a sliced lemon dripping with juice"
            />
            <h1 class="text-4xl font-bold text-fresh-text">
              404 - Page not found
            </h1>
            <p class="my-4 text-fresh-text">
              The page you were looking for doesn't exist.
            </p>
            <a href="/" class="underline text-fresh-text ">Go back home</a>
          </div>
        </div>
      </div>
    </>
  );
}
