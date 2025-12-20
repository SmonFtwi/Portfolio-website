import Image from "next/image";

const projects = [
  {
    name: "Study Mate AI",
    date: "Dec 2025",
    description:
      "AI-powered study assistant using Next.js, Express.js, and MongoDB Atlas Vector Search. Implemented RAG to process uploaded documents (PDF, DOCX, TXT) and generate summaries, flashcards, and contextual answers. Integrated Gemini API for semantic embeddings and document parsing to power intelligent retrieval. Designed scalable APIs and an interactive UI for seamless project creation, file uploads, and AI-driven study assistance.",
    tools: "Next.js · Express.js · MongoDB Atlas Vector Search · Gemini",
    link: "https://github.com/SmonFtwi/studyMateAI",
    image: "/studymageDash.png",
  },
  {
    name: "Smart ATS System",
    date: "Jan 2024",
    description:
      "AI-driven resume analyzer comparing candidate profiles with job descriptions, returning match scores and tailored feedback.",
    tools: "Streamlit · Gemini · PyPDF2",
    link: "https://github.com/SmonFtwi/Resume-ATSS-system",
    image: "/ats.png",
  },
  {
    name: "Movie Exploring App",
    date: "Nov 2023",
    description:
      "Interface for exploring the MNDB catalog by genre and popularity with curated watchlists.",
    tools: "React · Tailwind CSS · Vite",
    link: "https://github.com/SmonFtwi/movie-app",
    image: "/movieApp.png",
  },
  {
    name: "AI Text Summarizer",
    date: "Dec 2023",
    description:
      "Pegasus-based summarizer trained on Samsung chat data to produce concise conversation recaps.",
    tools: "PyTorch · Streamlit · Transformers",
    link: "https://github.com/SmonFtwi/TextSummarizer-pegasus-model",
    image: "/chatsum.png",
  },
  {
    name: "SDN-Based Network Automation",
    date: "May 2023",
    description:
      "Automated SD-WAN provisioning with VLAN, OSPF, and IPsec configurations for enterprise rollouts.",
    tools: "GNS3 · SD-WAN · IPSec",
    link: "https://docs.google.com/document/d/1MaIAKcjev5WY3DqXKLQSInHk1U93NQWu/edit?usp=sharing&ouid=101985642419000102961&rtpof=true&sd=true",
    image: "/Picture1.png",
  },
];

export default function ProjectsSection() {
  return (
    <section id="project" className="w-full py-16 animate-fadeIn">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-300">
            Projects
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 shadow-[0_35px_65px_-45px_rgba(15,23,42,1)] transition hover:-translate-y-1.5 hover:border-purple-400/60 dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <p className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900">
                  {project.date}
                </p>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="mt-3 flex-1 text-base text-slate-600 dark:text-slate-200">
                  {project.description}
                </p>
                <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                  {project.tools}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-300"
                >
                  View details →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
