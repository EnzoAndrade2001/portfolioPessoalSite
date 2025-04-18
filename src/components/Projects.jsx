function Projects() {
    const projetos = [
      {
        titulo: "Portfólio Pessoal",
        descricao: "Este portfólio que você está vendo agora! Desenvolvido com Vite, React e Tailwind CSS.",
        link: "https://seu-link-portfolio.com", // substitua com o real depois
        imagem: "https://via.placeholder.com/300x180", // imagem placeholder ou imagem do projeto
      },
      {
        titulo: "Laricão",
        descricao: "App de receitas criativas com base em ingredientes que você tem em casa. Reconhecimento de imagem e sugestões personalizadas.",
        link: "https://github.com/seuuser/laricao",
        imagem: "https://via.placeholder.com/300x180",
      }
    ];
  
    return (
      <section className="py-16 px-4 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-10">Projetos</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projetos.map((projeto, index) => (
            <div key={index} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img src={projeto.imagem} alt={projeto.titulo} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{projeto.titulo}</h3>
                <p className="text-gray-300 text-sm mb-4">{projeto.descricao}</p>
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition"
                >
                  Ver Projeto
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;
  