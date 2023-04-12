import React from 'react'
import { ButtonStyled } from './Button.styles'

const Button = ({label, outline, disabled, large, onClick}) => {
  return (
   <ButtonStyled onClick={onClick} outline={outline} disabled={disabled} large={large}>{label}</ButtonStyled>
  )
}

export default Button