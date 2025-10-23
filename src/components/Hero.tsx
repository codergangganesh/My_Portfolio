import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const roles = ["AI Student", "Artisan", "Innovator", "Developer", "Researcher"];
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

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
                src="/GANESH.jpg"
                alt="Profile"
                className="w-64 h-64 md:w-[26rem] md:h-[26rem] rounded-full object-cover ring-4 ring-primary/40 shadow-glow"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              <span className="block text-foreground">Mannam Ganesh Babu</span>
              <span className="block text-muted-foreground text-xl md:text-2xl font-medium mt-2 h-8">
                <span className="typing-text">{text}</span>
                <span className="typing-cursor">|</span>
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto md:mx-0">
              Hi, I'm Ganesh Babu.
              I'm a third-year B.E. Artificial Intelligence and Data Science student at Kalaignarkarunanidhi Institute of Technology (KIT), Coimbatore. I'm interested in learning about AI, data science, and how technology can be used to solve real-world problems. This portfolio showcases my projects, skills, and what I've learned during my studies.
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
              <a href="https://drive.google.com/uc?export=download&id=1I99xYcoCOWuCzjeD6y2aCt_XG7t3JDV-" download="Ganesh_Babu_Resume.pdf">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary hover:text-primary backdrop-blur-sm px-8 py-6 text-base font-semibold rounded-xl transition-all duration-300"
                >
                  Get My Resume
                </Button>
              </a>
            </div>

            <div className="flex gap-4 md:justify-start justify-center pt-4">
              {[
                { href: "https://github.com/codergangganesh", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/mannam-ganeshbabu-5a19ab291/", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:mannamganeshbabu8@gmail.com", icon: Mail, label: "Email" },
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
                { value: "10+", label: "Projects" },
                { value: "8+", label: "Technologies" },
                { value: "8.5", label: "GPA" },
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

      <style>{`
        .typing-cursor {
          animation: blink 1s infinite;
          margin-left: 5px;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;