import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Image (large round) */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <img
                src="https://via.placeholder.com/600x600.png?text=Your+Photo"
                alt="Profile"
                className="w-64 h-64 md:w-[26rem] md:h-[26rem] rounded-full object-cover ring-4 ring-primary/40 shadow-glow"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              <span className="block">Your Name</span>
              <span className="block text-muted-foreground text-xl md:text-2xl font-medium mt-2">
                Portfolio
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto md:mx-0">
              Brief introduction about you and what you do. Keep it concise for a clean, modern header.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center pt-2">
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

            <div className="flex gap-4 md:justify-start justify-center pt-4">
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

            <div className="grid grid-cols-3 gap-6 max-w-md md:max-w-lg md:mx-0 mx-auto pt-4">
              {[
                { value: "15+", label: "Projects" },
                { value: "8+", label: "Technologies" },
                { value: "3.8", label: "GPA" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-4 bg-card/30 backdrop-blur-xl rounded-xl border border-border/30 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
