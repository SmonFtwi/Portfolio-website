const honors = [
  {
    title: "Huawei ICT Global Final",
    award: "1st Prize",
    date: "May 2023",
    summary:
      "International hackathon configuring secure networks end-to-end; led architecture for the champion UAE delegation.",
  },
  {
    title: "Huawei ICT Regional Final (Middle East)",
    award: "3rd Prize",
    date: "Dec 2022",
    summary:
      "Delivered hardened network topologies for regional enterprise scenarios during Huawei's ME hackathon.",
  },
  {
    title: "Huawei ICT UAE National Final",
    award: "2nd Prize",
    date: "Dec 2022",
    summary: "Built secure SDN environments in the national qualifier for the global Huawei competition.",
  },
  {
    title: "Higher Colleges of Technology",
    award: "Full Scholarship Award",
    date: "Academic Excellence",
    summary: "Recognized for academic performance and leadership across campus initiatives.",
  },
];

export default function HonorsSection() {
  return (
    <section id="honors" className="w-full py-16 animate-fadeIn">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-300">
            Honors & Awards
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
            Recognition shaping how I build and lead.
          </h2>
        </div>

        <div className="space-y-6 border-l border-slate-200/70 pl-6 dark:border-white/10">
          {honors.map((item) => (
            <div key={item.title} className="relative">
              <span className="absolute -left-[13px] top-1 flex h-3 w-3 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-purple-500 to-blue-500 shadow dark:border-slate-900" />
              <div className="flex flex-wrap items-baseline gap-2">
                <p className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</p>
                <span className="text-sm text-purple-600 dark:text-purple-300">{item.award}</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.date}</p>
              <p className="mt-2 text-base text-slate-600 dark:text-slate-200">{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
