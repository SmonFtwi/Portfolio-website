'use client'

import { motion } from "framer-motion";
import { Trophy, Star, Award } from "lucide-react";

const honors = [
  {
    title: "Huawei ICT Global Final",
    award: "1st Prize",
    date: "2023",
    summary: "Won 1st place in the Network Track globally among 120,000+ students.",
    icon: Trophy,
    color: "#f59e0b", // Amber
  },
  {
    title: "Huawei ICT Regional Final",
    award: "3rd Prize",
    date: "2022",
    summary: "Placed 3rd across the Middle East in Datacom, AI, and Cloud competencies.",
    icon: Award,
    color: "#3b82f6", // Blue
  },
  {
    title: "National Scholarship",
    award: "Excellence Award",
    date: "2020-2023",
    summary: "Awarded full scholarship for consistent academic performance and leadership.",
    icon: Star,
    color: "#8b5cf6", // Violet
  },
];

export default function HonorsSection() {
  return (
    <section id="honors" className="w-full py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-slate-400" />
            <p className="text-sm font-black uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
              Recognition
            </p>
          </div>
          <h2 className="text-4xl font-black text-slate-950 dark:text-white md:text-5xl">Honors & Awards</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {honors.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-500 hover:border-slate-300 hover:shadow-xl dark:border-white/5 dark:bg-white/5 dark:hover:border-white/10 dark:hover:bg-white/8 sm:p-8"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
                {/* Icon Column */}
                <div 
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                >
                  <item.icon 
                    className="h-8 w-8"
                    style={{ color: item.color }}
                  />
                </div>

                {/* Content Column */}
                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                        {item.date}
                      </span>
                      <div className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                      <span 
                        className="text-xs font-black uppercase tracking-[0.2em]"
                        style={{ color: item.color }}
                      >
                        {item.award}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                    {item.title}
                  </h3>
                  
                  <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Decorative background element */}
              <div 
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-[60px] opacity-0 transition-opacity duration-700 group-hover:opacity-20"
                style={{ background: item.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}