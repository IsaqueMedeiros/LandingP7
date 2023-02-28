import React from "react";
import "./DobraMobile_5.css";

const DobraMobile_5 = () => {
  return (
    <div
      id="SistemaFIEMG"
      className="DobraMobile-Container-5 w-full overflow-hidden flex flex-col items-center justify-evenly bg-slate-400 text-white"
    >
      <h1 className="SISTEMA_FI text-3xl">
        SISTEMA FIEMG, NOSSO PARCEIRO NA INDÚSTRIA CRIATIVA.
      </h1>
      <p className="all_txt_fi">
        Além de construir estratégias, negócios, relacionamentos, parcerias e
        comercialização de projetos relacionados á indústria criativa, o Sistema
        FIEMG garante o{" "}
        <b>acesso a um portfólio completo de serviços e projetos</b> que envolve
        ações de empreendedorismo, tecnologia, inovação e educação das
        entidades: <b> IEL, SENAI</b> e <b>SESI</b>.
      </p>
      <div className="LogosMobileD5">
        <div className="logoSesi Logos-Mobile_5"></div>
        <div className="logoSenai Logos-Mobile_5"></div>
        <div className="logoIel Logos-Mobile_5"></div>
        <div className="logoFiemg Logos-Mobile_5"></div>
      </div>
      <a
        href=" https://api.whatsapp.com/send?phone=996905648&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20P7! "
        target="_blank"
      >
        <button className="EntreP7_btn  rounded-full">
          <h3>ENTRE PARA O P7</h3>
        </button>
      </a>
    </div>
  );
};

export default DobraMobile_5;
