import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Education />
      <Experience />
      <Research />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}