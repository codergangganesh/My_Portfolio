import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Certifications from "@/components/Certifications";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <div className="space-y-20 md:space-y-32">
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Education />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;