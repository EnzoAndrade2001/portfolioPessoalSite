import { FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";


const techIcons = {
  javascript: <SiJavascript className="text-yellow-400" />,
  html: <FaHtml5 className="text-orange-500" />,
  css: <FaCss3Alt className="text-blue-500" />,
  tailwind: <SiTailwindcss className="text-sky-400" />,
};

function ProjectCard({ title, description, image, techs = [], link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-sm rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 bg-gray-800 hover:shadow-2xl"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-sm text-gray-300 mb-3">{description}</p>
        <div className="flex items-center gap-3 mb-2">
          {techs.map((tech, index) => (
            <span key={index} title={tech}>
              {techIcons[tech.toLowerCase()] || (
                <span className="text-xs bg-gray-700 px-2 py-1 rounded">{tech}</span>
              )}
            </span>
          ))}
        </div>
        <div className="text-white flex items-center gap-2 text-sm">
          <FaGithub />
          <span>Ver no GitHub</span>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;


