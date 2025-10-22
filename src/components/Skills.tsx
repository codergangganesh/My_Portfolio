import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "C++", "Java", "JavaScript", "MATLAB", "R"],
      color: "primary",
    },
    {
      category: "Engineering Tools",
      skills: ["AutoCAD", "SolidWorks", "ANSYS", "LabVIEW", "Simulink", "Eagle"],
      color: "accent",
    },
    {
      category: "Web Technologies",
      skills: ["React", "Node.js", "TypeScript", "HTML/CSS", "SQL", "Git"],
      color: "primary",
    },
    {
      category: "Core Competencies",
      skills: [
        "Circuit Design",
        "System Analysis",
        "Data Structures",
        "Machine Learning",
        "Project Management",
        "Technical Documentation",
      ],
      color: "accent",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive toolkit for engineering excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
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
