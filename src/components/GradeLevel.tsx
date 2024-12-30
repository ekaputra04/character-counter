import { calculateGradeLevel } from "@/utils/textUtils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Info } from "lucide-react";

interface GradeLevelProps {
  text: string;
}

const GradeLevel: React.FC<GradeLevelProps> = ({ text }) => {
  return (
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
                Based on the Flesch reading ease formula to define readability
                level.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <h3 className="font-bold">{calculateGradeLevel(text)}</h3>
    </div>
  );
};

export default GradeLevel;
