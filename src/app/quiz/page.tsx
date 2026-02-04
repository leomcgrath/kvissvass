"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  QUIZ_QUESTIONS,
  calculateCheeseCode,
  type CheeseCode,
} from "@/data/questions";

type AnswerEntry = { questionId: number; optionIndex: 0 | 1 };

export default function QuizPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerEntry[]>([]);

  const question = QUIZ_QUESTIONS[currentIndex];
  const progress = ((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100;

  const handleChoose = (optionIndex: 0 | 1) => {
    const newAnswers: AnswerEntry[] = [
      ...answers.filter((a) => a.questionId !== question.id),
      { questionId: question.id, optionIndex },
    ];
    setAnswers(newAnswers);

    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const code: CheeseCode = calculateCheeseCode(newAnswers);
      const codeStr = code.join("");
      router.push(`/result?code=${codeStr}`);
    }
  };

  const canGoBack = currentIndex > 0;
  const goBack = () => {
    if (canGoBack) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-100 px-4 py-8">
      <div className="mx-auto max-w-xl">
        <div className="mb-8">
          <div className="mb-2 flex justify-between text-sm text-amber-800/80">
            <span>Question {currentIndex + 1} of {QUIZ_QUESTIONS.length}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-amber-200">
            <div
              className="h-full rounded-full bg-amber-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {canGoBack && (
          <button
            type="button"
            onClick={goBack}
            className="mb-6 text-sm font-medium text-amber-700 hover:text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded"
          >
            ← Back
          </button>
        )}

        <div className="rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur sm:p-8">
          <h2 className="mb-8 font-serif text-xl font-semibold text-amber-900 sm:text-2xl">
            {question.question}
          </h2>
          <ul className="space-y-3">
            {question.options.map((opt, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => handleChoose(i as 0 | 1)}
                  className="w-full rounded-xl border-2 border-amber-200 bg-white px-5 py-4 text-left font-medium text-amber-900 transition hover:border-amber-400 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  {opt.text}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-center text-sm text-amber-700/70">
          Pick the option that feels most like you
        </p>
      </div>
    </div>
  );
}
