import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "SQL", icon: <FaDatabase className="text-indigo-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
  ];

  return (
    <section id="skills" className="py-12 bg-gray-800 text-white text-center">
      <h2 className="text-3xl font-bold mb-8">Tecnologias</h2>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {skills.map((skill, index) => (
           <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-700 p-6 w-40 h-40 flex flex-col justify-center items-center rounded-2xl shadow-lg hover:bg-gray-600 transition-transform transform hover:-translate-y-1"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-lg font-medium">{skill.name}</p>
            </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
