import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileDown } from "lucide-react";
import profileImg from "@/assets/mohamed-profile.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 hero-bg overflow-hidden">
    {/* Ambient glow orbs */}
    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
      style={{ background: "hsl(215 100% 50%)" }} />
    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-[120px]"
      style={{ background: "hsl(260 100% 60%)" }} />

    {/* Subtle dot pattern */}
    <div className="absolute inset-0 dot-pattern opacity-30" />

    <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-8 flex justify-center"
      >
        <div className="relative">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden profile-glow ring-2 ring-white/10">
            <img
              src={profileImg}
              alt="Mohamed Eldagla"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Status dot */}
          <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-sm tracking-[0.3em] uppercase mb-6 font-medium"
        style={{ color: "hsl(215 80% 70%)" }}
      >
        AI & Data Science Engineer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
        style={{ color: "hsl(0 0% 100%)" }}
      >
        Mohamed
        <br />
        <span className="text-gradient">Eldagla</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
        style={{ color: "hsl(0 0% 60%)" }}
      >
        Full-Fellowship MSc Candidate at GIU. Published in Q1 journals.
        Building intelligent systems at the intersection of NLP, data engineering, and AI.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="mt-10 flex items-center justify-center gap-4"
      >
        {[
          { icon: Github, href: "https://github.com/mohamed-eldagla", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/mohamed-eldagla-15280419a/", label: "LinkedIn" },
          { icon: Mail, href: "mailto:meldagla3@gmail.com", label: "Email" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            className="p-3 rounded-xl glass-card transition-all duration-300 hover:scale-110 hover:bg-white/10"
            style={{ color: "hsl(0 0% 60%)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(0 0% 100%)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 60%)")}
            aria-label={label}
          >
            <Icon size={20} />
          </a>
        ))}
        <a
          href="https://drive.google.com/file/d/1Po_AuQZUZ16d1H1_E3WFHybVr-BIccjH/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card transition-all duration-300 hover:scale-105 hover:bg-white/10 text-sm font-medium"
          style={{ color: "hsl(0 0% 80%)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(0 0% 100%)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 80%)")}
        >
          <FileDown size={16} />
          Download CV
        </a>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="inline-block mt-20 animate-bounce"
        style={{ color: "hsl(0 0% 40%)" }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </div>
  </section>
);

export default HeroSection;
