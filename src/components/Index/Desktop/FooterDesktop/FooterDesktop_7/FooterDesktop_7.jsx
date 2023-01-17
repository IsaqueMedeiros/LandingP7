import React from "react";
import "./FooterDesktop_7.css";

import Form1 from "./Forms/Form1";
import Form2 from "./Forms/Form2";

function FooterDesktop_7() {
  // Funções Fill priemiros circulos / hide and show div
  function hideDiv() {
    document.getElementById("showForm").style.display = "none";
    document.getElementById("hideForm").style.display = "block";
    document.getElementById("butttonFill-PJ").style.backgroundColor = "white";
    document.getElementById("butttonFill-PF").style.backgroundColor =
      "Transparent";
  }

  function showDiv() {
    document.getElementById("showForm").style.display = "block";
    document.getElementById("hideForm").style.display = "none";
    document.getElementById("butttonFill-PF").style.backgroundColor = "white";
    document.getElementById("butttonFill-PJ").style.backgroundColor =
      "Transparent";
  }

  // Funções Fill priemiros circulos / hide and show div (END)
 

  // Reset form

  return (
    <div id="EntreParaP7" className="Footer_Container7 overflow-hidden w-full flex flex-row justify-evenly items-center bg-slate-200 ">
      <h1 className="formMainH1 text-white">
        Entre para nossa comunidade e impulsone seus negócios.
      </h1>
      <div className="ConteudoFormTotal flex flex-col items-center justify-around overflow-hidden">
        <p className="text-white text-base text-center">
          Criamos pontes entre empresas, pessoas
          <br /> e projetos que se complementam.
        </p>
        <div className="allButtonsForm flex flex-row items-center justify-evenly">
          <button
            id="butttonFill-PJ"
            type="button"
            className="buttonForm bg-white rounded-full "
            onClick={hideDiv}
          ></button>
          <p className="textLabels text-white	">Pessoa Jurídica</p>
          <button
            id="butttonFill-PF"
            type="button"
            className="buttonForm rounded-full "
            onClick={showDiv}
          ></button>
          <p className="textLabels text-white	">Pessoa Física</p>
        </div>
        {/* Pessoa juridica Form INICIO */}
        <Form1/>
       
        {/* Fim Pessoa Jurídica Form */}

        {/* Pessoa fisica form  START */}
        <Form2/>
      
        {/* Fim Pessoa Física Form */}
        <p className="privacidadeTexto flex justify-center text-white text-xs">
          <a
            href="https://www7.fiemg.com.br/Cms_Data/Contents/central/Media/FIEMG/LGPD/MF001220BH_CARTILHA2_LGPD_aprov.pdf"
            rel="PrivacyPolitic"
            className="politicaDadosLink"
          >
            Acesse aqui
          </a>
          &nbsp;a política de privacidade e proteção de dados da FIEMG.
        </p>
      </div>
    </div>
  );
}

export default FooterDesktop_7;
