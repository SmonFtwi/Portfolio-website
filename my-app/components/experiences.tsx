const experiences = [
  {
    company: "Fujairah Research Center",
    role: "Full Stack Developer",
    dates: "Mar 2024 – Present",
    description:
      "Lead delivery of data-driven platforms using Next.js, Express, and MySQL. Partner with researchers to scope features, manage CI/CD, and deploy across Azure and Vercel.",
  },
  {
    company: "Fujairah Aviation Academy",
    role: "IT Support Technician Intern",
    dates: "Sep 2023 – Dec 2023",
    description:
      "Automated lab VM provisioning, hardened network infrastructure, and provided frontline support for faculty and cadets.",
  },
  {
    company: "Huawei",
    role: "Cloud Computing Intern",
    dates: "Jul 2023 – Sep 2023",
    description:
      "Optimized cloud resource usage, improved monitoring dashboards, and contributed to internal automation tooling for infrastructure teams.",
  },
  {
    company: "Higher Colleges of Technology",
    role: "Peer Tutor & Mentor",
    dates: "Jan 2020 – Jun 2023",
    description:
      "Supported programming, networking, and cybersecurity cohorts while mentoring teams on project delivery and presentation.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="about" className="w-full py-16 animate-fadeIn">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-300">Profile</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
            Engineering dependable systems that remain easy to operate.
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Full-stack engineer with a foundation in networking and AI experimentation. I translate research ideas into
            production experiences, document as I go, and keep delivery grounded in measurable outcomes.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-300">
            Experience
          </p>
          <div className="mt-6 space-y-6 border-l border-slate-200/70 pl-6 dark:border-white/10">
            {experiences.map((exp) => (
              <div key={exp.company}>
                <div className="flex flex-wrap items-baseline gap-2">
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">{exp.company}</p>
                  <span className="text-sm text-slate-500 dark:text-slate-300">• {exp.role}</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{exp.dates}</p>
                <p className="mt-2 text-base text-slate-600 dark:text-slate-200">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
