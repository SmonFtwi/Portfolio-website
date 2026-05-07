'use client'

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Fujairah Research Center",
    role: "Full Stack Developer",
    dates: "Mar 2024 – Apr 2026",
    description: "Lead delivery of data-driven platforms using Next.js, Express, and MySQL. Partner with researchers to scope features, manage CI/CD, and deploy across Azure and Vercel.",
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
    <section id="about" className="w-full py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
            About
          </p>
          <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">Professional Profile</h2>
          <p className="mt-8 text-xl leading-relaxed text-slate-600 dark:text-slate-400">
            Experienced software engineer specializing in AI, Large Language Models (LLMs), vector databases, and RAG systems. 
            Focused on implementing high-performance software that integrates intelligence into real-world applications across full-stack and cloud environments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
            Journey
          </p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Experience</h3>
        </motion.div>

        <div className="mt-16 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative grid grid-cols-1 gap-4 md:grid-cols-[200px_1fr]"
            >
              <div className="text-sm font-medium text-slate-400 dark:text-slate-500">
                {exp.dates}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-x-3">
                  <h4 className="text-2xl font-semibold text-slate-900 dark:text-white transition-colors group-hover:text-slate-500 dark:group-hover:text-slate-300">
                    {exp.company}
                  </h4>
                  <span className="hidden h-px w-8 bg-slate-200 dark:bg-slate-800 md:block" />
                  <span className="text-lg text-slate-600 dark:text-slate-400 font-medium">{exp.role}</span>
                </div>
                <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


