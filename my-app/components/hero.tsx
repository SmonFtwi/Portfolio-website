'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import VantaBackground from "./vanta-background";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">

      <VantaBackground />
      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-block rounded-full border border-slate-200 bg-white/50 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-slate-500 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
          >
            Software Engineer • AI & Cloud
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl text-6xl font-bold tracking-tight text-slate-900 dark:text-white md:text-8xl lg:text-9xl"
          >
            Smon <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">Kidane</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 max-w-2xl text-xl text-slate-600 dark:text-slate-400 md:text-2xl"
          >
            Engineering the future of AI-driven platforms and resilient cloud infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <Link
              href="#project"
              className="group flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              Projects
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-8 py-4 text-lg font-medium text-slate-900 backdrop-blur-sm transition-all hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              Connect
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-slate-300 to-transparent dark:from-white/20" />
        </div>
      </motion.div>

      {/* Decorative Elements */}

      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-200/20 blur-[120px] dark:bg-slate-900/10" />
      <div className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-[100px] dark:bg-indigo-900/10" />

    </section>
  );
}

