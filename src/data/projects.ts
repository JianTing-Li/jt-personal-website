export interface Project {
  id: string;
  name: string;
  category: "work" | "personal";
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
      "A production iOS and Android platform for institutional investors, spanning app-wide search, real-time market data dashboards, and pre-trade and execution workflows.",
    tags: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "Kotlin",
      "Jetpack Compose",
      "WebSockets/Real-Time Data",
    ],
    demoUrl: "https://marquee.gs.com/welcome/our-platform/mobile",
    detail:
      "I spent nearly six years contributing to the Marquee iOS application, and later the Android codebase in Kotlin and Jetpack Compose, across four major feature areas. I helped build a unified, app-wide search experience connecting users to research and product areas. I built and maintained real-time Market Data dashboards with live updates, sorting, filtering, and pinned instruments, with close attention to performance and state management. And I contributed to Visual Structuring and FX execution workflows, translating complex pre-trade and trading functionality into clear, dependable mobile interactions for institutional investors.",
  },
  {
    id: "jt-personal-website",
    name: "Personal Website & Living Resume",
    category: "personal",
    description:
      "This site — a living resume built to grow alongside my work, rather than a static PDF that goes stale.",
    tags: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    demoUrl: "https://jianting.netlify.app",
    detail:
      "My personal site and resume, built with Next.js, TypeScript, and Tailwind CSS. It's meant to be a living document — projects, experience, and story that I can keep updating as my work evolves, rather than a resume I have to rewrite from scratch every time something changes.",
  },
  {
    id: "product-data-insights",
    name: "Product Data Insights",
    category: "personal",
    description:
      "A browser-based tool that turns inconsistent e-commerce CSV exports into a prioritized, explainable list of products that need attention — entirely client-side, no backend involved.",
    tags: ["TypeScript", "React", "Vite", "Tailwind CSS", "Zustand"],
    demoUrl: "https://github.com/JianTing-Li/product-data-insights",
    detail:
      "Built to solve a real problem: e-commerce analysts often get product, sales, and inventory data in inconsistent formats and have to manually clean and cross-reference it. This tool ingests those CSVs, reconciles them with fuzzy column matching, joins them by SKU, and surfaces issues like stockouts, margin concerns, and price inconsistencies — each finding traceable back to its source rows. Everything runs in the browser using Papa Parse and a custom TypeScript pipeline, with Recharts for visualization and full test coverage via Vitest and Playwright.",
  },
  {
    id: "housing-violation",
    name: "NYC Housing Violation Recurrence",
    category: "personal",
    description:
      "An interactive data-journalism site analyzing 650K+ NYC HPD housing violation records in the Bronx — finding that 81% of officially \"closed\" violations recur within a year.",
    tags: ["JavaScript", "React", "Vite", "Node.js", "Recharts"],
    demoUrl: "https://github.com/JianTing-Li/housing-violation",
    detail:
      "A data pipeline and interactive site investigating whether NYC housing violations actually resolve when officially closed. A Node.js build step pulls records from NYC Open Data, cleans messy violation-category text, and treats recent closures as statistically censored rather than false negatives. The frontend, built with React, Vite, and Recharts (plus react-leaflet for the choropleth map), serves precomputed static data so there's no runtime API dependency. The analysis points to closure procedure, not violation severity, as the systemic weakness behind the recurrence rate.",
  },
];
