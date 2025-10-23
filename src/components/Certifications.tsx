import { Card } from "@/components/ui/card";
import profileLogo from "@/assets/profile-logo.jpg";

type CertificationItem = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  logoSrc?: string;
};

const certifications: CertificationItem[] = [
  {
    title: "Foundations of DataStructures",
    issuer: "Courseera",
    date: "2024",
    description: "Comprehensive understanding of data structures and algorithms",
    logoSrc: "/courseraimage.png",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "Coursera",
    date: "2024",
    description: "Core concepts and applications of artificial intelligence",
    logoSrc: "/courseraimage.png",
  },
  {
    title: "Machine Learning",
    issuer: "Altair",
    date: "2024",
    description: "Practical implementation of machine learning algorithms",
    logoSrc: "altairimage.png",
  },
  {
    title: "Cyber Security",
    issuer: "Cisco",
    date: "2024",
    description: "Fundamentals of network security and protection measures",
    logoSrc: "/ciscoimage.png",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              Professional Development
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Certifications &{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Training
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications and specialized training programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <Card 
              key={idx}
              className="p-6 bg-card/70 backdrop-blur-sm border-border hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                {cert.logoSrc ? (
                  <img
                    src={cert.logoSrc}
                    alt={`${cert.issuer} logo`}
                    className="w-12 h-12 rounded-lg object-cover border border-border bg-background/50"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-lg border border-border bg-secondary" />
                )}

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                  <p className="text-sm text-muted-foreground mt-3">
                    {cert.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}