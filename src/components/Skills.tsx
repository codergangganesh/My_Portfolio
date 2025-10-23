import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cpu, Database, Sparkles, Layers, Brain, Code, Server } from "lucide-react";

const Skills = () => {
  const expertise = [
   
    {
      title: "Programming Languages",
      icon: Code,
      gradient: "from-purple-500 to-primary",
      skills: ["C Programming", "Python", "JavaScript", "Java"],
    },
    {
      title: "Web Technologies",
      icon: Layers,
      gradient: "from-primary to-blue-500",
      skills: ["React", "Node.js", "Next.js","ReactVite"],
    },
    {
      title: "Data & Analytics",
      icon: Database,
      gradient: "from-blue-500 to-teal-500",
      skills: ["Pandas", "NumPy", "SQL", "MongoDB"],
    },
    
  ];

  return (
    <section id="skills" className="py-20 px-4 md:py-32 relative overflow-hidden bg-gradient-dark">
      <style>
        {`
          .flip-card-container {
            perspective: 1000px;
          }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
            transform-style: preserve-3d;
          }
          .flip-card-container:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 1rem;
          }
          .flip-card-back {
            transform: rotateY(180deg);
          }
        `}
      </style>
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              Skills & Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            My Technical{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my skills across various domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((block, idx) => (
            <div 
              key={idx}
              className="flip-card-container h-[320px]"
            >
              <div className="flip-card-inner">
                {/* Front of Card with Image */}
                <Card className="flip-card-front p-0 bg-card/60 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow group flex flex-col">
                  <div className="relative w-full h-full">
                    {/* Using a professional placeholder image since we don't have specific images for each category */}
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${block.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                          <block.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{block.title}</h3>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <div className="flex flex-wrap justify-center gap-2">
                        {block.skills.slice(0, 3).map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="px-2 py-1 text-xs bg-white/20 text-white border-white/30"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Back of Card */}
                <Card className="flip-card-back p-6 bg-card/60 backdrop-blur-xl border-border/50 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${block.gradient} flex items-center justify-center`}>
                      <block.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">
                      {block.title}
                    </h3>
                  </div>

                  <div className="space-y-3 flex-grow">
                    {block.skills.map((skill, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                        <Badge variant="secondary" className="px-3 py-1.5 text-sm bg-secondary/80 border border-border/30">
                          {skill}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
        
        {/* Skills summary */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-card/60 backdrop-blur-xl border-border/50 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center">
                <div className="mr-4 p-3 bg-primary/10 rounded-full">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold">Continuous Learning</h3>
                  <p className="text-muted-foreground">
                    Always exploring new technologies and methodologies
                  </p>
                </div>
              </div>
              <a href="https://drive.google.com/uc?export=download&id=1I99xYcoCOWuCzjeD6y2aCt_XG7t3JDV-" download="Ganesh_Babu_Resume.pdf">
                <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  Download Resume
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;