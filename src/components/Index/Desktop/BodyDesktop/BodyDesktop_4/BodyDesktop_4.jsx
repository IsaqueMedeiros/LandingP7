import React from "react";
import "./BodyDesktop_4.css";

const BodyDesktop_4 = () => {
  return (
    <div id="Serviços" className="ContainerDesktop_4 overflow-hidden w-full flex flex-col items-center justify-around bg-white text-black">
      <h1 className=" titulo-desktop4">
        NO P7, VOCÊ TEM:
      </h1>
      <div className="Beneficios-p7-desktop4 grid justify-items-center  items-center">
        <div className="desktop4-positionL flex flex-col">
          <div className="rounded-full div_desktop_4 absolute AppIconC4"></div>
          <p className="text-center txts-grid4-desktopL textos-desktop4_fontSize">
            Endereço fiscal <br/> para sua empresa
          </p>
        </div>
        <div className="desktop4-positionR flex flex-col">
          <div className="rounded-full div_desktop_4 absolute VisiIconC4"></div>
          <p className="text-center txts-grid4-desktopR textos-desktop4_fontSize">
            Visibilidade nacional e internacional
          </p>
        </div>
        <div className="desktop4-positionL flex flex-col">
          <div className="rounded-full div_desktop_4 absolute RecepcaoIconC4"></div>
          <p className="text-center txts-grid4-desktopL textos-desktop4_fontSize">
            Recepção e gestão de correspondências
          </p>
        </div>
        <div className="desktop4-positionR flex flex-col">
          <div className="rounded-full div_desktop_4 absolute CopaIconC4"></div>
          <p className="text-center txts-grid4-desktopR textos-desktop4_fontSize">
            Copa e área <br /> de convivência
          </p>
        </div>
        <div className="desktop4-positionL flex flex-col">
          <div className="rounded-full div_desktop_4 absolute InfoIconC4"></div>
          <p className="text-center txts-grid4-desktopL textos-desktop4_fontSize">
            Acesso ao nosso APP com notícias e informações
          </p>
        </div>
        <div className="desktop4-positionR flex flex-col">
          <div className="rounded-full div_desktop_4 absolute EstudoIconC4"></div>
          <p className="text-center txts-grid4-desktopR textos-desktop4_fontSize">
            Acesso a estudos de mercado e pesquisas
          </p>
        </div>
        <div className="desktop4-positionL flex flex-col">
          <div className="rounded-full div_desktop_4 absolute CondIconC4"></div>
          <p className="text-center txts-grid4-desktopL textos-desktop4_fontSize">
            Condições especiais para usar o auditório e salas de reunião
          </p>
        </div>
        <div className="desktop4-positionR flex flex-col">
          <div className="rounded-full div_desktop_4 absolute DescontoIconC4"></div>
          <p className="text-center txts-grid4-desktopR textos-desktop4_fontSize">
            Descontos<br/> em cursos
          </p>
        </div>
      </div>
      <button className="Garanta-btn-desktop_4 rounded-full Text-Fonts-Size-Desktop-Version">
        <p className="text-white" >GARANTA SEU LUGAR NO P7</p>
      </button>
    </div>
  );
};

export default BodyDesktop_4;
