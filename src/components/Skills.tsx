import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Database, Sparkles, Layers } from "lucide-react";

const Skills = () => {
  const expertise = [
    {
      title: "Programming",
      icon: Cpu,
      gradient: "from-accent to-purple-500",
      skills: ["Python", "JavaScript/TS", "C++", "OOP", "DSA"],
    },
    {
      title: "Web & Cloud",
      icon: Layers,
      gradient: "from-purple-500 to-primary",
      skills: ["React", "Node.js", "Tailwind", "Docker"],
    },
    {
      title: "Data & Analytics",
      icon: Database,
      gradient: "from-primary to-accent",
      skills: ["Pandas", "SQL"],
    },
  ];

  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              Skills & Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            What I <span className="bg-gradient-primary bg-clip-text text-transparent">Do Best</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern overview of my strengths across AI, development, and data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((block, idx) => (
            <Card
              key={idx}
              className="p-8 bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow group animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${block.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-glow`}>
                  <block.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {block.title}
                </h3>
              </div>

              <div className="mt-2 flex flex-wrap gap-3">
                {block.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary" className="px-4 py-2 text-sm bg-secondary/80 border border-border/30">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
