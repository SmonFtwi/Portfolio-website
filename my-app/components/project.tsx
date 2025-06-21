import {  FaGithub } from "react-icons/fa";
import Image from "next/image";
import { CodeXmlIcon } from "lucide-react";

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
    {
      name: "SDN Based Network Solution for Enterprise Network",
      date: "May 2023",
      description:
        "A Software-Defined Networking (SDN) solution that automates the configuration of an enterprise network. This project simplifies network management by automatically setting up SD-WAN components and secures communications with IPsec encryption.",
      tools: [
        "GNS3",
        "Vlan Configurations",
        "OSPF Configurations",
        "IPSEC Configurations",
      ],
      image: "/Picture1.png", // Replace with actual image path
      codeLink:
        "https://docs.google.com/document/d/1MaIAKcjev5WY3DqXKLQSInHk1U93NQWu/edit?usp=sharing&ouid=101985642419000102961&rtpof=true&sd=true", // Add GitHub link
    },
  ];

  return (
    <section id="project" className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
      <div className="max-w-5xl mx-auto">
        <ul className="space-y-16">
          {projects.map((project, index) => (
            <li
              key={index}
              className="flex flex-col md:flex-row gap-8 items-start group border-2 border-gray-300 dark:border-gray-700 rounded-lg p-4"
            >
              <div className="md:w-2/5 w-full relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={800}
                  height={450}
                  className="object-cover"
                />
              </div>

              <div className="md:w-3/5 w-full">
                <p className="text-sm text-gray-500 mb-2">{project.date}</p>
                <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium border rounded-full bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium transition-colors hover:text-blue-500"
                    >
                      {project.codeLink.includes("github.com") ? (
                        <FaGithub className="mr-2 h-5 w-5" />
                      ) : (
                        <CodeXmlIcon className="mr-2 h-5 w-5" />
                      )}
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
