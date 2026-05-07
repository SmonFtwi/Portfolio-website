'use client'

import { motion } from "framer-motion";

const honors = [
  {
    title: "Huawei ICT Global Final",
    award: "1st Prize",
    date: "2023",
    summary: "Won 1st place in the Network Track globally among 120,000+ students.",
  },
  {
    title: "Huawei ICT Regional Final",
    award: "3rd Prize",
    date: "2022",
    summary: "Placed 3rd across the Middle East in Datacom, AI, and Cloud competencies.",
  },
  {
    title: "National Scholarship",
    award: "Excellence Award",
    date: "2020-2023",
    summary: "Awarded full scholarship for consistent academic performance and leadership.",
  },
];

export default function HonorsSection() {
  return (
    <section id="honors" className="w-full py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
            Recognition
          </p>
          <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">Honors</h2>
        </motion.div>

        <div className="mt-16 flex flex-col gap-4">
          {honors.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border border-slate-100 bg-white px-6 py-5 shadow-sm transition-all hover:bg-slate-50 dark:border-white/5 dark:bg-white/5 dark:hover:bg-white/10 sm:px-8 sm:py-6"
            >
              {/* Mobile layout */}
              <div className="flex flex-col gap-2 sm:hidden">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
                    {item.award}
                  </span>
                  <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.summary}
                </p>
              </div>

              {/* Desktop layout */}
              <div className="hidden sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3">
                <span className="w-20 shrink-0 text-sm font-medium text-slate-400 dark:text-slate-500">
                  {item.date}
                </span>

                <div className="h-8 w-px bg-slate-200 dark:bg-white/10 shrink-0" />

                <span className="w-28 shrink-0 text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
                  {item.award}
                </span>

                <div className="h-8 w-px bg-slate-200 dark:bg-white/10 shrink-0" />

                <div className="flex flex-1 flex-wrap items-baseline gap-x-3 gap-y-1 min-w-0">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white shrink-0">
                    {item.title}
                  </h3>
                  <span className="text-slate-300 dark:text-white/20">—</span>
                  <p className="text-sm text-slate-500 dark:text-slate-400 min-w-0">
                    {item.summary}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}