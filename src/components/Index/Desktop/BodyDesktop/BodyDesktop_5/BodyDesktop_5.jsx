import React from "react";
import "./BodyDesktop_5.css";

const BodyDesktop_5 = () => {
  return (
    <div
      id="SistemaFIEMG"
      className="ContainerDesktop_5 overflow-hidden w-full flex flex-col items-center justify-center  bg-slate-400 text-white"
    >
      <div className="conteudo-grid-5 grid justify-items-center  items-center">
        <h1 className="Title-3Xsmall-Fonts-Size-Desktop-Version titulo-desktop5">
          SISTEMA FIEMG, NOSSO PARCEIRO NA INDÚSTRIA CRIATIVA.
        </h1>
        <div className="Todas-Logos-Desktop_5 flex flex-col items-center justify-evenly">
          <div className="Logos-Desktop_5 logoSesi"></div>
          <div className="Logos-Desktop_5 logoSenai"></div>
          <div className="Logos-Desktop_5 logoIel"></div>
          <div className="Logos-Desktop_5 logoFiemg"></div>
        </div>
        <p className="Segundotxt-Desktop_5">
          Além de construir estratégias, negócios, relacionamentos, parcerias e
          comercialização de projetos relacionados à indústria criativa, o
          Sistema FIEMG garante o
          <b> acesso a um portfólio completo de serviços e projetos</b> que
          envolve ações de empreendedorismo, tecnologia, inovação e educação das
          entidades: <b>IEL, SENAI</b> e <b>SESI.</b>
        </p>
        <a
          href=" https://api.whatsapp.com/send?phone=996905648&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20P7! "
          target="_blank"
        >
          <button className="EntreP7-btn-desktop_5 rounded-full">
            <p className="Text-Fonts-Size-Desktop-Version">ENTRE PARA O P7</p>
          </button>
        </a>
      </div>
    </div>
  );
};

export default BodyDesktop_5;
