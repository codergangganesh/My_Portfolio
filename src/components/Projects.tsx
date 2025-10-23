import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Fiesta",
      description:
        "A Platform That helps to compare 5 different AI LLM models in a single platform",
      technologies: ["Nextjs", "Tailwind", "ReatAPI", "Supabase","Typescript"],
      featured: true,
      github: "https://github.com/codergangganesh/LLM_Comparision_Platform",
      demo: "https://ai-feista.vercel.app/",
      image: "AI Flista Design Image.jpeg"
    },
    {
      title: "LEE AI BOT",
      description:
        "AN Personal AI Assist Bot for Personal Use as per user commands.",
      technologies: ["HTML", "CSS", "JS"],
      featured: true,
      github: "https://github.com/codergangganesh/AI-BOT",
      demo: "https://ai-bot-gules-five.vercel.app/",
      image: "lee ai bot screen shot .png"
    },
    {
      title: "Vahan Bazar",
      description:
        "A Platform Where user can buy and sell a Bike,  with out any effort and also by testing and booking a bike for a ride",
      technologies: ["Reactvite", "RestAPI", "Vercel", "Supabase"],
      featured: false,
      github: "https://github.com/codergangganesh/Vahan",
      demo: "https://vahan-seven.vercel.app/",
      image: "vahanbazarimage.png"
    },
    
  ];

  return (
    <section id="projects" className="py-20 px-4 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Featured{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and cutting-edge implementations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/60 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow-lg flex flex-col h-[450px]"
            >
              {/* Project Image */}
              <div className="mb-4 rounded-lg overflow-hidden h-40 flex items-center justify-center bg-secondary/10">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
                    <span className="text-gray-500">Project Image</span>
                  </div>
                )}
              </div>
              
              <div className="flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-gradient-primary text-white text-xs font-bold rounded-full">
                      <Star className="w-3 h-3" />
                    </div>
                  )}
                </div>

                <p className="text-muted-foreground mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
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
              </div>
              
              <div className="flex gap-3 mt-auto">
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
                {project.demo && project.demo !== "#" && (
                  <Button
                    size="sm"
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300 flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 backdrop-blur-sm px-8 py-6 text-base font-semibold rounded-xl"
            asChild
          >
            <a href="https://github.com/codergangganesh" target="_blank" rel="noopener noreferrer">
              View All Projects
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;