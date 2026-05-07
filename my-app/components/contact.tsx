'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const links = [
  {
    icon: Mail,
    href: "mailto:smonftwi1@gmail.com",
    label: "Email",
    handle: "smonftwi1@gmail.com",
    cta: "Send a message",
    accent: "#6ee7b7",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/smon-ftwi-59b44720a/",
    label: "LinkedIn",
    handle: "smon-ftwi",
    cta: "Connect with me",
    accent: "#93c5fd",
  },
  {
    icon: Github,
    href: "https://github.com/SmonFtwi",
    label: "GitHub",
    handle: "SmonFtwi",
    cta: "See my code",
    accent: "#c4b5fd",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-20"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
            Get in Touch
          </p>
          <h2 className="mt-4 text-5xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white md:text-7xl">
            Let&apos;s Build <br />
            <span className="relative inline-block">
              Something
              <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-slate-200 dark:bg-white/10" />
            </span>{" "}
            <span className="italic font-extrabold">Extraordinary</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Open for full-time roles in Dubai, strategic partnerships, and deep-tech collaborations across AI, full-stack, and mobile.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="flex flex-col gap-4">
          {links.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 rounded-2xl border border-slate-100 bg-white px-8 py-6 transition-all duration-300 hover:border-slate-300 hover:shadow-lg dark:border-white/5 dark:bg-white/5 dark:hover:border-white/15 dark:hover:bg-white/8"
              >
                {/* Left: icon + info */}
                <div className="flex items-center gap-6">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${link.accent}18`, border: `1px solid ${link.accent}30` }}
                  >
                    <link.icon
                      className="h-5 w-5 transition-colors duration-300"
                      style={{ color: link.accent }}
                    />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                      {link.label}
                    </span>
                    <span className="mt-0.5 text-base font-semibold text-slate-900 dark:text-white">
                      {link.handle}
                    </span>
                  </div>
                </div>

                {/* Right: cta + arrow */}
                <div className="flex items-center gap-3 shrink-0">
                  <span
                    className="hidden text-sm font-medium opacity-0 transition-all duration-300 group-hover:opacity-100 sm:block"
                    style={{ color: link.accent }}
                  >
                    {link.cta}
                  </span>
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${link.accent}18` }}
                  >
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: link.accent }}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 flex items-center justify-between border-t border-slate-100 pt-8 dark:border-white/5"
        >
          <span className="font-mono text-xs text-slate-400 dark:text-slate-600 tracking-widest uppercase">
            Based in Dubai, UAE
          </span>
          <span className="font-mono text-xs text-slate-400 dark:text-slate-600 tracking-widest uppercase">
            Available for hire
          </span>
        </motion.div>

      </div>
    </section>
  );
}