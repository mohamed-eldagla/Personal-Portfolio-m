import AnimatedSection from "./AnimatedSection";
import { GraduationCap, Briefcase, BookOpen, Sparkles, Globe, Heart, Users } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "3.8", label: "GPA (MSc)", accent: true },
  { icon: BookOpen, value: "Q1", label: "Published Journal", accent: false },
  { icon: Briefcase, value: "5+", label: "Internships", accent: false },
  { icon: Sparkles, value: "1st", label: "Rank in Final Semester", accent: true },
];

const skills = [
  { category: "LLMs & NLP", items: ["BERT", "RAG", "LangChain", "Knowledge Distillation", "Multilingual NLP", "Arabic NLP", "Lightweight LLMs"] },
  { category: "Data Engineering", items: ["Python", "SQL", "Spark", "Kafka", "MongoDB", "Cassandra", "AstraDB", "Power BI"] },
  { category: "AI/ML Frameworks", items: ["TensorFlow", "PyTorch", "scikit-learn", "OpenCV"] },
  { category: "Cloud & DevOps", items: ["Git", "Docker", "VS Code", "Jupyter", "SAS Studio"] },
  { category: "Programming", items: ["Python", "C++", "JavaScript", "SQL", "LaTeX"] },
];

const languages = [
  { name: "Arabic", level: "Native", pct: 100 },
  { name: "English", level: "Fluent (C1)", pct: 90 },
  { name: "German", level: "Beginner (A1)", pct: 20 },
];

const AboutSection = () => (
  <section id="about" className="py-32 px-6 relative">
    <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
    <div className="max-w-6xl mx-auto relative">
      <AnimatedSection>
        <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium mb-4">About</p>
        <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight italic">
          "The people who are crazy enough to think they can change the world are the ones who do."
        </blockquote>
        <p className="text-sm text-muted-foreground mt-3 font-medium">— Steve Jobs</p>
        <p className="text-base sm:text-lg text-accent font-semibold mt-6">
          AI/ML Engineer & Researcher | Turning data into intelligent, real-world solutions.
        </p>
      </AnimatedSection>

      {/* Narrative Story */}
      <AnimatedSection className="mt-12">
        <div className="glass-card-light rounded-2xl p-8 sm:p-10 space-y-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="inline-flex p-2.5 rounded-xl bg-accent/10">
              <Heart size={18} className="text-accent" />
            </div>
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-accent">My Story</span>
          </div>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            As a <span className="font-semibold text-foreground">first-generation</span> university graduate from Egypt,
            my journey has been shaped by a determination to turn constraints into opportunities. I earned my BSc in Computer Science
            (AI & Data Science) from the <span className="font-semibold text-foreground">Egypt-Japan University of Science and Technology</span>,
            an institution that combines Japanese research rigor with Egyptian innovation. I graduated in the top 10% of my class and ranked 1st out of 120 students in my final semester.
          </p>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            I am currently pursuing a full-fellowship <span className="font-semibold text-foreground">MSc in Data Science at the German International University</span>,
            building on the interdisciplinary foundation developed during my undergraduate studies. Along the way, I have served as an{" "}
            <span className="font-semibold text-foreground">ICT Specialist at the United Nations Climate Change Conference 2022 (COP27)</span>,
            contributed to AI-related projects supporting the <span className="font-semibold text-foreground">Egyptian Cabinet</span>,
            and conducted NLP research in collaboration with <span className="font-semibold text-foreground">Université Paris-Est Créteil</span>.
          </p>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            Beyond research and engineering, I am a <span className="font-semibold text-foreground">Certified Trainer of Trainers (TOT)</span> from the
            Egyptian Ministry of Planning and International Cooperation and a graduate of the{" "}
            <span className="font-semibold text-foreground">Strategic and National Security Studies program at the Nasser Military Academy</span>.
            These experiences reinforced my belief that meaningful impact emerges at the intersection of technology, leadership, and public service —
            an intersection where I aim to build and contribute.
          </p>
        </div>
      </AnimatedSection>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="glass-card-light rounded-2xl p-6 card-hover group text-center">
              <div className="inline-flex p-3 rounded-xl bg-secondary mb-4 group-hover:bg-accent/10 transition-colors">
                <s.icon className="text-accent" size={22} />
              </div>
              <p className="text-3xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1 font-medium">{s.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Languages */}
      <AnimatedSection className="mt-16">
        <div className="flex items-center gap-3 mb-6">
          <Globe size={20} className="text-accent" />
          <h3 className="text-2xl font-semibold text-foreground">Languages</h3>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {languages.map((lang, i) => (
            <AnimatedSection key={lang.name} delay={i * 0.08}>
              <div className="glass-card-light rounded-2xl p-6 card-hover">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-foreground">{lang.name}</p>
                  <span className="text-xs font-medium text-muted-foreground">{lang.level}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full rounded-full bg-accent transition-all duration-700"
                    style={{ width: `${lang.pct}%` }}
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      {/* Technical Arsenal */}
      <AnimatedSection className="mt-16">
        <h3 className="text-2xl font-semibold text-foreground mb-8">Technical Arsenal</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="glass-card-light rounded-2xl p-6 card-hover h-full">
                <p className="text-sm font-semibold text-foreground mb-3">{s.category}</p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
