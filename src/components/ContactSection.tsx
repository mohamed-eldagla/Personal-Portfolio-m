import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-32 px-6 relative overflow-hidden">
    <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
    <div className="max-w-4xl mx-auto text-center relative">
      <AnimatedSection>
        <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium mb-4">
          Get in Touch
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
          Let's build something
          <br />
          <span className="text-gradient">extraordinary.</span>
        </h2>
        <p className="mt-6 text-base max-w-md mx-auto leading-relaxed text-muted-foreground">
          Open to research collaborations, AI engineering roles, and exciting projects.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:meldagla3@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-accent/25"
          >
            <Mail size={16} />
            Email Me
          </a>
          <a
            href="tel:+201016448773"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-accent/30 transition-all"
          >
            <Phone size={16} />
            +20 101 644 8773
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          {[
            { icon: Github, href: "https://github.com/mohamed-eldagla" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/mohamed-eldagla-15280419a/" },
          ].map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-secondary text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all">
              <Icon size={20} />
            </a>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <div className="section-divider mt-20 mb-6" />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mohamed Eldagla. All rights reserved.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default ContactSection;
