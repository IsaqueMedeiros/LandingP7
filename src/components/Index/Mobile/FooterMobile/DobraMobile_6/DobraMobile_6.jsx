import React, { Component } from "react";
import Slider from "react-slick";
import './DobraMobile_6.css'


export default class DobraMobile_6 extends Component {
    render() {
      const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 699,
            settings: {
              slidesToShow:3,
              slidesToScroll:3,
              arrows: false,
            }
          },
          {
            breakpoint: 499,
            settings: {
              slidesToShow:2,
              slidesToScroll:2,
              arrows: false,
            }
          }
        ]
      };
      return (
    <div id="QuemEstaNoP7" className="DobraMobile-Container-6 w-full overflow-hidden flex flex-col  justify-around bg-slate-600 text-white">
        <div className='Textos_Mobile-Container6'>
             <h1 className="Titulo_Inovação_Mobile6" >ONDE CRIATIVIDADE E INOVAÇÃO ACONTECEM.</h1>
             <p className="Txt_Mobile6" >Estamos em um prédio icônico de 25 andares, no centro de BH, projetado por Oscar Niemeyer na década de 50, inteiramente dedicado à criatividade, inovação e negócios.</p>
             <button className="AgendeTour_btn_mobile rounded-full">AGENDE UM TOUR PRESENCIAL</button>
         </div>
        <div className="ScrollSide_AutoMobile-Position" >
          <h1 className="Text_ScrollSide_Mobile flex flex-col " >GRANDES EMPRESAS<br/> JA ESTÃO NO P7</h1>
          <Slider {...settings}>
            <div className="AutoPlay_Mobile_Style logo42BHMobile" >
            </div>
            <div className="AutoPlay_Mobile_Style logoSenaiF6Mobile">
            </div>
            <div className="AutoPlay_Mobile_Style logoSesiF6Mobile">
            </div>
            <div className="AutoPlay_Mobile_Style logoIELF6Mobile">
            </div>
            <div className="AutoPlay_Mobile_Style logoFIEMGF6Mobile">
            </div>
            <div className="AutoPlay_Mobile_Style LogoNeoVenturesMobile">
            </div>
          </Slider>
        </div>
    </div>
      );
    }
  }

