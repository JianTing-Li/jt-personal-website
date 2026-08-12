export interface CareerItem {
  id: string;
  badge: string | null;
  title: string;
  org: string;
  dates: string;
  current: boolean;
  points: string[];
}

export const career: CareerItem[] = [
  {
    id: "fellowship",
    badge: "Current Focus",
    title: "AI Product Development Fellow",
    org: "Pursuit · AI Native Program",
    dates: "Jul 2026 — Present",
    current: true,
    points: [
      "Developing AI product skills through a structured fellowship — AI Literacy, AI Build, and AI Showcase — treated as intentional, focused learning.",
      "Practicing human-centered design, LLM application development, AI solutions architecture, and iterative product building with real user feedback loops.",
      "Applying production engineering instincts from six years of mobile work — clear scoping, reliability, user-first thinking — to AI-native product development.",
    ],
  },
  {
    id: "goldman",
    badge: null,
    title: "Mobile Software Engineer",
    org: "Goldman Sachs",
    dates: "Jan 2020 — Nov 2025",
    current: false,
    points: [
      "Contributed to Goldman Sachs Marquee Mobile, an institutional client-facing platform delivering market insights, analytics, content, and trading capabilities.",
      "Spent most of nearly six years building and maintaining production iOS features using Swift, SwiftUI, and UIKit.",
      "Worked across content, search, market analytics, and execution workflows in a complex production environment.",
      "Later contributed to the Android application using Kotlin and Jetpack Compose, supporting shared features and cross-platform consistency.",
    ],
  },
  {
    id: "pursuit",
    badge: null,
    title: "iOS Software Engineering Fellow",
    org: "Pursuit",
    dates: "2018 — 2019",
    current: false,
    points: [
      "Completed a competitive, intensive coding fellowship focused on iOS mobile development — the foundation that launched my engineering career.",
    ],
  },
];
