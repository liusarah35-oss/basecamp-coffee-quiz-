"use client";

import { useState } from "react";

type Personality =
  | "Bold Adventurer"
  | "Sweet Enthusiast"
  | "Zen Minimalist"
  | "Night Owl"
  | "Practical Pragmatist";

interface Answer {
  emoji: string;
  text: string;
  personality: Personality;
}

interface Question {
  text: string;
  answers: Answer[];
}

const questions: Question[] = [
  {
    text: "You're given a blank canvas and unlimited paint. What do you make?",
    answers: [
      { emoji: "🎨", text: "Something explosive and chaotic — pure energy on canvas", personality: "Bold Adventurer" },
      { emoji: "🍰", text: "A dessert. Obviously.", personality: "Sweet Enthusiast" },
      { emoji: "✦", text: "A single perfect brushstroke, then stop", personality: "Zen Minimalist" },
      { emoji: "🌙", text: "Something eerie and beautiful at 2am", personality: "Night Owl" },
      { emoji: "📐", text: "A color-coded grid. It's just efficient.", personality: "Practical Pragmatist" },
    ],
  },
  {
    text: "You find $20 on the street. What do you do?",
    answers: [
      { emoji: "🎢", text: "Spend it on something wild, immediately", personality: "Bold Adventurer" },
      { emoji: "🧁", text: "Treat yourself to something sweet", personality: "Sweet Enthusiast" },
      { emoji: "🪴", text: "Save it — you already have everything you need", personality: "Zen Minimalist" },
      { emoji: "🍟", text: "Keep it for a late-night snack run", personality: "Night Owl" },
      { emoji: "🔧", text: "Put it toward something practical", personality: "Practical Pragmatist" },
    ],
  },
  {
    text: "Pick a superpower:",
    answers: [
      { emoji: "⚡", text: "Time manipulation — move fast, never slow down", personality: "Bold Adventurer" },
      { emoji: "✨", text: "Make anything taste like your favorite dessert", personality: "Sweet Enthusiast" },
      { emoji: "🧘", text: "Absolute calm in any situation", personality: "Zen Minimalist" },
      { emoji: "😴", text: "Never need sleep", personality: "Night Owl" },
      { emoji: "🛠️", text: "Instantly fix anything that's broken", personality: "Practical Pragmatist" },
    ],
  },
  {
    text: "Your ideal Saturday looks like:",
    answers: [
      { emoji: "🏔️", text: "Something I've never done before — ideally with some danger", personality: "Bold Adventurer" },
      { emoji: "🥐", text: "A long brunch with too many pastries", personality: "Sweet Enthusiast" },
      { emoji: "📖", text: "Alone, quiet, perfectly undisturbed", personality: "Zen Minimalist" },
      { emoji: "🌃", text: "Starting at noon and going until 4am", personality: "Night Owl" },
      { emoji: "✅", text: "Getting things done so Sunday is actually free", personality: "Practical Pragmatist" },
    ],
  },
  {
    text: "A mysterious door appears. You:",
    answers: [
      { emoji: "🚪", text: "Kick it open immediately", personality: "Bold Adventurer" },
      { emoji: "🎂", text: "Hope there's cake inside", personality: "Sweet Enthusiast" },
      { emoji: "👁️", text: "Sit near it and observe first", personality: "Zen Minimalist" },
      { emoji: "🕛", text: "Wait until midnight to open it", personality: "Night Owl" },
      { emoji: "🔍", text: "Check if it's structurally sound first", personality: "Practical Pragmatist" },
    ],
  },
  {
    text: "Your phone battery is at 3%. You:",
    answers: [
      { emoji: "😈", text: "Live on the edge, keep going", personality: "Bold Adventurer" },
      { emoji: "😱", text: "Panic — you need to text someone about dessert", personality: "Sweet Enthusiast" },
      { emoji: "😌", text: "You already don't use your phone much", personality: "Zen Minimalist" },
      { emoji: "😴", text: "It's fine, you're up anyway", personality: "Night Owl" },
      { emoji: "🔋", text: "You have a backup charger. Obviously.", personality: "Practical Pragmatist" },
    ],
  },
];

const personalities: Record<
  Personality,
  { emoji: string; tagline: string; coffee: string }
> = {
  "Bold Adventurer": {
    emoji: "⚡",
    tagline: "You live for intensity",
    coffee: "Double Espresso",
  },
  "Sweet Enthusiast": {
    emoji: "🍰",
    tagline: "Life's too short for bitter",
    coffee: "Caramel Latte",
  },
  "Zen Minimalist": {
    emoji: "🍃",
    tagline: "Simple. Clean. Perfect.",
    coffee: "Black Coffee, Single Origin",
  },
  "Night Owl": {
    emoji: "🌙",
    tagline: "Sleep is optional",
    coffee: "Red Eye (coffee + espresso shot)",
  },
  "Practical Pragmatist": {
    emoji: "☑️",
    tagline: "Just make it work",
    coffee: "Large Drip, Whatever's Fresh",
  },
};

