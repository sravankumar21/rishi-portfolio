import { Hero } from "@/components/home/Hero";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ToolsSection } from "@/components/tools/ToolsSection";
import { EducationSection } from "@/components/education/EducationSection";
import { LanguagesSection } from "@/components/languages/LanguagesSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <ExperienceSection />
      <SkillsSection />
      <ToolsSection />
      <EducationSection />
      <LanguagesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
