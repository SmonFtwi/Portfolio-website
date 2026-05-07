'use client'

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react';
import { ModeToggle } from "./theme-mode";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#project" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-6 transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/20 bg-white/40 px-6 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/40">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white">
          SMON.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              {link.name}
            </Link>
          ))}
          <div className="h-4 w-px bg-slate-200 dark:bg-white/10" />
          <ModeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-6 right-6 mt-4 rounded-3xl border border-white/20 bg-white/95 p-6 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/95 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-900 dark:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

