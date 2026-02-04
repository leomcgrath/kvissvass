import Link from "next/link";
import { notFound } from "next/navigation";
import { getCheeseByCode } from "@/data/cheeses";
import type { CheeseCode } from "@/data/cheeses";

function parseCode(codeParam: string | null): CheeseCode | null {
  if (!codeParam || codeParam.length !== 4) return null;
  const digits = codeParam.split("").map((d) => (d === "1" ? 1 : 0));
  if (digits.some((d) => d !== 0 && d !== 1)) return null;
  return digits as CheeseCode;
}

export default async function ResultPage({
  searchParams,
}: {
  searchParams: Promise<{ code?: string }>;
}) {
  const params = await searchParams;
  const code = parseCode(params.code ?? null);
  if (!code) notFound();

  const cheese = getCheeseByCode(code);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-100 px-4 py-12">
      <div className="mx-auto max-w-lg">
        <div className="rounded-3xl bg-white/90 p-8 shadow-xl backdrop-blur sm:p-10">
          <div className="mb-6 text-center text-7xl" aria-hidden>
            {cheese.emoji}
          </div>
          <p className="text-center text-sm font-medium uppercase tracking-wider text-amber-600">
            You are
          </p>
          <h1 className="mt-1 text-center font-serif text-4xl font-bold text-amber-900 sm:text-5xl">
            {cheese.name}
          </h1>
          <p className="mt-3 text-center text-lg font-medium text-amber-800">
            {cheese.tagline}
          </p>
          <p className="mt-6 text-amber-800/90 leading-relaxed">
            {cheese.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {cheese.traits.map((t) => (
              <span
                key={t}
                className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-amber-700">
            <span className="font-semibold">Pairs well with:</span>{" "}
            {cheese.pairWith}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/quiz"
              className="rounded-full bg-amber-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Retake the quiz
            </Link>
            <Link
              href="/"
              className="rounded-full border-2 border-amber-300 bg-white px-6 py-3 text-center font-semibold text-amber-800 transition hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
