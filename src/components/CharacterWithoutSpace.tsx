import { countCharactersWithoutSpaces } from "@/utils/textUtils";

interface CharacterWithoutSpaceProps {
  text: string;
}

const CharacterWithoutSpace: React.FC<CharacterWithoutSpaceProps> = ({
  text,
}) => {
  return (
    <div className="flex justify-between">
      <p>Characters without spaces</p>
      <h3 className="font-bold">{countCharactersWithoutSpaces(text)}</h3>
    </div>
  );
};

export default CharacterWithoutSpace;
