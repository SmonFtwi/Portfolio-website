import { Avatar } from "@/components/ui/avatar";


// Function to generate a random color
const getRandomColor = () => {
  const colors = ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500"];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Fujairah Research Center",
      role: "Full Stack Developer",
      dates: "Sep 2023 - Present",
      description:
        "Developed full-stack applications utilizing Next.js and Tailwind CSS for front-end, Express.js for back-end, and MySQL for database management. Managed deployments on Azure and Vercel.",
    },
    {
      company: "Fujairah Aviation Academy",
      role: "IT Support Technician Intern",
      dates: "Sep 2023 - Dec 2023",
      description:
        "Server configuration, virtualization environments setup, and provided technical support to end-users.",
    },
    {
      company: "Huawei",
      role: "Cloud Computing Intern",
      dates: "July 2023 - Sep 2023",
      description:
        "Configured cloud-based storage, optimized virtual machines, and enhanced resource utilization.",
    },
    {
      company: "Higher Colleges of Technology",
      role: "Peer Tutor and Mentor",
      dates: "Jan 2020 - Jun 2023",
      description:
        "Tutored multiple IT courses, including programming, networking, and mathematics, providing academic support and mentoring.",
    },
  ];

  return (
    <section id="about" className="flex flex-col  items-center justify-center    text-start my-10 w-full">
      {/* About Section */}
      <div className=" mb-12 ">
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <p className="text-lg dark:text-gray-300 text-gray-600 max-w-4xl">
          Recent IT graduate with a strong foundation in networking, cybersecurity, web development, and
          emerging technologies. Passionate about pursuing advanced research in machine learning and NLP,
          aiming to contribute innovative solutions at the intersection of AI and human-computer interaction.
        </p>
        
      </div>

      {/* Work Experience Section */}
      <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
      <div className="flex flex-col items-start space-y-10 w-full max-w-3xl">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-start space-x-4 w-full">
            {/* Random Color Avatar */}
            <Avatar className={`w-12 h-12 ${getRandomColor()} text-white flex-shrink-0`}>
              {exp.company[0]}
            </Avatar>
            <div className="flex flex-col space-y-1">
              <span className="font-semibold text-lg">{exp.company}</span>
              <span className="text-sm dark:text-gray-300 text-gray-600">{exp.role}</span>
              <span className="text-sm text-gray-500 ">{exp.dates}</span>
              <p className="text-sm dark:text-gray-400 text-gray-700 max-w-lg">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
