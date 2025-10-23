import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  const timeline = [
    {
      year: "2025 - Present",
      title: "B.Tech Engineering in AI & DS",
      institution: "KIT-Kalaignarkarunanidhi Institute of Technology",
      description:
        "Specializing in Artificial Intelligence",
      gpa: "8.49/10.0",
      icon: GraduationCap,
      gradient: "from-primary to-accent",
    },
    {
      year: "2024",
      title: "Diploma in Electronics and Communication Engineering",
      institution: "Sri Ranganathar Institute of Polytechnic College ",
      gpa: "9.3/10.0",
      icon: BookOpen,
      gradient: "from-accent to-purple-500",
    },
    
  ];

  return (
    <section id="education" className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              Academic Journey
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Education {" "}
            
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through continuous learning and innovation
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left - Icon & Year */}
                <div className="flex items-start gap-4 lg:w-1/4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-glow`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-sm font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20">
                    {item.year}
                  </div>
                </div>

                {/* Right - Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-lg text-primary font-medium">{item.institution}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  {item.gpa && (
                    <div className="inline-block px-4 py-2 bg-gradient-primary/10 rounded-lg border border-primary/20">
                      <span className="text-sm font-bold text-primary">GPA: {item.gpa}</span>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;