'use client'

import { motion } from "framer-motion";
import { Code2, Terminal, Database, BrainCircuit, Cloud } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    items: ["Python", "TypeScript", "JavaScript", "Dart", "Java"],
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "Frameworks & Libraries",
    icon: Terminal,
    items: ["React", "Next.js", "Node.js", "Express", "Flask", "Flutter", "Tailwind CSS"],
    color: "from-blue-400 to-indigo-500",
  },
  {
    title: "Databases",
    icon: Database,
    items: ["Firebase", "MongoDB", "PostgreSQL", "MySQL"],
    color: "from-violet-400 to-pink-500",
  },
  {
    title: "AI / ML",
    icon: BrainCircuit,
    items: ["TensorFlow", "LangChain", "RAG", "Hugging Face"],
    color: "from-emerald-400 to-teal-500",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["Azure", "AWS","Docker", "Git", "Firebase Hosting"],
    color: "from-sky-400 to-blue-500",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3">
             <div className="h-px w-8 bg-blue-500" />
             <p className="text-sm font-black uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
               Expertise
             </p>
          </div>
          <h2 className="mt-4 text-5xl font-black tracking-tight text-slate-950 dark:text-white lg:text-6xl">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">Skills</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white/50 p-8 backdrop-blur-xl transition-all hover:border-blue-500/30 hover:shadow-2xl dark:border-white/5 dark:bg-white/5 dark:hover:border-blue-400/20"
            >
              {/* Dynamic Glow Background */}
              <div
                className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${group.color} opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-10`}
              />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center">
                {/* Header Section */}
                <div className="flex items-center gap-6 lg:w-[320px] lg:shrink-0">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${group.color} text-white shadow-lg shadow-blue-500/20`}>
                    <group.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                      {group.title}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                      Technical Stack
                    </p>
                  </div>
                </div>

                {/* Divider (Desktop Only) */}
                <div className="hidden h-16 w-px bg-slate-200 dark:bg-white/10 lg:block" />

                {/* Items Section */}
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-blue-500/50 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-blue-400/50 dark:hover:text-blue-400"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}