'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden py-20">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[100px] dark:bg-indigo-600/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(19,17,32,0.8)_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-4 py-2 text-xs font-bold tracking-[0.2em] uppercase text-slate-600 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-slate-300 shadow-sm"
          >
            <Sparkles className="h-3 w-3 text-blue-500" />
            Software Engineer • AI & Cloud
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl text-6xl font-black tracking-tighter text-slate-950 dark:text-white md:text-8xl lg:text-9xl"
          >
            Smon <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-indigo-500 to-slate-400 dark:from-blue-400 dark:via-indigo-300 dark:to-slate-500 drop-shadow-sm">Kidane</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-10 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-2xl font-medium"
          >
            Engineering the future of <span className="text-slate-900 dark:text-white">AI-driven platforms</span> and <span className="text-slate-900 dark:text-white">resilient cloud infrastructure</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="mt-14 flex flex-wrap justify-center gap-5"
          >
            <Link
              href="#project"
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-slate-900 px-10 py-5 text-lg font-bold text-white transition-all hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 shadow-xl shadow-slate-200 dark:shadow-none active:scale-95"
            >
              <span className="relative z-10">View Projects</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-10 dark:from-blue-400 dark:to-indigo-400" />
            </Link>
            
            <Link
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-10 py-5 text-lg font-bold text-slate-900 backdrop-blur-sm transition-all hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 active:scale-95"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">Scroll</span>
          <div className="relative h-14 w-px overflow-hidden bg-slate-200 dark:bg-white/10">
            <motion.div 
              animate={{ y: [0, 56, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-1/2 w-full bg-blue-500 dark:bg-blue-400"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}


