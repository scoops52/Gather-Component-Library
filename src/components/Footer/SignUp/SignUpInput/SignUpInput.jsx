import Input from '../../../Input/Input'
import Button from '../../../Button/Button'
import React from 'react'
import { SignUpInputWrapper, SignUpInputBar } from './SignUpInput.styles'

const SignUpInput = () => {
  return (
    <SignUpInputWrapper>
        <SignUpInputBar type='text' placeholder='Enter your Email' />
        <Button label='Subscribe Now' />
    </SignUpInputWrapper>
  )
}

export default SignUpInput