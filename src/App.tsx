import { useState } from "react";
import CharacterStatistics from "./components/CharacterStatistics";
import ReadingTime from "./components/ReadingTime";
import GradeLevel from "./components/GradeLevel";
import SocialMedia from "./components/SocialMedia";
import TextAreaInput from "./components/TextareaInput";
import CharacterWithoutSpace from "./components/CharacterWithoutSpace";
import Header from "./components/Header";
import { Button } from "./components/ui/button";
import {
  BriefcaseBusiness,
  Check,
  ClipboardPaste,
  Copy,
  Globe,
  GraduationCap,
  Laptop,
  Trash,
} from "lucide-react";
import Question from "./components/Question";
import Footer from "./components/Footer";
import { Spotlight } from "./components/ui/spotlight";

type featureType = {
  title: string;
  description: string;
  color: string;
};

const features: featureType[] = [
  {
    title: "Monitor length",
    description: "Know text length as you work",
    color: "bg-blue-100",
  },
  {
    title: "Meet limits",
    description: "Avoid rework by ensuring text is the perfect length",
    color: "bg-yellow-100",
  },
  {
    title: "Stay concise",
    description: "Understand if writing is too dense and wordy",
    color: "bg-green-100",
  },
  {
    title: "Plan content",
    description: "Ensure text will fit into a design or page",
    color: "bg-purple-100",
  },
];

type UsesType = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const uses: UsesType[] = [
  {
    title: "Schoolwork",
    description: "Ensure you stay within length requirements",
    icon: <GraduationCap />,
  },
  {
    title: "Marketing",
    description: "Adjust length of subject lines, ads, and more",
    icon: <BriefcaseBusiness />,
  },
  {
    title: "Social media",
    description: "Keep your posts within platform limits",
    icon: <Laptop />,
  },
  {
    title: "SEO",
    description: "Optimize titles, meta descriptions, and more",
    icon: <Globe />,
  },
];

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
      <Spotlight className="-top-40 md:-top-20 left-20" fill="green" />
      <div className="px-8 md:px-16 lg:px-32 pb-12 lg:pb-24">
        <Header />

        <div className="pt-16 w-full">
          <div className="flex lg:flex-row flex-col justify-between gap-8 rounded-lg">
            <div className="relative bg-white lg:w-3/5">
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
            <div className="lg:w-2/5">
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

        <Spotlight className="top-[100em] left-0" fill="green" />

        <div className="space-y-8 pt-32 text-center">
          <h3 className="font-semibold text-3xl">
            Get a free character count instantly
          </h3>
          <p>
            Online Character Counter is a fast and easy way to get the character
            count of a piece of text. Our tool is simple and straightforward and
            only gives the most essential information. This makes it great for
            supporting writers of all kinds with a variety of projects. Try
            getting a character count for social media posts, homework
            assignments, personal writing, and much more.
          </p>
        </div>

        <div className="space-y-8 pt-32 text-center">
          <h3 className="font-semibold text-3xl">
            What can you do with our character counter tool?
          </h3>
          <div className="gap-4 grid grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                className={`space-y-4 p-6 rounded-2xl text-start border ${feature.color}`}
                key={index}
              >
                <Check />
                <h4 className="font-semibold text-xl">{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8 pt-32 text-center">
          <h3 className="font-semibold text-3xl">
            What can our character counter be used for?
          </h3>
          <div className="gap-4 grid grid-cols-2 lg:grid-cols-4">
            {uses.map((use, index) => (
              <div
                className="space-y-4 p-6 border-l-2 border-l-emerald-500 text-start"
                key={index}
              >
                {use.icon}
                <h4 className="font-semibold text-xl">{use.title}</h4>
                <p>{use.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8 pt-32">
          <h3 className="font-semibold text-3xl text-center">
            Character counter FAQs
          </h3>
          <p className="text-center">
            Got a question about our character count tool? Find out if we’ve
            answered it here.
          </p>
          <Question />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default App;
