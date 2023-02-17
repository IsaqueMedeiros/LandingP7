import React, { Component } from "react";
import Slider from "react-slick";
import "./FooterDesktop_6.css";

export default class FooterDesktop_6 extends Component {
  render() {
    const AutoCarousel = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrows: false,
      initialSlide: 0,
    };
    return (
      <div
        id="QuemEstaNoP7"
        className="ContainerDesktop_6 overflow-hidden w-full flex flex-col justify-around bg-slate-600 text-white"
      >
        <div className="Textos-desktop_6 flex flex-col">
          <h1 className="  titulo-desktop6 ">
            ONDE CRIATIVIDADE E INOVAÇÃO ACONTECEM.
          </h1>
          <br />
          <br />
          <p className=" texto-desktop_6">
            Estamos em um prédio icônico de 25 andares, no centro de BH,
            projetado por Oscar Niemeyer na década de 50, inteiramente dedicado
            à criatividade, inovação e negócios.
          </p>

          
            <button className="agendeTour-btn">
            <a
            href=" https://api.whatsapp.com/send?phone=996905648&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20P7! "
            target="_blank"
          >
              <p className=" Text-Fonts-Size-Desktop-Version agendeTour-txt">
                AGENDE UM TOUR PRESENCIAL
              </p>          </a>

            </button>
        </div>
        <div className="ScrollSide-position_6">
          <h1 className=" txt-scrollside-container_6">
            GRANDES EMPRESAS JÁ ESTÃO NO P7.
          </h1>
          <Slider {...AutoCarousel}>
            <div className="ScrollSide-desktop6 logo42BH"></div>
            <div className="ScrollSide-desktop6 logoVidas"></div>
            <div className="ScrollSide-desktop6 logoSenaiF6"></div>
            <div className="ScrollSide-desktop6 logoSesiF6"></div>
            <div className="ScrollSide-desktop6 logoIELF6"></div>
            <div className="ScrollSide-desktop6 logoFIEMGF6"></div>
            <div className="ScrollSide-desktop6 LogoNeoVentures"></div>
          </Slider>
        </div>
      </div>
    );
  }
}
