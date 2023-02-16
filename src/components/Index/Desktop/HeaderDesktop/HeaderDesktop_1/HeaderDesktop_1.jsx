import React from "react";
import "./HeaderDesktop_1.css";

const HeaderDesktop_1 = () => {
  return (
    <div className="ContainerDesktop_1 overflow-hidden w-full flex flex-col items-start justify-center ">
      <div className="todos-txt-desktop1 flex flex-col items-start justify-around">
        <h1 className=" text-left titulo-desktop1 text-white">
          {" "}
          FAÇA PARTE DO PRIMEIRO E MAIS EXCLUSIVO HUB BRASILEIRO DA INDÚSTRIA
          CRIATIVA.{" "}
        </h1>
        <br />
        <br />
        <p className="texto-desktop1 text-white">
          Uma comunidade em que empresas e pessoas da Criatividade, inovação e
          tecnologia podem fazer conexões, empreender, colaborar entre si e
          desenvolver negócios relevantes.
        </p>
        <br />
        <br />
        <a
          href=" https://api.whatsapp.com/send?phone=996905648&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20P7! "
          target="_blank"
        >
          <button className="botao_parte_desktop3 flex flex-col items-center justify-center rounded-full ">
            <p className="Text-Fonts-Size-Desktop-Version text-white	">
              FAÇA PARTE
            </p>
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeaderDesktop_1;
