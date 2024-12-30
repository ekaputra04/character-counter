import { useState, ChangeEvent } from "react";
import { cn } from "./lib/utils";
import { Textarea } from "./components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

function App() {
  const [text, setText] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const countCharacters = (): number => text.length;

  const countCharactersWithoutSpaces = (): number =>
    text.replace(/\s/g, "").length;

  const countLetters = (): number => text.replace(/[^a-zA-Z]/g, "").length;

  const countSentences = (): number =>
    text.split(/[.!?]/).filter((sentence) => sentence.trim().length > 0).length;

  const countParagraphs = (): number =>
    text.split(/\n+/).filter((paragraph) => paragraph.trim().length > 0).length;

  const countWords = (): number =>
    text.split(/\s+/).filter((word) => word.trim().length > 0).length;

  const calculateReadingTime = (): string => {
    const words = countWords();
    const minutes = Math.floor(words / 250);
    const seconds = Math.round((words % 250) / (250 / 60));

    return minutes > 0 ? `${minutes} min ${seconds} sec` : `${seconds} sec`;
  };

  const calculateGradeLevel = (): string => {
    const words = countWords();
    const sentences = countSentences();
    const syllables = text.toLowerCase().match(/[aeiouy]{1,2}/g)?.length ?? 0;

    if (words === 0 || sentences === 0) return "N/A";

    const fleschScore =
      206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words);

    if (fleschScore >= 90) return "5th grade or below";
    if (fleschScore >= 80) return "6th grade";
    if (fleschScore >= 70) return "7th grade";
    if (fleschScore >= 60) return "8th to 9th grade";
    if (fleschScore >= 50) return "10th to 12th grade";
    if (fleschScore >= 30) return "College";
    return "College graduate";
  };

  return (
    <>
      <div className="top-0 right-0 left-0 fixed bg-white shadow-sm py-2 w-full">
        <h1 className="font-semibold text-center text-xl">Character Counter</h1>
      </div>

      <div className="bg-slate-50/70 px-32 pt-16 w-full">
        <div className="flex justify-between border rounded-lg">
          <div className="bg-white p-8 w-3/5">
            <Textarea
              value={text}
              onChange={handleChange}
              rows={10}
              placeholder="Type or paste your text here..."
              className={cn(
                "w-full h-96 p-4 text-lg border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500",
                "bg-white text-gray-800"
              )}
            ></Textarea>
          </div>

          <div className="bg-slate-200/40 p-8 w-2/5">
            <div className="bg-white p-4 rounded-lg">
              <div className="grid grid-cols-4 pb-4">
                <div className="space-y-2">
                  <h2 className="font-bold text-xl">{countCharacters()}</h2>
                  <p>Characters</p>
                </div>
                <div className="space-y-2">
                  <h2 className="font-bold text-xl">{countLetters()}</h2>
                  <p>Letters</p>
                </div>
                <div className="space-y-2">
                  <h2 className="font-bold text-xl">{countSentences()}</h2>
                  <p>Sentences</p>
                </div>
                <div className="space-y-2">
                  <h2 className="font-bold text-xl">{countParagraphs()}</h2>
                  <p>Paragraphs</p>
                </div>
              </div>
              <hr />
              <div className="space-y-2 pt-4">
                <div className="flex justify-between">
                  <p>Characters without spaces</p>
                  <h3 className="font-bold">
                    {countCharactersWithoutSpaces()}
                  </h3>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <p>Reading Time</p>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-4 h-4" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            Based on an average reading speed of 250 words per
                            minute.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <h3 className="font-bold">{calculateReadingTime()}</h3>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <p>Grade Level</p>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-4 h-4" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            Based on the Flesch reading ease formula to define
                            Readability level.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <h3 className="font-bold">{calculateGradeLevel()}</h3>
                </div>

                <div className="flex flex-col items-center pt-16">
                  <div className="flex justify-between w-full max-w-xl">
                    <img
                      src="/icons/instagram.png"
                      alt="Instagram"
                      className="w-8 h-8"
                    />
                    <img
                      src="/icons/facebook.png"
                      alt="Facebook"
                      className="w-8 h-8"
                    />
                    <img src="/icons/x.png" alt="X" className="w-8 h-8" />
                    <img
                      src="/icons/linkedin.png"
                      alt="LinkedIn"
                      className="w-8 h-8"
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="300"
                    step="1"
                    value={countCharacters()}
                    disabled
                    className="mt-4 w-full max-w-xl"
                  />
                  <div className="flex justify-between mt-2 w-full max-w-xl text-gray-600 text-sm">
                    <span>0</span>
                    <span>150</span>
                    <span>200</span>
                    <span>300</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
