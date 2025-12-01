type PossibleAnswer = {
  id: number;
  label: string;
  correctAnswer: boolean;
};

export type Question = {
  id: number;
  label: string;
  possibleAnswers: PossibleAnswer[];
  typeOfQuestion: "SINGLE_QUESTION" | "MULTIPLE_QUESTIONS";
};

export type Quizz = {
  id: number;
  questions: Question[];
};

export type IdGenerator = () => number;

export const idGenerator: IdGenerator = () =>
  Math.floor(Math.random() * 1000000);

export type PickWithoutReplacementFunction = () => number[];

type GetQuestions = (ids: number[]) => Question[];
type Dependencies = {
  idGenerator: IdGenerator;
  getQuestions: GetQuestions;
  pickWithoutReplacementFunction: PickWithoutReplacementFunction;
};

export const createQuizz = ({
  idGenerator,
  getQuestions,
  pickWithoutReplacementFunction,
}: Dependencies): Quizz => ({
  id: idGenerator(),
  questions: getQuestions(pickWithoutReplacementFunction()),
});
