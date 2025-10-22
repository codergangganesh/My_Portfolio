import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
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
      {/* Advanced Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Engineering background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-card/50 backdrop-blur-xl border border-primary/30 rounded-full mb-6 hover:border-primary/60 transition-all group animate-float shadow-glow">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-primary font-semibold text-sm tracking-wide">
              AI & Engineering Student
            </span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tight">
            <span className="block mb-2">Building the</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              AI-Powered Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Pioneering innovative solutions at the intersection of{" "}
            <span className="text-primary font-medium">artificial intelligence</span>,{" "}
            <span className="text-accent font-medium">machine learning</span>, and{" "}
            <span className="text-primary font-medium">cutting-edge engineering</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-delay">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-primary hover:shadow-glow-lg transition-all duration-500 group px-8 py-6 text-base font-semibold rounded-xl"
            >
              Explore My Work
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary backdrop-blur-sm px-8 py-6 text-base font-semibold rounded-xl transition-all duration-300"
            >
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-12">
            {[
              { href: "https://github.com", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:your.email@example.com", icon: Mail, label: "Email" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-card/50 backdrop-blur-xl hover:bg-primary/10 transition-all duration-300 rounded-xl border border-border/50 hover:border-primary group hover:shadow-glow"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 group-hover:text-primary" />
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-12">
            {[
              { value: "15+", label: "Projects" },
              { value: "8+", label: "Technologies" },
              { value: "3.8", label: "GPA" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 bg-card/30 backdrop-blur-xl rounded-xl border border-border/30 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-card/20">
          <div className="w-1.5 h-3 bg-gradient-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
