import { useState } from "react";
import CharacterStatistics from "./components/CharacterStatistics";
import ReadingTime from "./components/ReadingTime";
import GradeLevel from "./components/GradeLevel";
import SocialMedia from "./components/SocialMedia";
import TextAreaInput from "./components/TextareaInput";
import CharacterWithoutSpace from "./components/CharacterWithoutSpace";
import Header from "./components/Header";
import { Button } from "./components/ui/button";
import { ClipboardPaste, Copy, Trash } from "lucide-react";

const App: React.FC = () => {
  const [text, setText] = useState<string>("");

  // Function to handle pasting text from clipboard
  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText(clipboardText);
    } catch (error) {
      console.error("Failed to paste text from clipboard: ", error);
      alert("Unable to access clipboard. Please try again.");
    }
  };

  return (
    <>
      <Header />

      <div className="px-32 pt-16 w-full">
        <div className="flex justify-between gap-8 rounded-lg">
          <div className="relative bg-white w-3/5">
            <TextAreaInput text={text} setText={setText} />
            {text ? (
              <>
                <Button
                  className="top-2 right-2 absolute bg-red-100 hover:bg-red-200 border-red-500 border-none rounded-full"
                  variant={"outline"}
                  onClick={() => setText("")}
                >
                  <Trash />
                </Button>
                <Button
                  className="right-2 bottom-4 absolute border-green-500 bg-green-100 hover:bg-green-200 rounded-full"
                  variant={"outline"}
                  onClick={() => navigator.clipboard.writeText(text)}
                >
                  <Copy />
                </Button>
              </>
            ) : (
              <Button
                className="top-16 left-6 absolute border-green-500 bg-green-100 hover:bg-green-200 rounded-full"
                variant={"outline"}
                onClick={handlePaste}
              >
                <ClipboardPaste /> Paste Text
              </Button>
            )}
          </div>
          <div className="w-2/5">
            <div className="p-4 border-t-4 border-r-8 border-b-8 border-black border-l-4 rounded-2xl">
              <CharacterStatistics text={text} />
              <hr />
              <div className="space-y-2 pt-4">
                <CharacterWithoutSpace text={text} />
                <ReadingTime text={text} />
                <GradeLevel text={text} />
                <SocialMedia characterCount={text.length} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
