import React from 'react'
import { ButtonStyled } from './Button.styles'

const Button = ({label, outline, disabled}) => {
  return (
   <ButtonStyled>{label}</ButtonStyled>
  )
}

export default Button