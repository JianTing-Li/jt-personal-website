export interface Project {
  id: string;
  name: string;
  category: "work";
  description: string;
  tags: string[];
  demoUrl: string;
  detail: string;
}

export const projects: Project[] = [
  {
    id: "marquee",
    name: "Goldman Sachs Marquee",
    category: "work",
    description:
      "A production iOS and Android platform providing institutional investors with market insights, analytics, content, and execution capabilities.",
    tags: ["Swift", "SwiftUI", "UIKit", "Kotlin", "Jetpack Compose"],
    demoUrl: "https://marquee.gs.com/welcome/our-platform/mobile",
    detail:
      "I spent most of nearly six years contributing to the iOS application across content, analytics, search, and trading workflows. I later contributed to the Android codebase using Kotlin and Jetpack Compose, supporting feature parity and shared mobile experiences.",
  },
  {
    id: "search",
    name: "Unified Search",
    category: "work",
    description:
      "An app-wide search experience that helped institutional users discover research, market content, and relevant tools from one place.",
    tags: ["Swift", "SwiftUI", "UIKit", "Search", "Mobile Architecture"],
    demoUrl: "https://marquee.gs.com/welcome/our-platform/mobile",
    detail:
      "I contributed to the design and implementation of a unified search system across the Marquee mobile experience. The work involved connecting users to content and product areas through a consistent search interface while supporting the needs of a large production application.",
  },
  {
    id: "marketdata",
    name: "Market Data",
    category: "work",
    description:
      "A real-time mobile market dashboard designed to help users monitor and explore financial instruments efficiently.",
    tags: ["Swift", "SwiftUI", "WebSockets", "Real-Time Data", "Performance"],
    demoUrl: "https://marquee.gs.com/welcome/our-platform/mobile",
    detail:
      "I helped build and maintain Market Data experiences with capabilities such as real-time updates, sorting, filtering, searching, pinned instruments, and multiple time ranges. The work required careful attention to performance, state management, and reliability.",
  },
  {
    id: "vs",
    name: "Visual Structuring & Execution Workflows",
    category: "work",
    description:
      "Mobile experiences supporting pre-trade analysis and institutional execution workflows.",
    tags: ["Swift", "UIKit", "Financial Technology", "Mobile UX"],
    demoUrl: "https://marquee.gs.com/welcome/our-platform/mobile",
    detail:
      "I contributed to key mobile experiences including Visual Structuring and FX execution workflows, helping translate complex financial functionality into clear and dependable mobile interactions.",
  },
];
