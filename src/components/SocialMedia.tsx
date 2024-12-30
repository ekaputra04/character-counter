import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface SocialMediaProps {
  characterCount: number;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ characterCount }) => {
  return (
    <div className="z-50 flex flex-col items-center pt-16">
      <div className="flex justify-between w-full max-w-xl">
        <SocialMediaItem
          url="/icons/instagram.png"
          alt="Instagram"
          text="Our recommended Instagram post length is under 150 characters. But you can write up to 2,200 characters."
        />
        <SocialMediaItem
          url="/icons/facebook.png"
          alt="Facebook"
          text="Our recommended Facebook post length is under 250 characters. But you can write up to 63,206 characters."
        />
        <SocialMediaItem
          url="/icons/x.png"
          alt="X"
          text="The maximum post length on X (Twitter) is 280 characters."
        />
        <SocialMediaItem
          url="/icons/linkedin.png"
          alt="LinkedIn"
          text="Our recommended Linkedin post length is under 300 characters. But you can write up to 3,000 characters."
        />
      </div>
      <input
        type="range"
        min="0"
        max="300"
        step="1"
        value={characterCount}
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
  );
};

export default SocialMedia;

interface SocialMediaItemProps {
  url: string;
  alt: string;
  text: string;
}

const SocialMediaItem: React.FC<SocialMediaItemProps> = ({
  url,
  alt,
  text,
}) => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <img src={url} alt={alt} className="w-8 h-8" />
          </TooltipTrigger>
          <TooltipContent>
            <p>{text}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};
