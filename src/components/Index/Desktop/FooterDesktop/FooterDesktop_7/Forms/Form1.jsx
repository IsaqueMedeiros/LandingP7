import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import InputMask from "react-input-mask";
import swal from 'sweetalert';

const Form1 = (props) => {
  // Função enviar e-mail Pessoa Jurídica
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1dih59p",
        "template_yiq3s0v",
        form.current,
        "o8WACeuGJmjYq0MZi"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal("Email enviado");
        },
        (error) => {
          console.log(error.text);
        }
      ).then(
        document.getElementById("hideForm").reset()
      );
  };
  // Função enviar e-mail Pessoa Jurídica (END)

  //   Funçoes de Nest step / circulo e texto Passo 1 de 2
  function NextStepPJ() {
    document.getElementById("pjStep1").style.display = "none";
    document.getElementById("pjStep2").style.display = "flex";
    document.getElementById("PassosPJ-ModifyText").innerHTML = "Passo 2";
    document.getElementById("PassosPJ-ModifyText").style.marginLeft = "-38px";
    document.getElementById("FillPJ-NextStep").style.backgroundColor = "white";
    document.getElementById("FillPJ-PrevStep").style.backgroundColor =
      "Transparent";
  }
  function BackStepPJ() {
    document.getElementById("pjStep1").style.display = "flex";
    document.getElementById("pjStep2").style.display = "none";
    document.getElementById("PassosPJ-ModifyText").innerHTML = "Passo 1 de 2";
    document.getElementById("PassosPJ-ModifyText").style.marginLeft = "-50px";
    document.getElementById("FillPJ-NextStep").style.backgroundColor =
      "Transparent";
    document.getElementById("FillPJ-PrevStep").style.backgroundColor = "white";
  }
  //   Funçoes de Nest step / circulo e texto Passo 1 de 2 (END)

  // Função resetar informações do formulário
  // function resetForm(event) {
  //   event.preventDefault();
  //   document.getElementById("hideForm").reset();
  // }
  // Função resetar informações do formulário (END)

  const checkKeyDown = (e) => {
    if (e.code === 'Enter') e.preventDefault();
  };

  return (
    <form
      onKeyDown={(e) => checkKeyDown(e)}
      ref={form}
      onSubmit={sendEmail}
      id="hideForm"
      className="pessoaJuridicaForm"
    >
      <div className="divPassosPJ flex flex-row items-center justify-center absolute">
        <button
          id="FillPJ-PrevStep"
          type="button"
          className="buttonPJAnteriorBall bg-white rounded-full"
          onClick={BackStepPJ}
        ></button>
        <button
          id="FillPJ-NextStep"
          type="button"
          className="buttonPJNextBall rounded-full"
          onClick={NextStepPJ}
        ></button>
        <p id="PassosPJ-ModifyText" className="passosPJText text-xs	text-white">
          Passo 1 de 2
        </p>
      </div>

      <div id="pjStep1" className="pessoaJuridicaConteudo1 overflow-hidden">
        <input
          name="user_namePJ"
          type="text"
          placeholder="  Nome da Pessoa*"
          className="inputForm"
          required
        />
        <input
          name="user_emailPJ"
          type="email"
          placeholder="  E-mail de Trabalho*"
          className="inputForm"
          required
        />
        <InputMask
          mask="(99) 99999-9999"
          onChange={props.onChange}
          value={props.value}
          name="user_phonePJ"
          type="text"
          placeholder="Telefone*"
          className="inputForm"
          required
        />
        <input
          name="user_empresaPJ"
          type="text"
          placeholder="Nome da empresa*"
          className="inputForm"
          required
        />
        <button
          onClick={NextStepPJ}
          type="button"
          className="buttonPJProximo bg-white " // onClick={}
        >
          <p className="text-[#883093]" >Próximo</p>
        </button>
      </div>

      <div id="pjStep2" className="pessoaJuridicaConteudo2 hidden">
        <InputMask
          mask="99.999.999/9999-99"
          onChange={props.onChange}
          value={props.value}
          name="user_CNPJ"
          type="text"
          placeholder=" CNPJ*"
          className="inputForm"
          required
        />
        <div className="containerInputCheck flex flex-col items-center justify-around">
          <p className="text-white titleInput-Check">Qual sua necessidade?</p>

          <div className="allCheckInput grid grid-rows-6 grid-cols-2 gap-x-0 gap-y-10">
            <div>
              <input
                value={"Co-working"}
                type="checkbox"
                name="user_coworkingPJ"
                className="inputType-CheckStyle"
              />
              <label className="text-white labelCheck-TXT">Coworking</label>
            </div>
            <div>
              <input
                value={"sala Privativa"}
                type="checkbox"
                name="user_salaPrivativaPJ"
                className="inputType-CheckStyle"
              />
              <label className="text-white labelCheck-TXT">
                Sala Privativa
              </label>
            </div>

            <div>
              <input
                value={"Andar Corrido"}
                type="checkbox"
                name="user_andarCorridoPJ"
                className="inputType-CheckStyle"
              />
              <label className="text-white labelCheck-TXT">Andar Corrido</label>
            </div>

            <div>
              <input
                value={"Sala de reunião"}
                type="checkbox"
                name="user_salaReuniaoPJ"
                className="inputType-CheckStyle"
              />
              <label className="text-white labelCheck-TXT">
                Sala de reunião
              </label>
            </div>

            <div>
              <input
                value={"Auditório"}
                type="checkbox"
                name="user_auditorioPJ"
                className="inputType-CheckStyle"
              />
              <label className="text-white labelCheck-TXT">Auditório</label>
            </div>

            <div>
              <input
                value={"Evento"}
                type="checkbox"
                name="user_eventoPJ"
                className="inputType-CheckStyle"
              />
              <label className="text-white labelCheck-TXT">Evento</label>
            </div>
          </div>
        </div>

        <input
          type="submit"
          value="Enviar Formulário"
          className="enviarpjBTN bg-white cursor-pointer text-white"
        />
      </div>
     
    </form>
  );
};

export default Form1;
