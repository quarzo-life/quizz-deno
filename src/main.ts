type PossibleAnswer = {
  id: number;
  label: string;
  correctAnswer: boolean;
};

type Question = {
  id: number;
  label: string;
  possibleAnswers: PossibleAnswer[];
  typeOfQuestion: "SINGLE_QUESTION" | "MULTIPLE_QUESTIONS";
};

type Quizz = {
  id: number;
  questions: Question[];
};

export const createQuestion = (
  label: string,
  typeOfQuestion: "SINGLE_QUESTION" | "MULTIPLE_QUESTIONS",
  possibleAnswers: PossibleAnswer[],
): Question => ({
  id,
  label,
  typeOfQuestion,
  possibleAnswers,
});

export const getQuestion = (id: number): Question => ({
  id: 1,
  label: "What is the capital of France?",
  possibleAnswers: [
    { id: 1, label: "Paris", correctAnswer: true },
    { id: 2, label: "Skope", correctAnswer: false },
    { id: 3, label: "La Tour Eiffel", correctAnswer: false },
    { id: 4, label: "Lyon", correctAnswer: false },
  ],
  typeOfQuestion: "SINGLE_QUESTION",
});

export type IdGenerator = () => number;

export const idGenerator: IdGenerator = () =>
  Math.floor(Math.random() * 1000000);

// [1;4;6;9]
export type PickWithoutReplacement = () => number[];

export const createQuizz = (
  idGenerator: IdGenerator,
  pickWithoutReplacement: PickWithoutReplacement,
): Quizz => {};

/*
What is the capital of France?
Paris + true
Skope + false
La Tour Eiffel + false
Lyon + false
*/

createQuestion("What is the capital of France?", "SINGLE_QUESTION", [
  { label: "Paris", correctAnswer: true },
  { label: "Skope", correctAnswer: false },
  { label: "La Tour Eiffel", correctAnswer: false },
  { label: "Lyon", correctAnswer: false },
]);
