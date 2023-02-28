import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DobraMobile_3.css";

export default class DobraMobile_3 extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 499,
          settings: {
            slidesToShow: 1.1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 399,
          settings: {
            slidesToShow: 1.1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 369,
          settings: {
            slidesToShow: 1.09,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    };
    return (
      <div
        id="Espaços"
        className="DobraMobile-Container-3 w-full overflow-hidden flex flex-col justify-around bg-slate-400 text-white"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-3xl max-w-[350px] text-justify">
            ESPAÇOS DO TAMANHO DA SUA NECESSIDADE.
          </h1>
        </div>
        <div className="ScrollSide-mobille-responsividade flex flex-col justify-center ">
          <Slider {...settings}>
            <div className="text-center Scrollside-Mobile coworkingMobile">
              <h3 className="BKTXT3Mobile">Estações de coworking</h3>
            </div>
            <div className="text-center Scrollside-Mobile salaPrivativaimgMobile">
              <h3 className="BKTXT3Mobile">Salas Privativas</h3>
            </div>
            <div className="text-center Scrollside-Mobile andarCorridoimgMobile">
              <h3 className="BKTXT3Mobile">Andares Corridos</h3>
            </div>
            <div className="text-center Scrollside-Mobile salaReuniaoimgMobile">
              <h3 className="BKTXT3Mobile">Salas de reunião</h3>
            </div>
            <div className="text-center Scrollside-Mobile auditorioimgMobile">
              <h3 className="BKTXT3Mobile">Auditório</h3>
            </div>
            <div className="text-center Scrollside-Mobile restauranteimgMobile">
              <h3 className="BKTXT3Mobile">Restaurante</h3>
            </div>
          </Slider>
        </div>
        <div className="flex flex-col items-center">
          <a
            href=" https://api.whatsapp.com/send?phone=996905648&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20P7! "
            target="_blank"
          >
            <button className="interessou_btn">
              <h3>INTERESSOU? CONSULTE VALORES</h3>
            </button>
          </a>
        </div>
      </div>
    );
  }
}
