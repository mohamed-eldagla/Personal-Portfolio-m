import AnimatedSection from "./AnimatedSection";

import logoGIU from "@/assets/logos/giu.png";
import logoEJUST from "@/assets/logos/ejust.png";

const education = [
  {
    degree: "MSc. in Data Science",
    school: "The German International University in Cairo (GIU)",
    period: "Oct 2025 – Present",
    gpa: "3.8/4.0",
    note: "Full Fellowship Recipient",
    detail:
      "Pursuing advanced research in adversarial attacks on LLMs and autonomous vehicles, combining German academic precision with cutting-edge AI.",
    logo: logoGIU,
  },
  {
    degree: "BSc. in Computer Science (AI & Data Science)",
    school: "Egypt-Japan University of Science and Technology",
    period: "2021 – 2025",
    gpa: "3.59/4.0",
    note: "70% Merit Scholarship · Top 10% · Rank 1/120 Final Semester",
    detail:
      "A unique Japanese-Egyptian academic model emphasizing research methodology, discipline, and hands-on engineering — graduating with honors and a Q1 publication.",
    logo: logoEJUST,
  },
];

const EducationSection = () => (
  <section id="education" className="py-32 px-6 relative">
    <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
    <div className="max-w-6xl mx-auto relative">
      <AnimatedSection>
        <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium mb-4">Education</p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
          German precision,
          <br />
          <span className="text-muted-foreground">Japanese discipline.</span>
        </h2>
        <p className="mt-4 text-base text-muted-foreground max-w-2xl leading-relaxed">
          A first-generation graduate shaped by two world-class academic traditions — merging the
          research rigor of Japan with the engineering excellence of Germany.
        </p>
      </AnimatedSection>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {education.map((edu, i) => (
          <AnimatedSection key={i} delay={i * 0.15} variant="scale">
            <div className="glass-card-light rounded-2xl p-8 card-hover h-full group">
              {/* University logo */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="inline-flex p-3 rounded-xl bg-white shadow-sm">
                  <img
                    src={edu.logo}
                    alt={edu.school}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                {edu.degree}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{edu.school}</p>
              <div className="mt-4 flex items-center gap-3 flex-wrap">
                <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-muted-foreground">
                  {edu.period}
                </span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-accent/10 text-accent">
                  GPA: {edu.gpa}
                </span>
              </div>
              {edu.note && (
                <p className="mt-3 text-xs font-medium text-accent">{edu.note}</p>
              )}
              {edu.detail && (
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{edu.detail}</p>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
