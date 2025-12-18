const certifications = [
  {
    title: "Deep Learning Specialization – DeepLearning.AI (Coursera)",
    year: "2023",
  },
  {
    title: "TensorFlow Developer Specialization – DeepLearning.AI (Coursera)",
    year: "2023",
  },
  {
    title: "Artificial Intelligence Bootcamp – Samsung Innovation Campus",
    year: "2022",
  },
  {
    title: "PMI Project Management – Project Management Institute #3167",
    year: "2021",
  },
  {
    title: "Google Data Analytics Professional Certificate – Coursera",
    year: "2021",
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials – Cisco",
    year: "2021",
  },
  {
    title: "CCNA: Enterprise Networking, Security, and Automation – Cisco",
    year: "2021",
  },
  {
    title: "CCNA: Introduction to Networking – Cisco",
    year: "2021",
  },
  {
    title: "System Analysis and Design – IIBA",
    year: "2021",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="w-full py-16 animate-fadeIn">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-300">
            Certifications
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
            Continuous learning across AI, networking, and delivery.
          </h2>
        </div>

        <div className="space-y-6 border-l border-slate-200/70 pl-6 dark:border-white/10">
          {certifications.map((item) => (
            <div key={item.title} className="relative">
              <span className="absolute -left-[13px] top-1 flex h-3 w-3 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-purple-500 to-blue-500 shadow dark:border-slate-900" />
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                <span className="text-sm text-slate-500 dark:text-slate-400">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
