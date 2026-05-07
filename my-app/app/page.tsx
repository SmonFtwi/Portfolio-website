import ContactSection from "@/components/contact";
import CertificationsSection from "@/components/certifications";
import ExperienceSection from "@/components/experiences";

import HeroSection from "@/components/hero";
import HonorsSection from "@/components/honors";
import ProjectsSection from "@/components/project";
import SkillsSection from "@/components/skills";


export default function Home() {
  return (
    <main className="flex w-full flex-col font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      <div className="flex flex-col gap-24 pb-32">
         <ExperienceSection />
        <ProjectsSection limit={3} />
       
        <SkillsSection />
        <HonorsSection />
        <CertificationsSection />
        <ContactSection />
      </div>
    </main>
  );
}

