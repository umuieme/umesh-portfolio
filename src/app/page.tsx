// app/page.tsx (or pages/index.tsx depending on your setup)

import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
    </main>
  );
}
