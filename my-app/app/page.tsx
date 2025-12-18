import ContactSection from "@/components/contact";
import CertificationsSection from "@/components/certifications";
import ExperienceSection from "@/components/experiences";

import HeroSection from "@/components/hero";
import HonorsSection from "@/components/honors";
import ProjectsSection from "@/components/project";
import SkillsSection from "@/components/skills";


export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-32 font-[family-name:var(--font-geist-sans)] sm:px-10">
      <HeroSection />
      <ExperienceSection />
      <HonorsSection />
      <CertificationsSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
