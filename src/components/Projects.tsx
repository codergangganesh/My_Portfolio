import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Autonomous Navigation System",
      description:
        "Developed an intelligent navigation system using computer vision and machine learning algorithms for autonomous vehicle path planning.",
      technologies: ["Python", "TensorFlow", "OpenCV", "ROS"],
      github: "#",
      demo: "#",
    },
    {
      title: "IoT Smart Home Controller",
      description:
        "Designed and implemented a complete IoT ecosystem for home automation with real-time monitoring and control capabilities.",
      technologies: ["Arduino", "Node.js", "React", "MQTT"],
      github: "#",
      demo: "#",
    },
    {
      title: "Renewable Energy Optimizer",
      description:
        "Created optimization algorithms for efficient energy distribution in solar panel arrays, increasing output by 23%.",
      technologies: ["MATLAB", "Simulink", "Python", "Data Analysis"],
      github: "#",
      demo: "#",
    },
    {
      title: "Robotics Arm Controller",
      description:
        "Built a precise 6-DOF robotic arm control system with inverse kinematics and trajectory planning for manufacturing applications.",
      technologies: ["C++", "ROS", "CAD", "Control Systems"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Showcasing innovative solutions and technical implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-primary/50 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-primary hover:opacity-90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
