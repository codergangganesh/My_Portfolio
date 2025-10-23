type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  logoSrc?: string; // path in public/, e.g. /logos/acme.png
  companyUrl?: string;
};

const experiences: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "Learn Logicify LLC",
    period: "2024",
    bullets: [
      "Built modern UI with HTML,CSS,JS",
      "Implemented accessible, reusable component patterns",
    ],
    logoSrc: "learnlogicifyimage.png",
    companyUrl: "",
  },
  {
    role: "Data Science Intern",
    company: "NXT Logic Solutions",
    period: "2023",
    bullets: [
      "Python based data analysis",
      "Data visualization",
    ],
    logoSrc: "nxtlogicsolutionsimage.png",
    companyUrl: "https://www.nxtlogic.com/",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              Professional Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Work{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional roles and key contributions across various organizations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* timeline rail */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border" aria-hidden />

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <article
                  key={idx}
                  className="relative pl-16 sm:pl-20"
                >
                  {/* timeline node */}
                  <div className="absolute left-2.5 sm:left-4 top-6 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20" />

                  <div className="p-6 rounded-2xl border border-border bg-card/70 backdrop-blur-sm hover:border-primary/40 transition-colors">
                    <header className="flex items-start gap-4">
                      {exp.logoSrc ? (
                        <img
                          src={exp.logoSrc}
                          alt={`${exp.company} logo`}
                          className="w-12 h-12 rounded-lg object-cover border border-border bg-background/50"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-lg border border-border bg-secondary" />
                      )}

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <div>
                            <h3 className="text-lg md:text-xl font-semibold">{exp.role}</h3>
                            {exp.companyUrl ? (
                              <a href={exp.companyUrl} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">
                                {exp.company}
                              </a>
                            ) : (
                              <p className="text-sm text-muted-foreground">{exp.company}</p>
                            )}
                          </div>
                          <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap ml-0 sm:ml-4">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </header>

                    <ul className="mt-4 space-y-2 text-sm md:text-base text-muted-foreground">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-2 block w-1 h-1 rounded-full bg-primary/70" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}