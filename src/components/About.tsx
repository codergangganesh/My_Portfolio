import { Brain, Code2, Lightbulb, Rocket, Zap, Target, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI Specialist",
      description: "Deep learning, neural networks, and intelligent systems",
      gradient: "from-primary to-accent",
      detail: "Specializing in machine learning algorithms and neural network architectures. Experienced in computer vision, natural language processing, and reinforcement learning applications."
    },
    {
      icon: Code2,
      title: "Full-Stack Dev",
      description: "Modern web technologies and scalable architectures",
      gradient: "from-accent to-primary",
      detail: "Proficient in building responsive web applications with React, Node.js, and cloud services. Experienced in both frontend and backend development with a focus on user experience."
    },
    {
      icon: Zap,
      title: "Problem Solver",
      description: "Complex engineering challenges with innovative solutions",
      gradient: "from-primary to-purple-500",
      detail: "Approach complex problems with analytical thinking and creative solutions. Experienced in debugging, optimization, and system design for scalable applications."
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Constantly exploring cutting-edge technologies",
      gradient: "from-purple-500 to-primary",
      detail: "Quickly adapt to new technologies and frameworks. Passionate about staying current with industry trends and applying new knowledge to real-world projects."
    },
  ];

  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              About Me
            </span>
            <div className="mt-6 flex justify-center">
            <a
              href="https://www.linkedin.com/in/mannam-ganeshbabu-5a19ab291/"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="px-6 py-5 rounded-xl bg-gradient-primary hover:shadow-glow-lg group">
                <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Connect on LinkedIn
              </Button>
            </a>
          </div>
        </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Driven by{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about leveraging AI and engineering to create transformative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <Card className="p-8 bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 group">
              <Target className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">My Mission</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm an AI and engineering student on a mission to bridge the gap between 
                theoretical knowledge and real-world applications. My journey focuses on 
                creating intelligent systems that solve meaningful problems.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 group">
              <Lightbulb className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">My Approach</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I combine rigorous analytical thinking with creative problem-solving, 
                always staying at the forefront of AI research and emerging technologies. 
                Every project is an opportunity to push boundaries.
              </p>
            </Card>
          </div>

          {/* Right Column - Highlights Grid (Static Cards) */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow group h-[280px] flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-primary">{item.title}</h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {item.description}
                </p>
                
                <p className="text-xs text-muted-foreground">
                  {item.detail}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        
      </div>
    </section>
  );
};

export default About;