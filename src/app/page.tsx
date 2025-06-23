// app/page.tsx (or pages/index.tsx depending on your setup)

import AboutMe from "./sections/AboutMe";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
    </main>
  );
}
