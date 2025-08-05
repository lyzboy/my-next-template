import Image from "next/image";

import Button, { InverseButton } from "./components/Button";

//For styling with state changes, use clsx

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="md:text-red-400 text-black">I'm a heading 1</h1>
        <h2>I'm a heading 2</h2>
        <h3>I'm a heading 3</h3>
        <h4>I'm a heading 4</h4>
        <h5>I'm a heading 5</h5>
        <p>I'm a p</p>
        <Button text="My Button" />
        <InverseButton text="Inverse Buttons" />
      </main>
    </div>
  );
}
