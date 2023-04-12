import React from 'react'
import { SignUpContainer, SignUpText } from './SignUp.styles'
import SignUpInput from './SignUpInput/SignUpInput'

const SignUp = () => {
  return (
    <SignUpContainer>
        <SignUpText>Sign Up for our newsletter to recieve updates on available products</SignUpText>
        <SignUpInput />
    </SignUpContainer>
  )
}

export default SignUp