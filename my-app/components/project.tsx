import {  FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      name: "Smart ATS System",
      date: "Jan 2024",
      description:
        "An AI-driven resume analyzer that compares resumes with job descriptions to provide a matching score and tailored recommendations.",
      tools: ["Streamlit", "Gemini", "PyPDF2"],
      image: "/ats.png", // Replace with actual image path
    //   websiteLink: "#", // Add actual link if available
      codeLink: "https://github.com/SmonFtwi/Resume-ATSS-system ", // Add GitHub link
    },
    {
      name: "Movie Exploring App",
      date: "Nov 2023",
      description:
        "An application for exploring movies across various categories from the MNDB database. Discover movies by genre, popularity, and more.",
      tools: ["React js", "Tailwins css", "vite"],
      image: "/movieApp.png", // Replace with actual image path
    //   websiteLink: "#", // Add actual link if available
      codeLink: "https://github.com/SmonFtwi/movie-app", // Add GitHub link
    },
    {
      name: "AI Text Summarizer",
      date: "Dec 2023",
      description:
        "A dialogue summarizer fine-tuned with a Pegasus model using Samsung chat data to provide concise summaries of conversations.",
      tools: ["PyTorch", "Streamlit", "Transformers"],
      image: "/chatsum.png", // Replace with actual image path
    //   websiteLink: "#", // Add actual link if available
      codeLink: "https://github.com/SmonFtwi/TextSummarizer-pegasus-model", // Add GitHub link
    },
  ];

  return (
    <section id="project" className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="rounded-lg shadow-lg border-[0.5px] border-gray-300 dark:border-gray-700 overflow-hidden transition-shadow duration-300">
            <div className="relative w-full h-[200px]">
              {/* Project Image with Consistent Size */}
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
              <p className="text-sm mb-4">{project.date}</p>
              <p className="mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm border rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {/* Website Link */}
                {/* {project.websiteLink && (
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Website
                  </a>
                )} */}
                {/* GitHub Link */}
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center transition-colors"
                >
                  <FaGithub className="mr-2" /> Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
