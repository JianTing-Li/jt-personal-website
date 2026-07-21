export interface AboutChapter {
  number: string;
  title: string;
  body: string;
}

export const aboutChapters: AboutChapter[] = [
  {
    number: "01",
    title: "Adaptation & perspective",
    body: "I grew up in China and immigrated to the U.S. as a child. Learning a new language and culture from scratch taught me to pay close attention to how people communicate — a habit that still shapes how I think about the products I build.",
  },
  {
    number: "02",
    title: "A foundation in communication",
    body: "That early interest in communication led me to study speech-language pathology before moving into engineering. It gave me a practical framework for thinking about clarity, comprehension, and how easily something can be misunderstood — lessons I now carry into product and UX decisions.",
  },
  {
    number: "03",
    title: "Reinvention",
    body: "Pursuit launched my engineering career, followed by nearly six years building production mobile software at Goldman Sachs for institutional investors worldwide. After that chapter, I chose to explore something I had become genuinely curious about: building with AI while bringing the same focus on usefulness, reliability, and people.",
  },
];
