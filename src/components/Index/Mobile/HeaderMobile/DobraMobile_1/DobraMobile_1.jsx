import React from "react";
import "./DobraMobile_1.css";
import Whatsapp from "../../../../Whatsapp/Whatsapp";

const DobraMobile_1 = () => {
  return (
    <div className="DobraMobile-Container-1 w-full overflow-hidden flex flex-col  bg-slate-400 text-white ">
      <Whatsapp />
      <div className="aLL_TXT_mobile1">
        <h1 className="text-left text-3xl max-w-xs">
          {" "}
          FAÇA PARTE DO PRIMEIRO E MAIS EXCLUSIVO HUB BRASILEIRO DA INDÚSTRIA
          CRIATIVA.{" "}
        </h1>
        <p className="max-w-[300px] my-10 mr-[20px] text-base">
        Uma comunidade em que empresas e pessoas da Criatividade, inovação e
          tecnologia podem fazer conexões, empreender, colaborar entre si e
          desenvolver negócios relevantes.
        </p>
        <a
          href=" https://api.whatsapp.com/send?phone=996905648&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20P7! "
          target="_blank"
        >
          <button className="botao_parte_mobile my-20">FAÇA PARTE</button>
        </a>
      </div>
    </div>
  );
};

export default DobraMobile_1;
