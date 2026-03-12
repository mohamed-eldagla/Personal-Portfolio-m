import AnimatedSection from "./AnimatedSection";
import { MapPin, Calendar } from "lucide-react";

import logoGIU from "@/assets/logos/giu.png";
import logoIDSC from "@/assets/logos/idsc.png";
import logoUPEC from "@/assets/logos/upec.png";
import logoUNFCCC from "@/assets/logos/unfccc.jpg";
import logoDSME from "@/assets/logos/datascience-me.jpg";

const experiences = [
  {
    role: "Research & Teaching Assistant",
    company: "The German International University in Cairo (GIU)",
    period: "Sep 2025 – Present",
    location: "Cairo, Egypt",
    badge: "Current",
    logo: logoGIU,
    logoBg: "bg-white",
    points: [
      "Instructing 100+ students in Big Data, Database Systems, and Intro to CS.",
      "Conducting research in Adversarial Attacks on LLMs and Autonomous Vehicles.",
    ],
  },
  {
    role: "AI Engineer Intern",
    company: "Presidency of the Egyptian Cabinet – IDSC",
    period: "Jul 2025 – Dec 2025",
    location: "Cairo, Egypt",
    logo: logoIDSC,
    logoBg: "bg-[#1a1a1a]",
    points: [
      "Led development of a Prime Minister-sponsored rumor detection system using RAG, AstraDB, OpenAI, and React.",
      "Built scalable data pipeline to detect and verify news from trusted platforms.",
    ],
  },
  {
    role: "NLP Research Intern",
    company: "Université Paris-Est Créteil (UPEC)",
    period: "Jun 2025 – Aug 2025",
    location: "Remote",
    logo: logoUPEC,
    logoBg: "bg-[#d4213d]",
    points: [
      "Selected as 1 of 30 from 1,300+ applicants for master's-level AI research.",
      "Developed LLM-based event discovery system using TinyLlama 1.1B; scraped 50K+ records.",
    ],
  },
  {
    role: "Data Scientist Intern",
    company: "DataScience Middle East (SAS Partner)",
    period: "Aug 2024 – Oct 2024",
    location: "Cairo, Egypt",
    logo: logoDSME,
    logoBg: "",
    points: [
      "Selected as one of 12 interns in the region; ranked 2nd in the program.",
      "Worked with SAS Programming, Oracle SQL, and Visual Analytics.",
    ],
  },
  {
    role: "ICT Specialist",
    company: "United Nations – COP27",
    period: "Oct 2022 – Nov 2022",
    location: "Sharm El-Sheikh",
    logo: logoUNFCCC,
    logoBg: "bg-white",
    points: [
      "Developed and maintained the COP27 Mobile Application with MCIT and UN engineers.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-32 px-6 hero-bg relative overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]"
      style={{ background: "hsl(215 100% 50%)" }} />

    <div className="max-w-6xl mx-auto relative z-10">
      <AnimatedSection>
        <p className="text-sm tracking-[0.2em] uppercase font-medium mb-4" style={{ color: "hsl(215 80% 70%)" }}>Experience</p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight" style={{ color: "hsl(0 0% 100%)" }}>
          Where I've made
          <br />
          <span className="text-gradient">impact.</span>
        </h2>
      </AnimatedSection>

      <div className="mt-16 relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-[139px] top-0 bottom-0 w-px" style={{ background: "hsl(0 0% 100% / 0.08)" }} />

        <div className="space-y-2">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group relative grid md:grid-cols-[140px_1fr] gap-6 py-8">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-[135px] top-10 w-[9px] h-[9px] rounded-full bg-accent ring-4 ring-accent/20" />

                <div className="md:text-right">
                  <div className="flex items-center gap-1.5 md:justify-end" style={{ color: "hsl(0 0% 50%)" }}>
                    <Calendar size={12} />
                    <p className="text-xs font-medium">{exp.period}</p>
                  </div>
                  <div className="flex items-center gap-1.5 md:justify-end mt-1" style={{ color: "hsl(0 0% 40%)" }}>
                    <MapPin size={12} />
                    <p className="text-xs">{exp.location}</p>
                  </div>
                </div>

                <div className="md:pl-8 glass-card rounded-2xl p-6 group-hover:bg-white/[0.06] transition-all duration-300">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-4">
                      {/* Company logo */}
                      <div className={`shrink-0 w-11 h-11 rounded-xl overflow-hidden shadow-sm ${exp.logoBg || ''}`}>
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-accent transition-colors" style={{ color: "hsl(0 0% 95%)" }}>
                          {exp.role}
                        </h3>
                        <p className="text-sm mt-0.5" style={{ color: "hsl(0 0% 55%)" }}>{exp.company}</p>
                      </div>
                    </div>
                    {exp.badge && (
                      <span className="shrink-0 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-accent/15 text-accent">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.points.map((p, j) => (
                      <li key={j} className="text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40" style={{ color: "hsl(0 0% 55%)" }}>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
