import { Link } from "react-scroll";

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-lg font-medium">
            Feito por <a href="https://www.linkedin.com/in/enzo-andrade-579b40214/" className="text-cyan-400 hover:text-cyan-500">Enzo Andrade</a>
          </p>
          <p className="text-sm mt-2">
            Projeto desenvolvido com React, Tailwind CSS e outras tecnologias. <br />
            <a href="https://github.com/EnzoAndrade2001" className="text-cyan-400 hover:text-cyan-500">GitHub</a> | 
            <a href="https://www.linkedin.com/in/enzo-andrade-579b40214/" className="text-cyan-400 hover:text-cyan-500"> LinkedIn</a> | 
            <a href="https://wa.me/51989849691" className="text-cyan-400 hover:text-cyan-500">WhatsApp</a>  {51989849691}
          </p>
          <div className="mt-4">
      <Link
        to="hero"
        smooth={true}
        duration={500}
        className="text-cyan-400 hover:text-cyan-500 cursor-pointer text-sm"
      >
        ↑ Voltar ao topo
      </Link>
    </div>
          <p className="text-xs mt-4">© 2025 Todos os direitos reservados.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  