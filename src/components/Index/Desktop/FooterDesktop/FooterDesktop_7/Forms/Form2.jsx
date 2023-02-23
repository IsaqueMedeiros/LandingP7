import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import InputMask from "react-input-mask";
import swal from 'sweetalert';

const Form2 = (props) => {
  // Função enviar e-mail Pessoa Física
  const form = useRef();

  const sendEmail2 = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d9njtb2",
        "template_hi2snml",
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
  function NextStepPF() {
    document.getElementById("pfStep1").style.display = "none";
    document.getElementById("pfStep2").style.display = "flex";
    document.getElementById("PassosPF-ModifyText").innerHTML = "Passo 2";
    document.getElementById("PassosPF-ModifyText").style.marginLeft = "-38px";
    document.getElementById("FillPF-NextStep").style.backgroundColor = "white";
    document.getElementById("FillPF-PrevStep").style.backgroundColor =
      "Transparent";
  }
  function BackStepPF() {
    document.getElementById("pfStep1").style.display = "flex";
    document.getElementById("pfStep2").style.display = "none";
    document.getElementById("PassosPF-ModifyText").innerHTML = "Passo 1 de 2";
    document.getElementById("PassosPF-ModifyText").style.marginLeft = "-50px";
    document.getElementById("FillPF-NextStep").style.backgroundColor =
      "Transparent";
    document.getElementById("FillPF-PrevStep").style.backgroundColor = "white";
  }
  // Função enviar e-mail Pessoa Física (END)
  // Função resetar informações do formulário
  function resetForm2(event) {
    event.preventDefault();
    document.getElementById("showForm").reset();
  }
  // Função resetar informações do formulário (END)
  const checkKeyDown = (e) => {
    if (e.code === 'Enter') e.preventDefault();
  };
  return (
    <form
    onKeyDown={(e) => checkKeyDown(e)}
      ref={form}
      onSubmit={sendEmail2}
      id="showForm"
      className="pessoaFisicaForm"
    >
      <div className="divPassosPJ flex flex-row items-center justify-center absolute">
        <button
          id="FillPF-PrevStep"
          type="button"
          className="buttonPJAnteriorBall bg-white rounded-full"
          onClick={BackStepPF}
        ></button>
        <button
          id="FillPF-NextStep"
          type="button"
          className="buttonPJNextBall rounded-full"
          onClick={NextStepPF}
        ></button>
        <p id="PassosPF-ModifyText" className="passosPJText text-xs	text-white">
          Passo 1 de 2
        </p>
      </div>

      <div id="pfStep1" className="pessoaJuridicaConteudo1 overflow-hidden">
        <input
          type="text"
          name="user_namePF"
          placeholder="  Nome da Pessoa*"
          className="inputForm"
          required
        />
        <input
          name="user_emailPF"
          type="email"
          placeholder="  E-mail*"
          className="inputForm"
          required
        />
        <InputMask
          mask="(99) 99999-9999"
          onChange={props.onChange}
          value={props.value}
          type="text"
          name="user_phonePF"
          placeholder="Telefone*"
          className="inputForm"
          required
        />
        <input
          type="text"
          name="user_empresaPF"
          placeholder="Nome da empresa*"
          className="inputForm"
          required
        />
        <button
          onClick={NextStepPF}
          type="button"
          className="buttonPJProximo bg-white "
        >
          <p className="text-[#883093]" >Próximo</p>
        </button>
      </div>
      <div id="pfStep2" className="pessoaJuridicaConteudo2 hidden">
        <InputMask
          mask="999.999.999-99"
          onChange={props.onChange}
          value={props.value}
          name="user_cpf"
          type="text"
          placeholder=" CPF*"
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
                name="user_coworkingPF"
                className="inputType-CheckStyle"
              />
              <label className="text-white labelCheck-TXT">Coworking</label>
            </div>
            <div>
              <input
                value={"sala Privativa"}
                type="checkbox"
                name="user_salaPrivativaPF"
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
                name="user_andarCorridoPF"
                className="inputType-CheckStyle"
              />
              <label className="text-white labelCheck-TXT">Andar Corrido</label>
            </div>

            <div>
              <input
                value={"Sala de reunião"}
                type="checkbox"
                name="user_salaReuniaoPF"
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
                name="user_auditorioPF"
                className="inputType-CheckStyle"
              />
              <label className="text-white labelCheck-TXT">Auditório</label>
            </div>

            <div>
              <input
                value={"Evento"}
                type="checkbox"
                name="user_eventoPF"
                className="inputType-CheckStyle"
              />
              <label className="text-white labelCheck-TXT">Evento</label>
            </div>
          </div>
        </div>

        <input
          onClick={resetForm2}
          type="submit"
          value="Enviar Formulário"
          className="enviarpjBTN bg-white cursor-pointer text-white"
        />
      </div>
    </form>
  );
};

export default Form2;
