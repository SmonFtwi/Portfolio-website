'use client'

import { motion } from "framer-motion";
import { Award, Cpu, ShieldCheck, Settings, LineChart, Binary } from "lucide-react";

const certifications = [
  { 
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    year: "2023",
    icon: Cpu,
    color: "from-purple-500 to-indigo-500"
  },
  { 
    title: "TensorFlow Developer Specialization",
    issuer: "DeepLearning.AI",
    year: "2023",
    icon: Binary,
    color: "from-orange-500 to-amber-500"
  },
  { 
    title: "AI Bootcamp",
    issuer: "Samsung Innovation Campus",
    year: "2022",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500"
  },
  { 
    title: "PMI Project Management",
    issuer: "Project Management Institute",
    year: "2021",
    icon: Settings,
    color: "from-emerald-500 to-teal-500"
  },
  { 
    title: "Google Data Analytics",
    issuer: "Google Professional Certificate",
    year: "2021",
    icon: LineChart,
    color: "from-blue-600 to-indigo-600"
  },
  { 
    title: "CCNA: Switching & Routing",
    issuer: "Cisco Certified Network Associate",
    year: "2021",
    icon: ShieldCheck,
    color: "from-slate-600 to-slate-800"
  },
  { 
    title: "CCNA: Security & Automation",
    issuer: "Cisco Certified Network Associate",
    year: "2021",
    icon: ShieldCheck,
    color: "from-slate-700 to-slate-900"
  },
  { 
    title: "CCNA: Introduction to Networking",
    issuer: "Cisco Certified Network Associate",
    year: "2021",
    icon: ShieldCheck,
    color: "from-slate-500 to-slate-700"
  },
  { 
    title: "System Analysis and Design",
    issuer: "IIBA Professional Certification",
    year: "2021",
    icon: Settings,
    color: "from-rose-500 to-pink-500"
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="w-full py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-16"
        >
          <div className="flex items-center gap-3">
             <div className="h-px w-8 bg-blue-500" />
             <p className="text-sm font-black uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
               Validated
             </p>
          </div>
          <h2 className="mt-4 text-5xl font-black tracking-tight text-slate-950 dark:text-white lg:text-6xl">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((item, index) => (
            <motion.div
              key={item.title + item.issuer}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200 bg-white/50 p-8 backdrop-blur-xl transition-all hover:border-blue-500/30 hover:shadow-2xl dark:border-white/5 dark:bg-white/5 dark:hover:border-blue-400/20"
            >
              {/* Dynamic Glow */}
              <div
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${item.color} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-10`}
              />

              <div className="relative">
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg shadow-blue-500/10`}>
                  <item.icon className="h-6 w-6" />
                </div>
                
                <h3 className="mb-2 text-lg font-black leading-snug tracking-tight text-slate-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  {item.issuer}
                </p>
              </div>

              <div className="relative mt-8 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-white/5">
                <span className="text-sm font-black text-slate-900 dark:text-white">
                  {item.year}
                </span>
                <Award className="h-4 w-4 text-slate-300 dark:text-slate-700 transition-colors group-hover:text-blue-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


