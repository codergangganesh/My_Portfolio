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
    company: "Acme Corp",
    period: "2023 — Present",
    bullets: [
      "Built modern UI with React and Tailwind, improving Lighthouse scores by 25%",
      "Implemented accessible, reusable component patterns",
      "Collaborated with backend to design type-safe APIs",
    ],
    logoSrc: "/logos/acme.png",
    companyUrl: "https://example.com",
  },
  {
    role: "AI Intern",
    company: "Innotech Labs",
    period: "2022 — 2023",
    bullets: [
      "Prototyped ML features with Python and TensorFlow",
      "Automated data pipelines and evaluation tooling",
      "Presented insights to stakeholders with clear visualizations",
    ],
    logoSrc: "/logos/innotech.png",
    companyUrl: "https://example.com",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="h-0.5 w-24 bg-gradient-primary rounded-full" />
          </div>

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
