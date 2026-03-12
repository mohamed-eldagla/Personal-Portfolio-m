import AnimatedSection from "./AnimatedSection";
import { Users, Shield, Lightbulb, Code, Laptop, GraduationCap } from "lucide-react";

const activities = [
  {
    icon: Shield,
    title: "Be an Ambassador Program – Certified TOT (Batch 4)",
    org: "Ministry of Planning & Economic Development",
    period: "Cairo, Egypt",
    points: [
      "Graduated from the 'Be an Ambassador' program and selected as a Certified Trainer of Trainers (TOT), mentoring youth on leadership, diplomacy, and community development.",
      "Designed and delivered workshops to enhance soft skills, strategic thinking, and civic engagement.",
    ],
  },
  {
    icon: Shield,
    title: "Strategic & National Security Studies – Cohort 98",
    org: "Nasser Military Academy – National Defense College",
    period: "2025 · Cairo, Egypt",
    points: [
      "Completed advanced studies in national defense, strategic planning, and security policy.",
      "Developed analytical and leadership skills applicable to national-level decision-making.",
    ],
  },
  {
    icon: GraduationCap,
    title: "Value Program Graduate",
    org: "National Training Academy (NTA) – Presidency of Egypt",
    period: "Sep 2023 – Present · Cairo",
    points: [
      "Comprehensive training in AI, Computer Science, and leadership affiliated with the Presidency of the Republic.",
      "Program alumni include 10+ ministers and governors; prepares civilians for leadership roles.",
    ],
  },
  {
    icon: Lightbulb,
    title: "Vice President – E-JUST Dragons Club",
    org: "Egypt-Japan University of Science and Technology",
    period: "Mar 2024 – Present",
    points: [
      "Led Egypt's first entrepreneurial club focused on sustainability at E-JUST.",
      "Directed 25 members in transforming graduation projects into startups — evaluating market potential, advising on company formation, and preparing for seed funding.",
    ],
  },
  {
    icon: Code,
    title: "Core Team & CS50x Instructor",
    org: "Google Developer Student Clubs (DSC), E-JUST",
    period: "Oct 2021 – May 2023",
    points: [
      "Instructed CS50x to 100+ students, teaching data structures, algorithms, and problem-solving in C++.",
      "Organized coding sessions and provided ongoing technical mentorship.",
    ],
  },
  {
    icon: Laptop,
    title: "In-Person Session Trainer",
    org: "Udacity – Digital Egypt Cubs Initiative (DECI)",
    period: "Jul – Aug 2023 · Tanta",
    points: [
      "Mentored 40 students aged 12-17 in Python, data structures, and algorithms through weekly 4-hour sessions.",
      "Facilitated 20 coding projects with a 100% completion rate.",
    ],
  },
];

const ExtracurricularSection = () => (
  <section id="activities" className="py-32 px-6 relative">
    <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
    <div className="max-w-6xl mx-auto relative">
      <AnimatedSection>
        <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium mb-4">Leadership & Community</p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
          Beyond the
          <br />
          <span className="text-muted-foreground">classroom.</span>
        </h2>
        <p className="mt-4 text-base text-muted-foreground max-w-2xl leading-relaxed">
          From training rooms in Cairo to hackathons across Egypt, I believe in building people — not just products.
        </p>
      </AnimatedSection>

      <div className="mt-16 grid md:grid-cols-2 gap-5">
        {activities.map((a, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="glass-card-light rounded-2xl p-7 card-hover h-full group">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex p-2.5 rounded-xl bg-secondary group-hover:bg-accent/10 transition-colors">
                  <a.icon size={18} className="text-accent" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">{a.period}</span>
              </div>
              <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                {a.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">{a.org}</p>
              <ul className="mt-4 space-y-2">
                {a.points.map((p, j) => (
                  <li
                    key={j}
                    className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ExtracurricularSection;
