import React from 'react'
import { InputStyled } from './Input.styles'

const Input = ({placeholder, glass, type }) => {
  return (
    <InputStyled type={type} placeholder={placeholder} glass={glass} />
  )
}

export default Input