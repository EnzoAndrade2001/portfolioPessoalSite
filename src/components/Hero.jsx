import minhaFoto from "../assets/fotoPortfolio.jpg";

function Hero() {
    return (
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4 pt-2">
          {/* Imagem do usuário */}
      <img
        src={minhaFoto}
        alt="Minha foto"
        className="w-38 h-38 sm:w-56 sm:h-56 rounded-full border-4 border-blue-400 shadow-xl mb-6 transition-transform duration-300 ease-in-out transform hover:scale-110"
      />

        <h1 className="text-2xl sm:text-3xl font-semibold mb-3">Olá, eu sou <span className="text-blue-400 text-2xl sm:text-3xl font-semibold mb-3">Enzo de Andrade Cruz</span></h1>
        <p className="text-base sm:text-lg max-w-xl text-gray-300">Sou um desenvolvedor Jr apaixonado por transformar ideias em interfaces incríveis, 
            Tenho formação técnica em Análise e Desenvolvimento de Sistemas pelo SENAC-TECH RS,
             e atualmente estou cursando a graduação na mesma área pela Universidade LaSalle.
             Meu objetivo é atuar na área de Desenvolvimento de Software, contribuindo com soluções criativas e eficientes,
              enquanto evoluo tecnicamente e profissionalmente dentro de equipes colaborativas e inovadoras.</p>
        
      </section>
    );
  }
  
  export default Hero;
  