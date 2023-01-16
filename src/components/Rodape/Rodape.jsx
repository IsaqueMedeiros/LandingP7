import React from "react";
import "./Rodape.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Rodape = () => {
  return (
    <div className="RodapeContainer overflow-hidden w-full flex flex-col items-center justify-center bg-slate-400 text-white">
      <div className="conteudoRodape flex-col ">
        <div className="TextosRodape  flex flex-row items-center justify-evenly">
          <div className="LogoRodape"></div>
          <h1 className="redesSociaisTexto">Acompanhe nossas redes sociais</h1>
          <div className="redesSociaisIcones">
            <a href="https://www.instagram.com/p7.criativo/" rel="Instagram">
              <div className="iconeInstagram mb-8">
                <FontAwesomeIcon
                  className="icon absolute rounded-full"
                  icon={faInstagram}
                />{" "}
              </div>{" "}
              <p>p7.criativo</p>
            </a>
            <a
              href="https://ms-my.facebook.com/p7criativo/?ref=page_internal"
              rel="Facebook"
            >
              <div className="iconeFacebook mb-8">
                <FontAwesomeIcon
                  className="icon absolute rounded-full"
                  icon={faFacebookF}
                />
              </div>{" "}
              <p>p7criativo</p>
            </a>
            <a href="https://br.linkedin.com/company/p7criativo" rel="Linkedin">
              <div className="iconeLinkedin mb-8">
                <FontAwesomeIcon
                  className="icon absolute rounded-full"
                  icon={faLinkedin}
                />
              </div>{" "}
              <p>p7criativo</p>
            </a>
          </div>
        </div>
        <p className="Copyright text-sm w-full  flex flex-row items-end justify-center">
          
        ©2022 IEL FIEMG, Inc. Todos Direitos Reservados
        </p>
      </div>
    </div>
  );
};

export default Rodape;
