import { ChangeEvent } from "react";
import { Textarea } from "./ui/textarea";
import { cn } from "../lib/utils";

interface TextAreaInputProps {
  text: string;
  setText: (text: string) => void;
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({ text, setText }) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <Textarea
      value={text}
      onChange={handleChange}
      rows={10}
      placeholder="Type or paste your text here..."
      className={cn(
        "w-full h-96 p-4 text-lg border rounded-2xl focus:outline-none focus:ring-1",
        " text-gray-800  border-black border-l-4 border-t-4 border-r-8 border-b-8 pr-12"
      )}
    />
  );
};

export default TextAreaInput;
