import React from 'react'
import './DobraMobile_4.css'

const DobraMobile_4 = () => {
  return (
    <div id='Serviços' className="DobraMobile-Container-4 w-full overflow-hidden flex flex-col items-center justify-evenly bg-white">
           <h1 className="title_mobile4 max-w-[350px] text-justify text-[#883093]">
        NO P7, VOCÊ TEM:
      </h1>
      <div className="grid grid-rows-4 grid-cols-2 gap-0 justify-items-center w-full mb-32">   
        <div className='w-16 h-16 bg-slate-300 flex justify-center items-center rounded-full mt-16 ml-16 AppIconC4' > <p className='txt_ballimg' >Endereço fiscal para sua empresa</p></div>
        <div className='w-16 h-16 bg-slate-300 flex justify-center items-center rounded-full mt-16 mr-16 VisiIconC4' > <p className='txt_ballimg' >Visibilidade nacional e internacional</p></div>
        <div className='w-16 h-16 bg-slate-300 flex justify-center items-center rounded-full mt-16 ml-16 RecepcaoIconC4' > <p className='txt_ballimg' >Recepção e gestão de correspondências</p></div>
        <div className='w-16 h-16 bg-slate-300 flex justify-center items-center rounded-full mt-16 mr-16 CopaIconC4' > <p className='txt_ballimg' >Copa e área de convivência</p></div>
        <div className='w-16 h-16 bg-slate-300 flex justify-center items-center rounded-full mt-16 ml-16 InfoIconC4' > <p className='txt_ballimg' >Acesso ao nosso APP com notícias e informações</p></div>
        <div className='w-16 h-16 bg-slate-300 flex justify-center items-center rounded-full mt-16 mr-16 EstudoIconC4' > <p className='txt_ballimg' >Acesso a estudos de mercado e pesquisaa</p></div>
        <div className='w-16 h-16 bg-slate-300 flex justify-center items-center rounded-full mt-16 ml-16 CondIconC4' > <p className='txt_ballimg' >Condições especiais para usar o auditório e salas de reunião</p></div>
        <div className='w-16 h-16 bg-slate-300 flex justify-center items-center rounded-full mt-16 mr-16 DescontoIconC4' > <p className='txt_desc' >Descontos em cursos</p></div>
    </div>
      <button className="Garanta_btn text-white">
        <h3>GARANTA SEU LUGAR NO P7</h3>
      </button>
</div>
  )
}

export default DobraMobile_4;