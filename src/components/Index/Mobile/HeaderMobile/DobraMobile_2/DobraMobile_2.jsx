import React from "react";
import "./DobraMobile_2.css";

const DobraMobile_2 = () => {
  return (
    <div id="Diferente" className="DobraMobile-Container-2 w-full overflow-hidden flex flex-col items-center justify-around bg-slate-600 text-white">
      <h1 className="text-3xl max-w-[220px] text-center">
        O QUE TEMOS DE DIFERENTE ?
      </h1>

      <div
        id="carouselExampleCaptions"
        className=" border_style carousel slide relative flex flex-col items-center"
        data-bs-ride="carousel"
      >
        <div className=" carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner relative w-64 h-96 overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img
              src="/img/Dobra2/iconesD2/iconeCriativa.svg"
              className="block w-32 h-32 rounded-full ml-16"
              alt="..."
            />
            <div className=" top-52 carousel-caption  md:block absolute text-center">
              <h5 className="text-xl">NOSSA ECONOMIA É CRIATIVA</h5>
              <p className="mt-3" >
              Somos exclusivamente, dedicados á economia criativa.
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="/img/Dobra2/iconesD2/iconeNetwork.svg"
              className="block w-32 h-32 rounded-full ml-16"
              alt="..."
            />
            <div className=" top-52 carousel-caption  md:block absolute text-center">
              <h5 className="text-xl">NETWORKING</h5>
              <p className="mt-3">
              Conexões com redes de relacionamento, empresas e instituições nacionais e internacionais.
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="/img/Dobra2/iconesD2/iconeDesenvolvimento.svg"
              className="block w-32 h-32 rounded-full ml-16 "
              alt="..."
            />
            <div className=" top-52 carousel-caption  md:block absolute text-center">
              <h5 className="text-xl">DESENVOLVIMENTO</h5>
              <p className="mt-3">
              Acesso a programas de apoio, capacitação, financiamento, plataforma de dados e informações.
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="/img/Dobra2/iconesD2/iconeExpansao.svg"
              className="block w-32 h-32 rounded-full ml-16 "
              alt="..."
            />
            <div className=" top-52 carousel-caption  md:block absolute text-center">
              <h5 className="text-xl">EXPANSÃO</h5>
              <p className="mt-3">
              Conexões com mercados estrátegicos, para apoio á internacionalização e atração de negócios.
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="/img/Dobra2/iconesD2/iconeVirtual.svg"
              className="block w-32 h-32 rounded-full ml-16 "
              alt="..."
            />
            <div className=" top-52 carousel-caption  md:block absolute text-center">
              <h5 className="text-xl">RESIDENTE VIRTUAL</h5>
              <p className="mt-3">
              Possibilidade de empresas e profissionais de outras cidades participarem do P7 Criativo.


              </p>
            </div>
          </div>
        </div>
        <button
          className="opacity-100 carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="inline-block bg-no-repeat" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="fill"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className=" opacity-100  carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="inline-block bg-no-repeat" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="fill"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <button className="faca_parte_btn ">
        <h3>FAÇA PARTE DO P7</h3>
      </button>
    </div>
  );
};

export default DobraMobile_2;
// carousel-control-prev-icon
