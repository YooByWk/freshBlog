import { useSignal } from "@preact/signals";
import Counter from "../../islands/Counter.tsx";

export default function DenoFreshHome() {
  const count = useSignal(3);

  console.log("User Came in ");
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 className="text-4xl font-bold typewriter">
          Welcome to Fresh
        </h1>
        <p className="text-3xl">
          <p className="glitch text-primary">움직이는거 킹받쥬</p>
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
        <Counter count={count} />
      </div>
    </div>
  );
}
