import Button  from '../../../components/Button/Button'
import React from 'react'
import CreditCard from './CreditCard/CreditCard'
import { PaymentContainer } from './Payment.styles'

const Payment = () => {
  return (
    <PaymentContainer>
        <h1>Payment Information</h1>
        <CreditCard />
        <Button label='Purchase' large />
    </PaymentContainer>
  )
}

export default Payment