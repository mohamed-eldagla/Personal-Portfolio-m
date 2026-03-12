import AnimatedSection from "./AnimatedSection";
import { Trophy, Award, Medal } from "lucide-react";

const awards = [
  { icon: Award, title: "Full MSc Fellowship", org: "German International University", year: "2025", desc: "Full fellowship for Master's in Data Science based on academic excellence." },
  { icon: Trophy, title: "Rank 1/120 – Final Semester", org: "E-JUST", year: "2025", desc: "4.00 GPA, featured in university newsletter. 70% merit-based scholarship." },
  { icon: Medal, title: "SAS Curiosity Cup – Top 15", org: "Global Competition", year: "2024", desc: "Top 15 out of 107 global participants in SAS's data science competition." },
  
  { icon: Trophy, title: "IEEE APPX Hackathon – Top 10", org: "Zewail City", year: "2020", desc: "Top 10 out of 700+ participants in IoT data science hackathon." },
];

const AwardsSection = () => (
  <section id="awards" className="py-32 px-6 hero-bg relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]" 
      style={{ background: "hsl(260 100% 60%)" }} />
    
    <div className="max-w-6xl mx-auto relative z-10">
      <AnimatedSection>
        <p className="text-sm tracking-[0.2em] uppercase font-medium mb-4" style={{ color: "hsl(215 80% 70%)" }}>Awards & Competitions</p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight" style={{ color: "hsl(0 0% 100%)" }}>
          Recognition
          <br />
          <span className="text-gradient">earned.</span>
        </h2>
      </AnimatedSection>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {awards.map((a, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="glass-card rounded-2xl p-7 h-full group hover:bg-white/[0.06] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl" style={{ background: "hsl(215 100% 50% / 0.1)" }}>
                  <a.icon size={18} className="text-accent" />
                </div>
                <span className="text-xs font-medium" style={{ color: "hsl(0 0% 50%)" }}>{a.year}</span>
              </div>
              <h3 className="text-base font-semibold group-hover:text-accent transition-colors" style={{ color: "hsl(0 0% 95%)" }}>{a.title}</h3>
              <p className="text-xs mt-1" style={{ color: "hsl(0 0% 50%)" }}>{a.org}</p>
              <p className="text-sm mt-3 leading-relaxed" style={{ color: "hsl(0 0% 55%)" }}>{a.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AwardsSection;
