import React from 'react'
import CopyrightBar from './CopyrightBar/CopyrightBar'
import { FooterContainer } from './Footer.styles'
import SignUp from './SignUp/SignUp'

const Footer = () => {
  return (
    <FooterContainer>
        <SignUp />
        <CopyrightBar />
    </FooterContainer>
  )
}

export default Footer