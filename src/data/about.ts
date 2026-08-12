export interface AboutChapter {
  number: string;
  title: string;
  bullets: string[];
}

export const aboutChapters: AboutChapter[] = [
  {
    number: "01",
    title: "Adaptation & perspective",
    bullets: [
      "Grew up in China and immigrated to the U.S. as a child.",
      "Learning a new language and culture from scratch taught me to pay close attention to how people actually communicate.",
      "That habit still shapes how I think about the products I build today.",
    ],
  },
  {
    number: "02",
    title: "A foundation in communication",
    bullets: [
      "That early interest in communication led me to study speech-language pathology before moving into engineering.",
      "It gave me a practical framework for clarity, comprehension, and how easily something can be misunderstood.",
      "I still carry those lessons into product and UX decisions today.",
    ],
  },
  {
    number: "03",
    title: "Reinvention",
    bullets: [
      "Pursuit launched my engineering career.",
      "I spent nearly six years building production mobile software at Goldman Sachs for institutional investors worldwide.",
      "After that chapter, I chose to explore something I'd grown genuinely curious about: building with AI, with the same focus on usefulness, reliability, and people.",
    ],
  },
];
