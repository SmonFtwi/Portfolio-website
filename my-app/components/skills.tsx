const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      " TensorFlow",
      "Flask",
    ],
  },
  {
    title: "Tools & Platforms",
    items: ["Azure", "Docker", "Git", "MongoDB", "MySQL", "PostgreSQL"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 animate-fadeIn">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-slate-200/70 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-10 shadow-sm dark:border-white/10 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
        <div className="flex flex-col gap-3 text-start">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-300">
            Skills
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white"></h2>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="relative rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_15px_45px_-35px_rgba(15,23,42,1)] dark:border-white/10 dark:bg-white/5"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 blur-3xl" />
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-purple-600 dark:text-purple-300">
                {group.title}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-purple-200/70 bg-white/90 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-900/30 dark:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
