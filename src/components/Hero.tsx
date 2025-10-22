import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Engineering background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-dark" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <span className="text-primary font-medium">Engineering Student</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Building Tomorrow's
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Solutions Today
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Passionate engineering student specializing in innovative problem-solving
            and cutting-edge technology development
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-delay">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow group"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-primary transition-colors rounded-lg border border-border hover:border-primary group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-primary transition-colors rounded-lg border border-border hover:border-primary group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 bg-card hover:bg-primary transition-colors rounded-lg border border-border hover:border-primary group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
