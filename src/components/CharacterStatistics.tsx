import {
  countCharacters,
  countLetters,
  countParagraphs,
  countSentences,
} from "@/utils/textUtils";

interface CharacterStatisticsProps {
  text: string;
}

const CharacterStatistics: React.FC<CharacterStatisticsProps> = ({ text }) => {
  return (
    <div className="gap-4 grid grid-cols-2 lg:grid-cols-4 pb-4">
      <div className="space-y-2">
        <h2 className="font-bold text-xl">{countCharacters(text)}</h2>
        <p>Characters</p>
      </div>
      <div className="space-y-2">
        <h2 className="font-bold text-xl">{countLetters(text)}</h2>
        <p>Letters</p>
      </div>
      <div className="space-y-2">
        <h2 className="font-bold text-xl">{countSentences(text)}</h2>
        <p>Sentences</p>
      </div>
      <div className="space-y-2">
        <h2 className="font-bold text-xl">{countParagraphs(text)}</h2>
        <p>Paragraphs</p>
      </div>
    </div>
  );
};

export default CharacterStatistics;
