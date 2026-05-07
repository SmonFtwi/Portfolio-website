'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Fujairah Research Center",
    role: "Full Stack Developer",
    dates: "Mar 2024 – Apr 2026",
    description: "Lead delivery of data-driven platforms using Next.js, Express, and MySQL. Partner with researchers to scope features, manage CI/CD, and deploy across Azure and Vercel.",
    current: true,
  },
  {
    company: "Fujairah Aviation Academy",
    role: "IT Support Technician Intern",
    dates: "Sep 2023 – Dec 2023",
    description: "Automated lab VM provisioning, hardened network infrastructure, and provided frontline support for faculty and cadets.",
  },
  {
    company: "Huawei",
    role: "Cloud Computing Intern",
    dates: "Jul 2023 – Sep 2023",
    description: "Optimized cloud resource usage, improved monitoring dashboards, and contributed to internal automation tooling for infrastructure teams.",
  },
  {
    company: "Higher Colleges of Technology",
    role: "Peer Tutor & Mentor",
    dates: "Jan 2020 – Jun 2023",
    description: "Supported programming, networking, and cybersecurity cohorts while mentoring teams on project delivery and presentation.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="about" className="relative w-full py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[120px] dark:bg-indigo-900/5" />

      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 flex flex-col items-center gap-16 md:flex-row md:items-start md:justify-between"
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-indigo-500" />
              <p className="text-sm font-black uppercase tracking-[0.4em] text-indigo-500">
                About
              </p>
            </div>
            <h2 className="text-5xl font-black leading-tight tracking-tight text-slate-950 dark:text-white md:text-7xl">
              Building Intelligently.
            </h2>
            <p className="mt-10 text-xl leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
              Experienced software engineer specializing in AI, Large Language Models (LLMs), vector databases, and RAG systems. 
              Focused on implementing high-performance software that integrates intelligence into real-world applications across full-stack and cloud environments.
            </p>
          </div>

          <div className="relative flex-shrink-0 group">
            <div className="relative h-64 w-64 overflow-hidden rounded-3xl border-8 border-white bg-slate-200 shadow-2xl dark:border-white/5 dark:bg-white/5 md:h-72 md:w-72">
              <Image
                src="/profile1.jpeg"
                alt="Smon"
                fill
                className="object-cover grayscale transition-all duration-700 ease-in-out scale-110 group-hover:scale-100 group-hover:grayscale-0"
              />
            </div>
            {/* Decorative rings */}
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 opacity-50 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute -inset-12 -z-20 rounded-[3rem] border border-slate-100 dark:border-white/5 opacity-30 group-hover:scale-110 transition-transform duration-1000" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500">
              <Briefcase className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">
                Professional
              </p>
              <h3 className="text-3xl font-black text-slate-950 dark:text-white">Experience</h3>
            </div>
          </div>
        </motion.div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group relative grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr]"
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-sm font-bold text-slate-400 dark:text-slate-500">
                  {exp.dates}
                </span>
                {exp.current && (
                  <span className="w-fit rounded-full bg-green-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-green-600 dark:bg-green-500/20 dark:text-green-400">
                    Current
                  </span>
                )}
              </div>
              
              <div className="relative pl-0 md:pl-10">
                {/* Vertical timeline line for desktop */}
                <div className="absolute left-0 top-2 hidden h-full w-px bg-slate-200 dark:bg-white/5 md:block" />
                <div className="absolute -left-[5px] top-2 hidden h-[10px] w-[10px] rounded-full border-2 border-indigo-500 bg-white dark:bg-slate-950 md:block" />
                
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-2xl font-black text-slate-950 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                      {exp.company}
                    </h4>
                    <span className="text-lg font-bold text-slate-500 dark:text-slate-400">{exp.role}</span>
                  </div>
                  <p className="max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                    {exp.description}
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



