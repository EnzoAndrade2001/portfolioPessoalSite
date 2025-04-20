import ProjectCard from "./ProjectCard";
import projMac from "../assets/imgProjetos/projetoMac.png"; // substitua com o seu caminho real
import projLast from "../assets/imgProjetos/projTheLast.jpg";
function Projects() {
  const projetos = [
    {
      title: "Projeto MacBook",
      description: "Este projeto é uma landing page clonada da Apple, focada na apresentação do MacBook Air com chip M4, feita com HTML, CSS e JavaScript. ",
      image: projMac,
      techs: ["javascript", "html", "css"],
      link: "https://github.com/EnzoAndrade2001/cloneMacBook",
    },
    {
      title: "Projeto The Last Of Us",
      description: "Uma landing page interativa inspirada na série The Last of Us da HBO, com um carrossel de imagens funcional feito com HTML, CSS e JavaScript puro.",
      image: projLast,
      techs: ["javascript", "html", "css"],
      link: "https://github.com/EnzoAndrade2001/Projeto-The-last-of-us-HTML-CSS-JS/tree/main",
    }

    // Você pode adicionar mais projetos aqui
  ];

  return (
    <section id="projetos" className="py-12 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-8">Projetos</h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {projetos.map((projeto, index) => (
          <ProjectCard key={index} {...projeto} />
        ))}
      </div>
    </section>
  );
}

export default Projects;