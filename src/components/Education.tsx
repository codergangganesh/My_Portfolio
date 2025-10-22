import { Card } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const timeline = [
    {
      year: "2021 - Present",
      title: "Bachelor of Engineering",
      institution: "University Name",
      description:
        "Specializing in Electrical & Computer Engineering with focus on robotics, embedded systems, and machine learning.",
      gpa: "3.8/4.0",
      icon: GraduationCap,
    },
    {
      year: "2023",
      title: "Research Assistant",
      institution: "Engineering Research Lab",
      description:
        "Contributing to cutting-edge research in autonomous systems and artificial intelligence applications.",
      icon: BookOpen,
    },
    {
      year: "2022",
      title: "Engineering Excellence Award",
      institution: "Department Recognition",
      description:
        "Awarded for outstanding academic performance and innovative project contributions.",
      icon: Award,
    },
  ];

  const certifications = [
    "Professional Engineer in Training (EIT)",
    "Certified SolidWorks Associate (CSWA)",
    "AWS Certified Cloud Practitioner",
    "Machine Learning Specialization - Coursera",
  ];

  return (
    <section id="education" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic journey and professional development
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {timeline.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-start gap-4 md:w-1/4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm font-semibold text-primary">{item.year}</div>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-primary">{item.institution}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                  {item.gpa && (
                    <p className="text-sm font-semibold text-foreground">GPA: {item.gpa}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-card border-border animate-fade-in">
          <h3 className="text-2xl font-bold mb-6">Certifications & Training</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;
