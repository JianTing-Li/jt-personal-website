import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Home } from "@/components/sections/Home";
import { Skills } from "@/components/sections/Skills";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { Projects } from "@/components/sections/Projects";
import { Career } from "@/components/sections/Career";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Skills />
        <WhatIBuild />
        <Projects />
        <Career />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
