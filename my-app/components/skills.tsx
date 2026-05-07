'use client'

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Dart", "Java"],
    color: "from-amber-400 to-orange-500",
    layout: "horizontal",
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Next.js", "Node.js", "Express", "Flask", "Flutter", "Tailwind CSS"],
    color: "from-blue-400 to-indigo-500",
    layout: "horizontal",
  },
  {
    title: "Databases",
    items: ["Firebase", "MongoDB", "PostgreSQL", "MySQL"],
    color: "from-violet-400 to-pink-500",
    layout: "horizontal",
  },
  {
    title: "AI / ML",
    items: ["TensorFlow", "LangChain", "RAG", "Hugging Face"],
    color: "from-emerald-400 to-teal-500",
    layout: "horizontal",
  },
  {
    title: "Cloud & DevOps",
    items: ["Azure", "AWS","Docker", "Git", "Firebase Hosting"],
    color: "from-green-400 to-emerald-500",
    layout: "horizontal",
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
          className="mb-16"
        >
          <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">Skills</h2>
        </motion.div>

        {/* Bottom horizontal rows */}
        <div className="flex flex-col gap-6">
          {skillGroups
            .filter((g) => g.layout === "horizontal")
            .map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-8 py-6 transition-all hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div
                  className={`absolute top-0 right-0 h-24 w-24 translate-x-12 -translate-y-12 rounded-full bg-gradient-to-br ${group.color} opacity-10 blur-2xl transition-transform group-hover:scale-150`}
                />
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <h3 className="w-36 shrink-0 text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    {group.title}
                  </h3>
                  <div className="h-8 w-px bg-slate-200 dark:bg-white/10 shrink-0" />
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-100 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-100 dark:border-white/5 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
                      >
                        {item}
                      </span>
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