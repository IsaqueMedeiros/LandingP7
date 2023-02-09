import React, { Component } from "react";
import './BodyDesktop_3.css'
import Slider from "react-slick";


export default class BodyDesktop_3 extends Component {
  
  
   
    render() {
        const settings = {
          arrows:false,
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1499,
              settings: {
                arrows:false,
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
        
        };
      return (
        <div id="Espaços" className="ContainerDesktop_3 w-full flex flex-col justify-evenly bg-slate-400 overflow-hidden text-white">
           <h1 className="Title-Fonts-Size-Desktop-Version titulo-desktop3 flex flex-col items-center">
             ESPAÇOS DO TAMANHO DA SUA NECESSIDADE.
          </h1>
        <div className="ScrollSide-position flex flex-col justify-around" >
          <Slider {...settings}>
            <div className="text-center Scrollside-Desktop coworkimg" >
              <p className="espacostxtC3 " >Estações de coworking</p>
            </div>
            <div  className="text-center Scrollside-Desktop salaPrivativaimg" >
              <p className="espacostxtC3">Salas Privativas</p>
            </div>
            <div  className="text-center Scrollside-Desktop andarCorridoimg" >
              <p className="espacostxtC3" >Andares Corridos</p>
            </div>
            <div  className="text-center Scrollside-Desktop salaReuniaoimg" >
              <p className="espacostxtC3" >Salas de reunião</p>
            </div>
            <div  className="text-center Scrollside-Desktop auditorioimg" >
              <p className="espacostxtC3" >Auditório</p>
            </div>
            <div  className="text-center Scrollside-Desktop restauranteimg" >
              <p className="espacostxtC3" >Restaurante</p>
            </div>
          </Slider>
        </div>
          <div className="flex flex-col items-center container-interessou-btn">
            <button className="interessou-btn-desk" >
                <h2 className="txt-interessou-btn Text-Fonts-Size-Desktop-Version" >INTERESSOU? CONSULTE VALORES</h2>
            </button>
        </div>
      </div>
        
      );
    }
  }

