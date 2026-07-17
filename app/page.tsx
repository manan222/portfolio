import About from "../sections/About/About";
import Experience from "../sections/Experience/Experience";
import Hero from "../sections/Hero/Hero";
import Projects from "../sections/Projects/Projects";
import Skills from "../sections/Skills/Skills";
import Footer from "../components/layout/Footer";
import Contact from "../sections/Contact/Contact";





export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      {/* <About/> */}
      <Experience/>
      <Skills />
      
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}