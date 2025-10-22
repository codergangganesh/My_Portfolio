import { Code, Lightbulb, Rocket, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Problem Solver",
      description: "Tackling complex engineering challenges with innovative solutions",
    },
    {
      icon: Code,
      title: "Technical Expertise",
      description: "Proficient in multiple programming languages and engineering tools",
    },
    {
      icon: Lightbulb,
      title: "Creative Thinker",
      description: "Combining analytical skills with creative design thinking",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Constantly adapting to new technologies and methodologies",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Driven by curiosity and fueled by passion for engineering excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg leading-relaxed">
              I'm an engineering student passionate about leveraging technology to solve
              real-world problems. My journey in engineering has equipped me with a strong
              foundation in both theoretical knowledge and practical application.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              With a keen interest in innovation and sustainable design, I constantly seek
              opportunities to push boundaries and create impactful solutions. My approach
              combines rigorous analytical thinking with creative problem-solving.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Whether it's designing complex systems, writing efficient code, or
              collaborating on multidisciplinary projects, I bring dedication and
              enthusiasm to every challenge.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
