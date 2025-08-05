import Image from "next/image";

import Button, { InverseButton } from "./components/Button";
import Link from "next/link";

//For styling with state changes, use clsx

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* REPLACE THIS CODE!!! */}
        <p>
          Please modify the main <code>/app/page.tsx</code> file to start. If
          you would like to view what components that are included with the
          template, please visit{" "}
          <Link href={"/template"} className="text-blue-600">
            <code>localhost:3000/template</code>
          </Link>{" "}
          or view the page in your project located at{" "}
          <code>/app/template/page.tsx</code>. Be sure to remove both the{" "}
          <code>/template</code> folder and all files contained within before
          pushing your project to production.
        </p>

        <p>
          Also remember to change you project name and version with the{" "}
          <code>package.json</code> file. For additional information, see the{" "}
          <code>README.md</code>.
        </p>
      </main>
    </div>
  );
}