function tally(answers: Personality[]): Personality {
  const counts: Record<string, number> = {};
  for (const p of answers) {
    counts[p] = (counts[p] ?? 0) + 1;
  }
  let best: Personality = answers[0];
  let bestCount = 0;
  for (const p of answers) {
    if (counts[p] > bestCount) {
      bestCount = counts[p];
      best = p;
    }
  }
  return best;
}

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(-1); // -1 = intro
  const [answers, setAnswers] = useState<Personality[]>([]);
  const [result, setResult] = useState<Personality | null>(null);

  function startQuiz() {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  }

  function handleAnswer(personality: Personality) {
    const newAnswers = [...answers, personality];
    if (currentQuestion < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setResult(tally(newAnswers));
    }
  }

  // Intro screen
  if (currentQuestion === -1) {
    return (
      <div className="flex flex-1 items-center justify-center min-h-screen px-4 py-12" style={{ background: "#f5ede0" }}>
        <div
          className="w-full max-w-lg rounded-2xl shadow-sm p-10 text-center"
          style={{ background: "#fffcf8", border: "1px solid #ede5d8" }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#b07d50" }}>
            Basecamp Rewards
          </p>
          <h1 className="text-4xl font-serif mb-4" style={{ fontFamily: "var(--font-lora), serif", color: "#3d2b1f" }}>
            What's Your Coffee Personality?
          </h1>
          <p className="text-lg mb-8" style={{ color: "#7a5c44" }}>
            Six quick questions. One perfect coffee match. Discover your Basecamp archetype.
          </p>
          <button
            onClick={startQuiz}
            className="px-8 py-3 rounded-full text-white font-semibold text-base transition-opacity hover:opacity-90"
            style={{ background: "#c8894a" }}
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  // Result screen
  if (result) {
    const p = personalities[result];
    return (
      <div className="flex flex-1 items-center justify-center min-h-screen px-4 py-12" style={{ background: "#f5ede0" }}>
        <div
          className="w-full max-w-lg rounded-2xl shadow-sm p-10 text-center"
          style={{ background: "#fffcf8", border: "1px solid #ede5d8" }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#b07d50" }}>
            Your Basecamp Archetype
          </p>
          <div className="text-6xl mb-4">{p.emoji}</div>
          <h2 className="text-3xl font-serif mb-2" style={{ fontFamily: "var(--font-lora), serif", color: "#3d2b1f" }}>
            {result}
          </h2>
          <p className="text-lg italic mb-6" style={{ color: "#7a5c44" }}>
            "{p.tagline}"
          </p>
          <div
            className="rounded-xl px-6 py-4 mb-8"
            style={{ background: "#fff3e4", border: "1px solid #e8c99a" }}
          >
            <p className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: "#b07d50" }}>
              Your Basecamp coffee match
            </p>
            <p className="text-xl font-serif" style={{ fontFamily: "var(--font-lora), serif", color: "#3d2b1f" }}>
              ☕ {p.coffee}
            </p>
          </div>
          <button
            onClick={startQuiz}
            className="px-6 py-2 rounded-full font-semibold text-sm transition-colors"
            style={{ border: "1px solid #c8894a", color: "#c8894a", background: "transparent" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "#fff3e4";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            }}
          >
            Take it again
          </button>
        </div>
      </div>
    );
  }

  // Question screen
  const q = questions[currentQuestion];
  const filled = currentQuestion;
  const empty = questions.length - currentQuestion;

  return (
    <div className="flex flex-1 items-center justify-center min-h-screen px-4 py-12" style={{ background: "#f5ede0" }}>
      <div
        className="w-full max-w-lg rounded-2xl shadow-sm p-8"
        style={{ background: "#fffcf8", border: "1px solid #ede5d8" }}
      >
        {/* Progress */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-semibold" style={{ color: "#b07d50" }}>
            Question {currentQuestion + 1} of {questions.length}
          </p>
          <div className="text-lg tracking-wider">
            {"☕".repeat(filled)}{"🫗".repeat(empty)}
          </div>
        </div>

        {/* Question */}
        <h2 className="text-xl font-serif mb-6" style={{ fontFamily: "var(--font-lora), serif", color: "#3d2b1f" }}>
          {q.text}
        </h2>

        {/* Answers */}
        <div className="flex flex-col gap-3">
          {q.answers.map((answer, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(answer.personality)}
              className="w-full text-left px-4 py-3 rounded-xl text-sm transition-colors"
              style={{ border: "1px solid #ede5d8", background: "#fffcf8", color: "#3d2b1f" }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "#fff3e4";
                el.style.borderColor = "#c8894a";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "#fffcf8";
                el.style.borderColor = "#ede5d8";
              }}
            >
              <span className="mr-2">{answer.emoji}</span>
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
