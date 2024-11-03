import { FaReact, FaNodeJs,  FaPython, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiNextdotjs, SiExpress, SiAzuredevops, SiGit, SiJavascript, SiTypescript, SiMongodb } from "react-icons/si";

export default function SkillsSection() {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript size={32} /> },
    { name: "TypeScript", icon: <SiTypescript size={32} /> },
    { name: "React", icon: <FaReact size={32} /> },
    { name: "Next.js", icon: <SiNextdotjs size={32} /> },
    { name: "Node.js", icon: <FaNodeJs size={32} /> },
    { name: "Express.js", icon: <SiExpress size={32} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
    { name: "MySQL", icon: <SiMysql size={32} /> },
    { name: "MongoDB", icon: <SiMongodb size={32} /> },
    { name: "Azure", icon: <SiAzuredevops size={32} /> },
    { name: "Docker", icon: <FaDocker size={32} /> },
    { name: "Python", icon: <FaPython size={32} /> },
    { name: "Git", icon: <SiGit size={32} /> },
  ];

  return (
    <section id="skills" className=" flex flex-col  items-center  text-start my-10 mx-auto ">
      <h2 className="text-3xl font-bold mb-10 text-start">Skills</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-6  ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center   rounded-lg  transition-transform transform hover:scale-105  group"
          >
            <div className=" transition-colors">
              {skill.icon}
            </div>
            <span className="text-lg font-semibold  transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
