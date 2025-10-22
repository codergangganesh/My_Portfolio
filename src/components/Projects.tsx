import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Recommendation Engine",
      description:
        "Built a sophisticated ML-based recommendation system using collaborative filtering and deep learning, achieving 92% accuracy in user preference prediction.",
      technologies: ["Python", "TensorFlow", "FastAPI", "Redis"],
      featured: true,
      github: "#",
      demo: "#",
    },
    {
      title: "Computer Vision Object Detection",
      description:
        "Developed real-time object detection system using YOLO architecture with custom dataset training for industrial automation applications.",
      technologies: ["PyTorch", "OpenCV", "Docker", "React"],
      featured: true,
      github: "#",
      demo: "#",
    },
    {
      title: "NLP Sentiment Analysis Platform",
      description:
        "Created advanced sentiment analysis tool leveraging transformer models (BERT) for multi-language support and context-aware classification.",
      technologies: ["Transformers", "FastAPI", "PostgreSQL", "Vue.js"],
      featured: false,
      github: "#",
      demo: "#",
    },
    {
      title: "Autonomous Robot Navigation",
      description:
        "Implemented SLAM-based navigation system for autonomous mobile robots with path planning and obstacle avoidance using reinforcement learning.",
      technologies: ["ROS2", "Python", "C++", "Gazebo"],
      featured: false,
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Featured{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing AI-driven solutions and innovative engineering implementations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow-lg animate-fade-in ${
                project.featured ? "lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8 space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    {project.featured && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-primary/10 border border-primary/30 rounded-full mb-2">
                        <Sparkles className="w-3 h-3 text-primary" />
                        <span className="text-xs font-semibold text-primary">Featured</span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-primary/40 text-primary/90 font-medium px-3 py-1 hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary backdrop-blur-sm flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300 flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-all duration-500 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12 animate-fade-in">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 backdrop-blur-sm px-8 py-6 text-base font-semibold rounded-xl"
          >
            View All Projects
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
