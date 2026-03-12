import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import PublicationsSection from "@/components/PublicationsSection";
import EducationSection from "@/components/EducationSection";
import ExtracurricularSection from "@/components/ExtracurricularSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <main className="bg-background overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <PublicationsSection />
    <EducationSection />
    <ExtracurricularSection />
    <AwardsSection />
    <ContactSection />
  </main>
);

export default Index;
