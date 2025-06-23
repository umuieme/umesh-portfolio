// app/page.tsx (or pages/index.tsx depending on your setup)

import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
    </>
  );
}
