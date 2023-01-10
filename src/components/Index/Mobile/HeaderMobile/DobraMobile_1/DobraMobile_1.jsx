import React from 'react'
import './DobraMobile_1.css'
import Whatsapp from '../../../../Whatsapp/Whatsapp'


const DobraMobile_1 = () => {
  return (
  <div className='DobraMobile-Container-1 w-full overflow-hidden flex flex-col  bg-slate-400 text-white ' >
    <Whatsapp/>
    <div className='aLL_TXT_mobile1'>
    <h1 className='text-left text-3xl max-w-xs'  > FAÇA PARTE DO PRIMEIRO E MAIS EXCLUSIVO HUB BRASILEIRO DA INDÚSTRIA CRIATIVA. </h1>
    <p className='max-w-[300px] my-10 mr-[20px] text-base' >Uma comunidade em que empresas e pessoas da Criatividade, inovação e tecnologia podem fazxer conexões, empreender, colaborar entre si e desenvolver negócios relevantes.</p>
    <button className='botao_parte_mobile my-20' >FAÇA PARTE</button>
    </div>
  </div>
    
  )
}

export default DobraMobile_1