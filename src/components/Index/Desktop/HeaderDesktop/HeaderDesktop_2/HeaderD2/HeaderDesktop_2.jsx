import React from "react";
import "./HeaderDesktop_2.css";

const HeaderDesktop_2 = () => {
  return (
    <div id="Diferente" className="ContainerDesktop_2 overflow-hidden w-full flex flex-col items-center justify-evenly text-white">
      <h1 className=" titulo-desktop2 text-white">
        O QUE TEMOS DE DIFERENTE?
      </h1>
      <div className="ALL-square-c2 flex flex-row	items-center justify-around ">
        <div className="square-conteudo2-desktop flex flex-col items-center justify-around ">
          <div className="text-center mt-40 flex flex-col items-center text-white">
            <p className="Text-4XFonts-Size-Desktop-Version">
              NOSSA ECONOMIA <br />É CRIATIVA
            </p>
            <br />
            <p className="Text-6XFonts-Size-Desktop-Version text-center Textos-Quadrados-Container2 Texto-Margin-Desktop2">
              Somos exclusivamente, dedicados á economia criativa.
            </p>
          </div>
          <div className="absolute rounded-full img-conteudo2-desktop imgCriativa"></div>
        </div>

        <div className="square-conteudo2-desktop flex flex-col items-center justify-around ">
          <div className="text-center mt-40 flex flex-col items-center text-white">
            <p className="Text-4XFonts-Size-Desktop-Version">NETWORKING</p>
            <br />
            <p className="Text-6XFonts-Size-Desktop-Version Textos-Quadrados-Container2">
              Conexões com redes de relacionamento, empresas e instituições
              nacionais e internacionais.
            </p>
          </div>
          <div className="absolute rounded-full img-conteudo2-desktop iconeNetwork"></div>
        </div>
        <div className="square-conteudo2-desktop flex flex-col items-center justify-around ">
          <div className="text-center mt-40  flex flex-col items-center">
            <p className="Text-4XFonts-Size-Desktop-Version">DESENVOLVIMENTO</p>
            <br />
            <p className="Text-6XFonts-Size-Desktop-Version Textos-Quadrados-Container2">
              Acesso a programas de apoio, capacitação, financiamento,
              plataforma de dados e informações.
            </p>
          </div>
          <div className="absolute rounded-full img-conteudo2-desktop iconeDesenvolvimento"></div>
        </div>
        <div className="square-conteudo2-desktop flex flex-col items-center justify-around ">
          <div className="text-center mt-40  flex flex-col items-center">
            <p className="Text-4XFonts-Size-Desktop-Version">EXPANSÃO</p>
            <br />
            <p className="Text-6XFonts-Size-Desktop-Version Textos-Quadrados-Container2">
              Conexões com mercados estrátegicos, para apoio á
              internacionalização e atração de negócios.
            </p>
          </div>
          <div className="absolute rounded-full img-conteudo2-desktop iconeExpansao"></div>
        </div>
        <div className="square-conteudo2-desktop flex flex-col items-center justify-around ">
          <div className="text-center mt-40  flex flex-col items-center">
            <p className="Text-4XFonts-Size-Desktop-Version">
              RESIDENTE VIRTUAL
            </p>
            <br />
            <p className="Text-6XFonts-Size-Desktop-Version Textos-Quadrados-Container2">
              Possibilidade de empresas e profissionais de outras cidades
              participarem do P7 Criativo.
            </p>
          </div>
          <div className="absolute rounded-full img-conteudo2-desktop iconeVirtual"></div>
        </div>
      </div>
      <button className="Faca_parte_btn_desktop rounded-full">
        <p className="facaParte-btn-txt Text-Fonts-Size-Desktop-Version">
          FAÇA PARTE DO P7
        </p>
      </button>
    </div>
  );
};

export default HeaderDesktop_2;
