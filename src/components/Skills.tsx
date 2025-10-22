import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Database, Sparkles, Layers } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "AI & Machine Learning",
      icon: Sparkles,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "NLP"],
      gradient: "from-primary to-accent",
    },
    {
      category: "Programming",
      icon: Cpu,
      skills: ["Python", "JavaScript", "C++", "Java", "TypeScript", "Go"],
      gradient: "from-accent to-purple-500",
    },
    {
      category: "Web & Cloud",
      icon: Layers,
      skills: ["React", "Node.js", "AWS", "Docker", "MongoDB", "PostgreSQL"],
      gradient: "from-purple-500 to-primary",
    },
    {
      category: "Data & Analytics",
      icon: Database,
      skills: ["Pandas", "NumPy", "Matplotlib", "SQL", "BigQuery", "Tableau"],
      gradient: "from-primary to-accent",
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
              Technical Arsenal
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Skills &{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI, development, and data science
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-glow`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-5 py-2.5 text-sm font-medium bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer backdrop-blur-sm border border-border/30 hover:border-primary/50 hover:shadow-glow group/badge"
                  >
                    <span className="group-hover/badge:scale-110 transition-transform inline-block">
                      {skill}
                    </span>
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <Card className="mt-8 p-8 bg-card/30 backdrop-blur-xl border-border/30 hover:border-primary/30 transition-all duration-500 animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Deep Learning Architecture",
              "Computer Vision",
              "Natural Language Processing",
              "Reinforcement Learning",
              "System Design",
              "Algorithm Optimization",
              "Neural Networks",
              "Data Engineering",
              "MLOps & Deployment",
            ].map((competency, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-all duration-300 group"
              >
                <div className="w-2 h-2 bg-gradient-primary rounded-full group-hover:scale-150 transition-transform" />
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  {competency}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
