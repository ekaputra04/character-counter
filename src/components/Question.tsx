import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type QuestionType = {
  question: string;
  answer: string;
};

const questions: QuestionType[] = [
  {
    question: "What can I use to count characters?",
    answer:
      "The best way to know how many characters are in your text is to use online character counter tool. It will instantly give you the exact length of your writing.",
  },
  {
    question: "How does the character counter work?",
    answer: `Using QuillBot’s letter counter is easy. Just follow these steps: <br/>
             1. Type or paste your text into the box <br/>
             2. Decide if you want to include spaces in the count (toggle on/off) <br/>
             3. Receive the final character count <br/>
             4. Export or copy/paste your text to use elsewhere`,
  },
  {
    question: "Is there a limit to the amount of text I can input?",
    answer:
      "No, our character counter does not have a limit on the amount of text you can put in at once.",
  },
  {
    question: "Can I use the character counter for multiple languages?",
    answer:
      "Yes. Our letter counter tracks the number of characters in a text, regardless of its language. This makes it perfect for multilingual projects.",
  },
  {
    question: "What common character limits should I be aware of?",
    answer: `Each project is different, but here are some common character limits to be aware of:<br/><br/>
    Facebook: 63,206<br/>
    X (formerly Twitter): 280<br/>
    LinkedIn: 13,000 (140 until a "Read More" break)<br/>
    Instagram: 2,200<br/>
    Yelp: 5,000<br/>
    Pinterest: 500<br/>
    Reddit title: 300<br/>
    Ebay title: 80<br/>
    SEO titles: 60<br/>
    SEO descriptions: 160<br/>
    SMS: 160<br/><br/>
    Remember, every platform is different. When getting a character count, make sure to consult your project requirements carefully.`,
  },
];

export default function Question() {
  return (
    <Accordion type="single" collapsible>
      {questions.map((question, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{question.question}</AccordionTrigger>
          <AccordionContent>
            <div dangerouslySetInnerHTML={{ __html: question.answer }} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
