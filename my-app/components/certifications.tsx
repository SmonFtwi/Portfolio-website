'use client'

import { motion } from "framer-motion";

const certifications = [
  { title: "Deep Learning Specialization – DeepLearning.AI", year: "2023" },
  { title: "TensorFlow Developer Specialization – DeepLearning.AI", year: "2023" },
  { title: "AI Bootcamp – Samsung Innovation Campus", year: "2022" },
  { title: "PMI Project Management – Project Management Institute", year: "2021" },
  { title: "Google Data Analytics Professional Certificate", year: "2021" },
  { title: "CCNA: Switching, Routing, and Wireless Essentials – Cisco", year: "2021" },
  { title: "CCNA: Enterprise Networking, Security, and Automation – Cisco", year: "2021" },
  { title: "CCNA: Introduction to Networking – Cisco", year: "2021" },
  { title: "System Analysis and Design – IIBA", year: "2021" },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="w-full py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
            Validated Skills
          </p>
          <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">Certifications</h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-1">
          {certifications.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white/50 p-6 backdrop-blur-sm dark:border-white/5 dark:bg-white/5"
            >
              <div className="flex items-center gap-4">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-600" />
                <p className="text-lg font-medium text-slate-800 dark:text-slate-300">
                  {item.title}
                </p>
              </div>
              <span className="text-sm font-bold tracking-tight text-slate-400 dark:text-slate-500">
                {item.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


