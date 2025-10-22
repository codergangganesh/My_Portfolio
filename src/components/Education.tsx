import { Card } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react";

const Education = () => {
  const timeline = [
    {
      year: "2021 - Present",
      title: "B.Eng in AI & Computer Engineering",
      institution: "University Name",
      description:
        "Specializing in Artificial Intelligence, Machine Learning, and Computer Engineering with focus on deep learning, robotics, and intelligent systems.",
      gpa: "3.8/4.0",
      icon: GraduationCap,
      gradient: "from-primary to-accent",
    },
    {
      year: "2023 - Present",
      title: "AI Research Assistant",
      institution: "University AI Research Lab",
      description:
        "Contributing to cutting-edge research in deep learning, computer vision, and neural architecture search. Published papers in leading conferences.",
      icon: BookOpen,
      gradient: "from-accent to-purple-500",
    },
    {
      year: "2023",
      title: "Best AI Innovation Award",
      institution: "University Engineering Excellence",
      description:
        "Awarded for outstanding achievement in AI research and development of novel neural network architectures for real-time applications.",
      icon: Award,
      gradient: "from-purple-500 to-primary",
    },
  ];

  const certifications = [
    { name: "Deep Learning Specialization", org: "deeplearning.ai" },
    { name: "Machine Learning Engineer", org: "Coursera" },
    { name: "AWS Machine Learning", org: "Amazon Web Services" },
    { name: "TensorFlow Developer Certificate", org: "Google" },
    { name: "Advanced Computer Vision", org: "Stanford Online" },
    { name: "Natural Language Processing", org: "Hugging Face" },
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
            Education &{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through continuous learning and innovation
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6 mb-16">
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

        {/* Certifications Grid */}
        <Card className="p-8 bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/30 transition-all duration-500 animate-fade-in">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Certifications & Training</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group p-5 bg-secondary/30 backdrop-blur-sm rounded-xl hover:bg-secondary/50 transition-all duration-300 border border-border/30 hover:border-primary/30 hover:shadow-glow cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 group-hover:scale-150 transition-transform" />
                  <div>
                    <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                      {cert.name}
                    </div>
                    <div className="text-xs text-muted-foreground">{cert.org}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;
