import { calculateReadingTime } from "@/utils/textUtils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Info } from "lucide-react";

interface ReadingTimeProps {
  text: string;
}

const ReadingTime: React.FC<ReadingTimeProps> = ({ text }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <p>Reading Time</p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info className="w-4 h-4" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Based on an average reading speed of 250 words per minute.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <h3 className="font-bold">{calculateReadingTime(text)}</h3>
    </div>
  );
};

export default ReadingTime;
