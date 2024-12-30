import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export default function Header() {
  const words = [
    {
      text: "Online",
    },
    {
      text: "Character",
    },
    {
      text: "Counter.",
      className: "text-green-500 dark:text-green-500",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center mx-auto mt-8 py-2 w-full text-center">
        <TypewriterEffectSmooth words={words} className="mx-auto" />

        <p>
          Paste your text below to instantly count the number of characters in
          your text.
        </p>
      </div>
    </>
  );
}
