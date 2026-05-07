'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";

import { projects, Project } from "@/lib/projects-data";
import { ArrowRight } from "lucide-react";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group relative flex flex-col gap-8 md:flex-row md:items-center md:gap-16 ${
        isEven ? "" : "md:flex-row-reverse"
      }`}
    >
      {/* Image */}
      <div className="relative w-full md:w-[55%] shrink-0">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 dark:bg-white/5">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-slate-900/0 transition-all duration-500 group-hover:bg-slate-900/50" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-400 group-hover:opacity-100">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-xl transition-transform duration-300 hover:scale-105"
            >
              View Project <ExternalLink className="h-4 w-4" />
            </Link>
          </div>

          <div
            className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-30"
            style={{ background: project.accent }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 md:flex-1">
        <div className="flex items-center gap-3">
          <span
            className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase"
            style={{ color: project.accent }}
          >
            {project.index}
          </span>
          <div className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
          <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500 tracking-widest uppercase">
            {project.date}
          </span>
        </div>

        <h3 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white">
          {project.name}
        </h3>

        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-1">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
            >
              {tool}
            </span>
          ))}
        </div>

        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold transition-colors"
          style={{ color: project.accent }}
        >
          <span className="underline underline-offset-4 decoration-dotted group-hover/link:decoration-solid">
            View Project
          </span>
          <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection({ limit }: { limit?: number }) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="project" className="w-full py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
            Personal 
          </p>
          <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">Projects</h2>
        </motion.div>

        <div className="flex flex-col gap-24">
          {displayedProjects.map((project, i) => (
            <div key={project.name}>
              <ProjectRow project={project} index={i} />
              {(i < displayedProjects.length - 1 || (limit && projects.length > limit)) && (
                <div className="mt-24 h-px w-full bg-slate-100 dark:bg-white/5" />
              )}
            </div>
          ))}
        </div>

        {limit && projects.length > limit && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 flex justify-center"
          >
            <Link
              href="/projects"
              className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-900 transition-all hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              View More Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}