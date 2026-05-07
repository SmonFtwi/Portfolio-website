'use client'

import { motion } from "framer-motion";
import { Code, Layout, Database, Cpu, Cloud } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Languages",
    date: "Core Foundation",
    content: "Python, TypeScript, JavaScript, Dart, Java",
    category: "Languages",
    icon: Code,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Frameworks",
    date: "Web & Mobile",
    content: "React, Next.js, Node.js, Express, Flask, Flutter, Tailwind CSS",
    category: "Frameworks",
    icon: Layout,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Databases",
    date: "Data Persistence",
    content: "Firebase, MongoDB, PostgreSQL, MySQL",
    category: "Databases",
    icon: Database,
    relatedIds: [2, 5],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 4,
    title: "AI / ML",
    date: "Advanced Tech",
    content: "TensorFlow, LangChain, RAG, Hugging Face",
    category: "AI / ML",
    icon: Cpu,
    relatedIds: [2, 5],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "Cloud",
    date: "Infrastructure",
    content: "Azure, AWS, Docker, Git, Firebase Hosting",
    category: "Cloud",
    icon: Cloud,
    relatedIds: [3, 4],
    status: "completed" as const,
    energy: 90,
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Skills</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Interactive map of my technical expertise and tech stack. Click on nodes to explore.
          </p>
        </motion.div>

        <div >
          <RadialOrbitalTimeline timelineData={timelineData} />
        </div>
      </div>
    </section>
  );
}