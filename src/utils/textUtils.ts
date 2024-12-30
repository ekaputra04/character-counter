export const countCharacters = (text: string): number => text.length;

export const countCharactersWithoutSpaces = (text: string): number =>
  text.replace(/\s/g, "").length;

export const countLetters = (text: string): number =>
  text.replace(/[^a-zA-Z]/g, "").length;

export const countSentences = (text: string): number =>
  text.split(/[.!?]/).filter((sentence) => sentence.trim().length > 0).length;

export const countParagraphs = (text: string): number =>
  text.split(/\n+/).filter((paragraph) => paragraph.trim().length > 0).length;

export const countWords = (text: string): number =>
  text.split(/\s+/).filter((word) => word.trim().length > 0).length;

export const calculateReadingTime = (text: string): string => {
  const words = countWords(text);
  const minutes = Math.floor(words / 250);
  const seconds = Math.round((words % 250) / (250 / 60));
  return minutes > 0 ? `${minutes} min ${seconds} sec` : `${seconds} sec`;
};

export const calculateGradeLevel = (text: string): string => {
  const words = countWords(text);
  const sentences = countSentences(text);
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
