// Each question maps to one axis (0-3) and each option gives 0 or 1 for that axis.
// We need at least a few questions per axis to get a reliable score.

export interface QuizOption {
  text: string;
  axis: 0 | 1 | 2 | 3;
  value: 0 | 1;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: [QuizOption, QuizOption];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Axis 0: Social (Reserved vs Outgoing)
  {
    id: 1,
    question: "At a party, you're more likely to...",
    options: [
      { text: "Find one person for a deep conversation", axis: 0, value: 0 },
      { text: "Work the room and chat with everyone", axis: 0, value: 1 },
    ],
  },
  {
    id: 2,
    question: "Your ideal weekend involves...",
    options: [
      { text: "A quiet day with a good book or project", axis: 0, value: 0 },
      { text: "Plans with friends or trying something new in town", axis: 0, value: 1 },
    ],
  },
  // Axis 1: Energy (Calm vs Intense)
  {
    id: 3,
    question: "When something goes wrong, you tend to...",
    options: [
      { text: "Stay calm and look for a solution", axis: 1, value: 0 },
      { text: "Feel it deeply and need to process", axis: 1, value: 1 },
    ],
  },
  {
    id: 4,
    question: "Your energy level is best described as...",
    options: [
      { text: "Steady and even-keeled", axis: 1, value: 0 },
      { text: "High highs and strong reactions", axis: 1, value: 1 },
    ],
  },
  // Axis 2: Style (Classic vs Adventurous)
  {
    id: 5,
    question: "When trying a new restaurant, you...",
    options: [
      { text: "Stick to what you know you'll like", axis: 2, value: 0 },
      { text: "Order the weirdest thing on the menu", axis: 2, value: 1 },
    ],
  },
  {
    id: 6,
    question: "Your style could be described as...",
    options: [
      { text: "Timeless and reliable", axis: 2, value: 0 },
      { text: "Unexpected and full of surprises", axis: 2, value: 1 },
    ],
  },
  // Axis 3: Approach (Practical vs Dreamy)
  {
    id: 7,
    question: "When making a big decision, you...",
    options: [
      { text: "List pros and cons and go with logic", axis: 3, value: 0 },
      { text: "Go with your gut and how it feels", axis: 3, value: 1 },
    ],
  },
  {
    id: 8,
    question: "You're more likely to...",
    options: [
      { text: "Focus on what's right in front of you", axis: 3, value: 0 },
      { text: "Daydream about possibilities", axis: 3, value: 1 },
    ],
  },
  // Second round for better accuracy
  {
    id: 9,
    question: "In a group project, you prefer to...",
    options: [
      { text: "Take a supporting role behind the scenes", axis: 0, value: 0 },
      { text: "Lead the discussion and present ideas", axis: 0, value: 1 },
    ],
  },
  {
    id: 10,
    question: "Your friends would say you're...",
    options: [
      { text: "The calm one who keeps things steady", axis: 1, value: 0 },
      { text: "The passionate one with strong opinions", axis: 1, value: 1 },
    ],
  },
  {
    id: 11,
    question: "Travel for you is...",
    options: [
      { text: "Returning to a place you love", axis: 2, value: 0 },
      { text: "Exploring somewhere you've never been", axis: 2, value: 1 },
    ],
  },
  {
    id: 12,
    question: "You believe more in...",
    options: [
      { text: "Facts and what you can prove", axis: 3, value: 0 },
      { text: "Intuition and what feels right", axis: 3, value: 1 },
    ],
  },
];

import type { CheeseCode } from "./cheeses";

export type { CheeseCode };

export function calculateCheeseCode(answers: { questionId: number; optionIndex: 0 | 1 }[]): CheeseCode {
  const sums: [number, number, number, number] = [0, 0, 0, 0];
  const counts: [number, number, number, number] = [0, 0, 0, 0];

  for (const a of answers) {
    const q = QUIZ_QUESTIONS.find((qu) => qu.id === a.questionId);
    if (!q) continue;
    const opt = q.options[a.optionIndex];
    sums[opt.axis] += opt.value;
    counts[opt.axis]++;
  }

  const code: CheeseCode = [0, 0, 0, 0];
  for (let i = 0; i < 4; i++) {
    const total = counts[i];
    const sum = sums[i];
    code[i] = total === 0 ? 0 : sum > total / 2 ? 1 : 0;
  }
  return code;
}
