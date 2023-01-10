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
        <img className="LogoRodape" src="/img/Footer/LogoP7.svg"/>
          <h1 className="redesSociaisTexto" >Acompanhe nossas redes sociais</h1>
          <div className="redesSociaisIcones">
           <a href="https://www.instagram.com/p7.criativo/" rel="Instagram" ><div className="iconeInstagram mb-8">
              <FontAwesomeIcon className="icon absolute rounded-full" icon={faInstagram} />{" "}
              <p>p7.criativo</p>
            </div></a>
            <a href="https://ms-my.facebook.com/p7criativo/?ref=page_internal" rel="Facebook" ><div className="iconeFacebook mb-8">
              <FontAwesomeIcon className="icon absolute rounded-full" icon={faFacebookF} />
              <p>p7criativo</p>
            </div></a>
            <a href="https://br.linkedin.com/company/p7criativo" rel="Linkedin" ><div className="iconeLinkedin mb-8">
              <FontAwesomeIcon className="icon absolute rounded-full" icon={faLinkedin} />
              <p>p7criativo</p>
            </div></a>
          </div>
        </div>
        <p className="privacidadeTexto w-full  flex flex-row items-end justify-center">
          <a
            href="https://www7.fiemg.com.br/Cms_Data/Contents/central/Media/FIEMG/LGPD/MF001220BH_CARTILHA2_LGPD_aprov.pdf" rel="PrivacyPolitic"
            className="politicaDadosLink"
          >
            Acesse aqui
          </a>
          &nbsp;a política de privacidade e proteção de dados da FIEMG.
        </p>
      </div>
    </div>
  );
};

export default Rodape;
