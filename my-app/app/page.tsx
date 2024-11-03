import ContactSection from "@/components/contact";
import ExperienceSection from "@/components/experiences";

import HeroSection from "@/components/hero";
import ProjectsSection from "@/components/project";
import SkillsSection from "@/components/skills";


export default function Home() {
  return (
    <div className="  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col items-center justify-center">
       <HeroSection/>
       <ExperienceSection/>
       <SkillsSection/>
       <ProjectsSection/>
       <ContactSection/>
       
    </div>
  );
}
