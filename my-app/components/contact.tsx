'use client'

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Mail, Linkedin, Github, ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";

const links = [
  {
    icon: Mail,
    href: "mailto:smonftwi1@gmail.com",
    label: "Email",
    handle: "smonftwi1@gmail.com",
    cta: "Send a message",
    accent: "#3b82f6", // Blue
    copyable: true,
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/smon-ftwi-59b44720a/",
    label: "LinkedIn",
    handle: "smon-ftwi",
    cta: "Connect with me",
    accent: "#0ea5e9", // Sky
  },
  {
    icon: Github,
    href: "https://github.com/SmonFtwi",
    label: "GitHub",
    handle: "SmonFtwi",
    cta: "See my code",
    accent: "#6366f1", // Indigo
  },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative w-full py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-900/5" />

      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-blue-500" />
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-blue-500">
              Get in Touch
            </p>
          </div>
          <h2 className="text-5xl font-black leading-[1.1] tracking-tight text-slate-950 dark:text-white md:text-8xl">
            Let&apos;s Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">Something</span>{" "}
            <span className="italic font-serif">Extraordinary</span>
          </h2>
          <p className="mt-10 max-w-xl text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Open for full-time roles in Dubai, strategic partnerships, and deep-tech collaborations across AI, full-stack, and mobile.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-1">
          {links.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            >
              <div className="group relative">
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-6 rounded-3xl border border-slate-200/60 bg-white/50 p-8 transition-all duration-500 hover:border-blue-500/30 hover:bg-white dark:border-white/5 dark:bg-white/5 dark:hover:border-blue-400/30 dark:hover:bg-white/10 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-6">
                    <div
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm"
                      style={{ background: `${link.accent}15`, border: `1px solid ${link.accent}30` }}
                    >
                      <link.icon
                        className="h-7 w-7 transition-colors duration-500"
                        style={{ color: link.accent }}
                      />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                        {link.label}
                      </span>
                      <span className="mt-1 text-lg font-bold text-slate-950 dark:text-white">
                        {link.handle}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span
                      className="hidden text-sm font-bold opacity-0 transition-all duration-500 group-hover:opacity-100 md:block translate-x-4 group-hover:translate-x-0"
                      style={{ color: link.accent }}
                    >
                      {link.cta}
                    </span>
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full transition-all duration-500 group-hover:bg-blue-500 group-hover:text-white bg-slate-100 dark:bg-white/10"
                    >
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>

                {link.copyable && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      copyToClipboard(link.handle);
                    }}
                    className="absolute right-24 top-1/2 -translate-y-1/2 hidden lg:flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 opacity-0 transition-all duration-300 hover:bg-blue-500 hover:text-white group-hover:opacity-100 dark:bg-white/10 dark:hover:bg-blue-400 z-20"
                    title="Copy to clipboard"
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Check className="h-4 w-4" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Copy className="h-4 w-4" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Area */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-32 flex flex-col items-center justify-between gap-6 border-t border-slate-200/60 pt-12 dark:border-white/10 md:flex-row"
        >
          <div className="flex items-center gap-4">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-[0.3em] uppercase">
              Available for new opportunities
            </span>
          </div>
          
          <div className="flex gap-8">
            <span className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-[0.3em] uppercase">
              Dubai, UAE
            </span>
            <span className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-[0.3em] uppercase">
              © {new Date().getFullYear()} Smon Kidane
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}