import { assertObjectMatch } from "@std/assert";
import {
  createQuizz,
  IdGenerator,
  PickWithoutReplacementFunction,
  type Question,
  type Quizz,
} from "./main.ts";

const question1: Question = {
  id: 1,
  label: "What is the capital of France?",
  possibleAnswers: [
    { id: 1, label: "Paris", correctAnswer: true },
    { id: 2, label: "Skope", correctAnswer: false },
    { id: 3, label: "La Tour Eiffel", correctAnswer: false },
    { id: 4, label: "Lyon", correctAnswer: false },
  ],
  typeOfQuestion: "SINGLE_QUESTION",
};
const question4: Question = {
  id: 4,
  label: "What country is Helsinki the capital of ?",
  possibleAnswers: [
    { id: 1, label: "Denmark", correctAnswer: false },
    { id: 2, label: "Sweden", correctAnswer: false },
    { id: 3, label: "Finland", correctAnswer: true },
    { id: 4, label: "Norway", correctAnswer: false },
  ],
  typeOfQuestion: "SINGLE_QUESTION",
};

const questions: Record<number, Question> = {
  1: question1,
  4: question4,
};

const getMockedQuestions = (ids: number[]): Question[] => {
  return ids.map((id) => questions[id]);
};

Deno.test(function createQuizzTest() {
  // Given
  const pickWithoutReplacement: PickWithoutReplacementFunction = () => [1, 4];
  const idGenerator: IdGenerator = () => 1;
  // When
  const quizz = createQuizz({
    idGenerator,
    getQuestions: getMockedQuestions,
    pickWithoutReplacementFunction: pickWithoutReplacement,
  });
  // Then
  const expectedQuizz: Quizz = {
    id: 1,
    questions: [question1, question4],
  };
  assertObjectMatch(quizz, expectedQuizz);
});
