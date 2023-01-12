import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./style/Nav.css";
import "./style/Navd.css";
import "./style/Navm.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="overflow-x-hidden">
      <div className="logo_Navbar"></div>
      <p className="entrar_p7_btn Texto-Navbar-Desktop">
        <button>
          <a
            href=" https://api.whatsapp.com/send?phone=996905648&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20P7! "
            target="_blank"
          >
            ENTRE PARA O P7
          </a>
        </button>
      </p>

      <nav className="txt-links-all" ref={navRef}>
        <a
          onClick={(e) => {
            e.preventDefault();
            window.location.replace("/#Diferente");
          }}
          className=" Hide TXT-links"
          href="/#"
        >
          <p className="text-base">DIFERENCIAIS</p>
        </a>
        <a
          onClick={(e) => {
            e.preventDefault();
            window.location.replace("/#Espaços");
          }}
          className=" Hide TXT-links"
          href="/#"
        >
          <p className="text-base">ESPAÇOS</p>
        </a>
        <a
          onClick={(e) => {
            e.preventDefault();
            window.location.replace("/#Serviços");
          }}
          className=" Hide TXT-links"
          href="/#"
        >
          <p className="text-base">SERVIÇOS</p>
        </a>
        <a
          onClick={(e) => {
            e.preventDefault();
            window.location.replace("/#SistemaFIEMG");
          }}
          className=" Hide TXT-links"
          href="/#"
        >
          <p className="text-base">SISTEMA FIEMG</p>
        </a>
        <a
          onClick={(e) => {
            e.preventDefault();
            window.location.replace("/#QuemEstaNoP7");
          }}
          className=" Hide TXT-links"
          href="/#"
        >
          <p className="text-base">QUEM ESTÁ NO P7</p>
        </a>
        <a
          onClick={(e) => {
            e.preventDefault();
            window.location.replace("/#EntreParaP7");
          }}
          className=" Hide TXT-links"
          href="/#"
        >
          <p className="text-base">ENTRE PARA O P7</p>
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
