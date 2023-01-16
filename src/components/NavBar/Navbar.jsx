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
  function lockScroll() {
    document.body.classList.toggle('lock-scroll');
}

  return (
    <header className="overflow-hidden">
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

      <nav className="txt-links-all" ref={navRef} >
        <a href="#Diferente" >
          <p className="text-base">DIFERENCIAIS</p>
        </a>
        <a href="#Espaços">
          <p className="text-base">ESPAÇOS</p>
        </a>
        <a href="#Serviços" >
          <p className="text-base">SERVIÇOS</p>
        </a>
        <a href="#SistemaFIEMG" >
          <p className="text-base">SISTEMA FIEMG</p>
        </a>
        <a href="#QuemEstaNoP7" >
          <p className="text-base">QUEM ESTÁ NO P7</p>
        </a>
        <a href="#EntreParaP7" >
          <p className="text-base">ENTRE PARA O P7</p>
        </a>
        <button className="nav-btn nav-close-btn"  onClick={() =>{lockScroll();showNavbar()}} >
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" id="mob-menu-btn"  onClick={() =>{lockScroll();showNavbar()}}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
