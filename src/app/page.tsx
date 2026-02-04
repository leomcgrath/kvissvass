import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-100 px-6">
      <main className="flex max-w-lg flex-col items-center text-center">
        <span className="mb-4 text-6xl" aria-hidden>
          🧀
        </span>
        <h1 className="mb-3 font-serif text-4xl font-bold tracking-tight text-amber-900 sm:text-5xl">
          What cheese are you?
        </h1>
        <p className="mb-10 text-lg text-amber-800/90">
          Take the quiz and discover which of 16 cheese personalities matches
          you—from elegant Brie to bold Stilton.
        </p>
        <Link
          href="/quiz"
          className="rounded-full bg-amber-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        >
          Take the test
        </Link>
        <p className="mt-8 text-sm text-amber-700/70">
          12 quick questions · No account needed
        </p>
      </main>
    </div>
  );
}
