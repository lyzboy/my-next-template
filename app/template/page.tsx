import Image from "next/image";

import Button, { InverseButton } from "@/app/components/Button";
import Card, { SkewCard } from "../components/Card";
import Section from "../components/Section";

// Please delete this file and folder /template/page.tsx for production.

export default function Template() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Template Examples</h1>
        <p>
          This page has been created to show you examples of components and
          styling within the template project. You can also see the header and
          footer (located in the folder <code>/app/components</code>).
        </p>
        <h2>Colors</h2>
        <p>
          Change the colors of the template by modifying the hex values in the
          section below in the <code>/app/ui/globals.css</code> file.
        </p>

        <pre>
          <code>
            {`:root {
  --primary-color: #b40c0c;
  --primary-dark: #7e0909;
}`}
          </code>
        </pre>

        <h2>Typography</h2>
        <div className="grid grid-cols-2 gap-8 text-center">
          <h1>I'm a heading 1</h1>
          <p className=" my-auto">
            <code>{"<h1>I'm a heading 1</h1>"}</code>
          </p>
          <h2>I'm a heading 2</h2>
          <p className=" my-auto">
            <code>{"<h2>I'm a heading 2</h2>"}</code>
          </p>
          <h3>I'm a heading 3</h3>
          <p className=" my-auto">
            <code>{"<h3>I'm a heading 3</h3>"}</code>
          </p>
          <h4>I'm a heading 4</h4>
          <p className=" my-auto">
            <code>{"<h4>I'm a heading 4</h4>"}</code>
          </p>
          <h5>I'm a heading 5</h5>
          <p className=" my-auto">
            <code>{"<h5>I'm a heading 5</h5>"}</code>
          </p>
          <p>I'm a p</p>
          <p className=" my-auto">
            <code>{"<p>I'm a p</p>"}</code>
          </p>
        </div>
        <h2>UI Elements</h2>
        <h3>Buttons</h3>
        <p>Import the classes using:</p>
        <p>
          <code>{`import Button, { InverseButton } from "@/app/components/Button";`}</code>
        </p>
        <div className="grid grid-cols-2 gap-8 text-center">
          <Button text="My Button" />
          <p className=" my-auto">
            <code>{`<Button text="My Button" />`}</code>
          </p>
          <InverseButton text="Inverse Button" />
          <p className=" my-auto">
            <code>{`<InverseButton text="Inverse Button" />`}</code>
          </p>
        </div>
        <h3>Cards</h3>
        <div className="grid grid-cols-2 gap-8 text-center">
          <Card heading="my card" text="This is an example of a card" />
          <p className=" my-auto">
            <code>{`<Card heading="my card" text="This is an example of a card" />`}</code>
          </p>
          <SkewCard heading="my card" text="This is an example of a card" />
          <p className=" my-auto">
            <code>{`<SkewCard heading="my card" text="This is an example of a card" />`}</code>
          </p>
        </div>
        <h3>Sections</h3>
        <Section className="bg-gray-500 text-white">
          <h3>This is a section</h3>
          <p>Add more info here to have more in the section</p>
        </Section>
        <pre>
          <code>{`        <Section className="bg-gray-500 text-white">
          <h3>This is a section</h3>
          <p>Add more info here to have more in the section</p>
        </Section>`}</code>
        </pre>
      </main>
    </div>
  );
}
