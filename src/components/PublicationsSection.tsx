import AnimatedSection from "./AnimatedSection";
import { FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Blockchain-Integrated Multi-Modal LSTM-CNN Fusion for High-Precision Epileptic Seizure Detection from EEG Signals",
    journal: "Knowledge-Based Systems (Q1, IF: 8.8)",
    year: "2025",
    status: "Published",
    link: "https://doi.org/10.1016/j.knosys.2025.113703",
  },
  {
    title: "EEG Spectrogram Augmentation Using Transformer and Quantum-Inspired Generative Models for Epilepsy Classification",
    journal: "JAC-ECC 2025",
    year: "2025",
    status: "Published",
    link: "https://ieeexplore.ieee.org/document/11417557/",
  },
  {
    title: "Multilingual Lightweight LLM for Social Event Discovery: Knowledge Distillation from Jais-13B & TunBERT to TinyLLaMA",
    journal: "Under Preparation",
    year: "2025",
    status: "In Progress",
  },
];

const statusColors: Record<string, string> = {
  Published: "bg-accent/15 text-accent",
  Accepted: "bg-emerald-500/15 text-emerald-600",
  "In Progress": "bg-amber-500/15 text-amber-600",
};

const PublicationsSection = () => (
  <section id="publications" className="py-32 px-6 relative">
    <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
    <div className="max-w-6xl mx-auto relative">
      <AnimatedSection>
        <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium mb-4">Publications</p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
          Research
          <br />
          <span className="text-muted-foreground">contributions.</span>
        </h2>
      </AnimatedSection>

      <div className="mt-16 space-y-5">
        {publications.map((pub, i) => (
          <AnimatedSection key={i} delay={i * 0.12}>
            <div className="glass-card-light rounded-2xl p-8 card-hover group">
              <div className="flex items-start gap-5">
                <div className="shrink-0 p-3 rounded-xl bg-secondary group-hover:bg-accent/10 transition-colors">
                  <FileText size={20} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-foreground leading-snug group-hover:text-accent transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {pub.journal} · {pub.year}
                  </p>
                  <div className="mt-3 flex items-center gap-3 flex-wrap">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusColors[pub.status] ?? "bg-secondary text-secondary-foreground"}`}>
                      {pub.status}
                    </span>
                    {pub.link && (
                      <a href={pub.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-accent hover:underline font-medium">
                        View Paper <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PublicationsSection;
