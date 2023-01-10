import React from 'react'
import Whatsapp from '../../Whatsapp/Whatsapp'
import HeaderDesktop from './HeaderDesktop/HeaderDesktop'
import BodyDesktop from './BodyDesktop/BodyDesktop'
import FooterDesktop from './FooterDesktop/FooterDesktop'

const IndexDesktop = () => {
  return (
    <>
      <Whatsapp/>
      <HeaderDesktop/>
      <BodyDesktop/>
      <FooterDesktop/>
    </>
  )
}

export default IndexDesktop;