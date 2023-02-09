import React, { Component } from "react";
import "./CarouselHeaderDesktop_2.css";
import Slider from "react-slick";

export default class CarouselHeaderDesktop_2 extends Component {
  render() {
    const config = {
      className: "name",
      dots: false,
      fade: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 899,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
          },
        },
      ],
    };
    return (
      <div className="ContainerCarouselDesktop_2 overflow-hidden w-full flex flex-col justify-evenly bg-slate-600 text-white">
        <h1 className="Title-Fonts-Size-Desktop-Version titulo-Carousel-desktop2 flex flex-col items-center ">
          O QUE TEMOS DE DIFERENTE?
        </h1>
        <div className="flex flex-col justify-center ALL-Quadrado-Desktop2">
          <Slider {...config}>
            <div className="Carousel-Quadrados-Desktop_2 text-center">
              <div className="img-Carousel-Desktop_2 absolute rounded-full imgCriativa"></div>
              <div className="Todos-TXT-Quadrado-Desktop2 flex flex flex-col justify-center items-center">
                <p className="Text-4XFonts-Size-Desktop-Version Titulos-Carousel-Desktop_2">
                  {" "}
                  NOSSA ECONOMIA É CRIATIVA
                </p>
                <br />
                <p className="Text-6XFonts-Size-Desktop-Version Textos-Carousel-Desktop_2">
                  {" "}
                  Somos exclusivamente, dedicados á economia criativa.
                </p>
              </div>
            </div>
            <div className="Carousel-Quadrados-Desktop_2 text-center">
              <div className="img-Carousel-Desktop_2 absolute rounded-full iconeNetwork"></div>
              <div className="Todos-TXT-Quadrado-Desktop2 flex flex-col justify-center items-center">
                <p className="Text-4XFonts-Size-Desktop-Version">NETWORKING</p>
                <br />
                <p className="Text-6XFonts-Size-Desktop-Version Textos-Carousel-Desktop_2">
                  {" "}
                  Conexões com redes de relacionamento, empresas e instituições
                  nacionais e internacionais.
                </p>
              </div>
            </div>
            <div className="Carousel-Quadrados-Desktop_2 text-center">
              <div className="img-Carousel-Desktop_2 absolute rounded-full iconeDesenvolvimento iconeDesenvolvimento"></div>
              <div className="Todos-TXT-Quadrado-Desktop2 flex flex-col justify-center items-center">
                <p className="Text-4XFonts-Size-Desktop-Version Titulos-Carousel-Desktop_2">
                  DESENVOLVIMENTO
                </p>
                <br />
                <p className="Text-6XFonts-Size-Desktop-Version Textos-Carousel-Desktop_2">
                  Acesso a programas de apoio, capacitação, financiamento,
                  plataforma de dados e informações.
                </p>
              </div>
            </div>
            <div className="Carousel-Quadrados-Desktop_2 text-center">
              <div className="img-Carousel-Desktop_2 absolute rounded-full iconeExpansao"></div>
              <div className="Todos-TXT-Quadrado-Desktop2 flex flex-col justify-center items-center">
                <p className="Text-4XFonts-Size-Desktop-Version Titulos-Carousel-Desktop_2">
                  EXPANSÃO
                </p>
                <br />
                <p className="Text-6XFonts-Size-Desktop-Version Textos-Carousel-Desktop_2">
                  {" "}
                  Conexões com mercados estrátegicos, para apoio á
                  internacionalização e atração de negócios.
                </p>
              </div>
            </div>
            <div className="Carousel-Quadrados-Desktop_2 text-center">
              <div className="img-Carousel-Desktop_2 absolute rounded-full iconeVirtual"></div>
              <div className="Todos-TXT-Quadrado-Desktop2 flex flex-col justify-center items-center">
                <p className="Text-4XFonts-Size-Desktop-Version Titulos-Carousel-Desktop_2">
                  {" "}
                  RESIDENTE VIRTUAL
                </p>
                <br />
                <p className="Text-6XFonts-Size-Desktop-Version Textos-Carousel-Desktop_2">
                  {" "}
                  Possibilidade de empresas e profissionais de outras cidades
                  participarem do P7 Criativo.
                </p>
              </div>
            </div>
          </Slider>
        </div>
        <div className="flex flex-col items-center ">
          <button className="Faca_parte_btn_Carousel_desktop rounded-full">
            <p className="facaParte-btn-txt Text-Fonts-Size-Desktop-Version">
              FAÇA PARTE DO P7
            </p>
          </button>
        </div>
      </div>
    );
  }
}
