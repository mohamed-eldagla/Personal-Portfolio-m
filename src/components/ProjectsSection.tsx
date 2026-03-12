import AnimatedSection from "./AnimatedSection";
import { ArrowUpRight } from "lucide-react";

import imgRumor from "@/assets/projects/rumor-detection.png";
import imgNYC from "@/assets/projects/nyc-collisions.png";
import imgIoT from "@/assets/projects/iot-power.png";
import imgSQL from "@/assets/projects/arabic-sql.png";

const projects = [
  {
    title: "Rumor Detection RAG Chatbot",
    subtitle: "Egyptian Cabinet (IDSC)",
    tech: ["RAG", "AstraDB", "OpenAI", "Node.js", "React"],
    desc: "RAG system for detecting and verifying news/rumors for the 'Ask Egypt' national platform. Scalable pipelines with vector search and OpenAI models.",
    featured: true,
    thumbnail: imgRumor,
  },
  {
    title: "NYC Motor Vehicle Collisions Pipeline",
    subtitle: "End-to-End Data Engineering",
    tech: ["Python", "React", "Vercel"],
    desc: "Full ETL pipeline processing 2M+ crash records with interactive React analytics dashboard and automated report generation.",
    link: "https://github.com/mohamed-eldagla/nycDataEngineeringProject",
    featured: true,
    thumbnail: imgNYC,
  },
  {
    title: "Smart IoT Power Quality Monitoring",
    subtitle: "Graduation Project (A+)",
    tech: ["Python", "BERT", "RAG", "Pandas", "NILM"],
    desc: "Real-time analytics pipeline for energy disaggregation. Fine-tuned BERT-based NILM model achieving 95.2% accuracy with RAG chatbot.",
    thumbnail: imgIoT,
  },
  {
    title: "Arabic-to-SQL Query Generation",
    subtitle: "NLP Research",
    tech: ["GPT-4o", "SQL-Coder", "Google Translate API"],
    desc: "NLP system converting Arabic queries into SQL statements with 72% accuracy through model prompting and preprocessing.",
    thumbnail: imgSQL,
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-32 px-6 relative">
    <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
    <div className="max-w-6xl mx-auto relative">
      <AnimatedSection>
        <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium mb-4">Projects</p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
          Things I've
          <br />
          <span className="text-muted-foreground">built.</span>
        </h2>
      </AnimatedSection>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <AnimatedSection
            key={i}
            delay={i * 0.15}
            variant={i % 2 === 0 ? "slideLeft" : "slideRight"}
          >
            <div
              className={`glass-card-light rounded-2xl overflow-hidden card-hover h-full flex flex-col group ${p.featured ? "ring-1 ring-accent/10" : ""
                }`}
            >
              {/* Thumbnail */}
              <div className="project-thumbnail">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{p.subtitle}</p>
                  </div>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 ml-4 p-2 rounded-lg bg-secondary text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed flex-1">
                  {p.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium px-3 py-1.5 rounded-full bg-secondary text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
