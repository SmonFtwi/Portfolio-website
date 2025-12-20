import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section id="home" className="w-full mt-24 animate-fadeIn">
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-8 text-start md:max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-300">
            Software Engineer · AI & Cloud
          </p>
          <div>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Smon Kidane
            </h1>
            <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
              Product-focused engineer building AI-enabled platforms and
              resilient infrastructure for modern applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#project"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-slate-900"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:border-white/40 dark:text-white"
            >
              Let&apos;s connect
              <Send className="h-4 w-4" />
            </Link>
            <Link
              href="https://drive.google.com/file/d/1ucHkbbigGvML_GIJ3gDdRXTkA2aIDrnG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 dark:border-white/30 dark:text-white"
            >
              Résumé
              <FileText className="h-4 w-4" />
            </Link>
            <div className="flex items-center gap-3 text-slate-500 dark:text-slate-300">
              <Link
                href="https://github.com/SmonFtwi"
                target="_blank"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                <FaGithub className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/smon-ftwi-59b44720a/"
                target="_blank"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                <FaLinkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative h-60 w-60 overflow-hidden rounded-full border border-slate-200 dark:border-white/10">
            <Image
              src="/profile1.jpeg"
              alt="Smon Kidane portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
