import About from "../sections/About/About";
import Experience from "../sections/Experience/Experience";
import Hero from "../sections/Hero/Hero";
import Projects from "../sections/Projects/Projects";
import Skills from "../sections/Skills/Skills";
import Contact from "../sections/Contact/Contact";
import Footer from "../components/layout/Footer";





export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About/>
      <Skills />
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}