'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";


import { projects, Project } from "@/lib/projects-data";
import { ArrowRight } from "lucide-react";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group relative flex flex-col gap-8 md:flex-row md:items-center md:gap-16 ${
        isEven ? "" : "md:flex-row-reverse"
      }`}
    >
      {/* Image Container */}
      <div className="relative w-full md:w-[55%] shrink-0">
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-slate-100 dark:bg-white/5 shadow-2xl transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.1]"
          />
          
          {/* Refined Glass Overlay */}
          <div className="absolute inset-0 bg-slate-950/0 backdrop-blur-0 transition-all duration-500 group-hover:bg-slate-950/40 group-hover:backdrop-blur-[2px]" />

          {/* Hover Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-slate-900 shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Explore Project <ExternalLink className="h-4 w-4" />
            </Link>
          </div>

          {/* Accent Glow */}
          <div
            className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full blur-[80px] opacity-0 transition-opacity duration-700 group-hover:opacity-20"
            style={{ background: project.accent }}
          />
        </div>
      </div>

      {/* Content */}
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        className="flex flex-col gap-5 md:flex-1"
      >
        <motion.div variants={contentVariants} className="flex items-center gap-4">
          <span
            className="font-mono text-[12px] font-black tracking-[0.3em] uppercase"
            style={{ color: project.accent }}
          >
            {project.index}
          </span>
          <div className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
          <span className="font-mono text-[12px] text-slate-400 dark:text-slate-500 tracking-widest uppercase">
            {project.date}
          </span>
        </motion.div>

        <motion.h3 variants={contentVariants} className="text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white lg:text-5xl">
          {project.name}
        </motion.h3>

        <motion.p variants={contentVariants} className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
          {project.description}
        </motion.p>

        <motion.div variants={contentVariants} className="flex flex-wrap gap-3 mt-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-slate-200 bg-white/50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-500 transition-all hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-white/20"
            >
              {tool}
            </span>
          ))}
        </motion.div>

        <motion.div variants={contentVariants} className="mt-4">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest transition-all"
            style={{ color: project.accent }}
          >
            <span className="relative">
              Case Study
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-current transition-all duration-300 group-hover/link:w-full" />
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>
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