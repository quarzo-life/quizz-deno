import { assertEquals, assertObjectMatch } from "@std/assert";
import {
  createQuizz,
  getQuestionMocked,
  IdGenerator,
  Quizz,
  PickWithoutReplacement,
} from "./main.ts";

const getQuestionMocked = () => ({
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

Deno.test(function createQuizzTest() {
  // Given
  const pickWithoutReplacement: PickWithoutReplacement = () => [1, 4];
  const idGenerator: IdGenerator = () => 1;
  // When
  const quizz = createQuizz(idGenerator, pickWithoutReplacement);
  // Then
  const expectedQuizz: Quizz = {
    id: 1,
    questions: [
      {
        id: 4,
        label: "What is the capital of France?",
        possibleAnswers: [
          { id: 1, label: "Paris", correctAnswer: true },
          { id: 2, label: "Skope", correctAnswer: false },
          { id: 3, label: "La Tour Eiffel", correctAnswer: false },
          { id: 4, label: "Lyon", correctAnswer: false },
        ],
        typeOfQuestion: "SINGLE_QUESTION",
      },
    ],
  };
  assertObjectMatch(quizz, expectedQuizz);
});
