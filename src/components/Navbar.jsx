import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow z-50">
      <div className="flex justify-center w-full">
        <ul className="flex justify-center gap-10 p-4 text-lg font-medium w-full">
          <li>
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-400">
              Início
            </Link>
          </li>
          <li>
            <Link to="projetos" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-400">
              Projetos
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-400">
              Tecnologias
            </Link>
          </li>
          <li>
            <Link to="contato" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-400">
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
