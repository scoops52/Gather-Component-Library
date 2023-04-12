import { images } from './../../../../../assets'
import React from 'react'
import { CardTypeLogo, CreditCardTypeWrapper } from './CreditCardType.styles'
import { InputLabel } from '../CreditCard.styles'


const CreditCardType = () => {
  return (
    <CreditCardTypeWrapper>
        <InputLabel>Card Type</InputLabel>
        <CardTypeLogo src={images.MasterCard} alt=''  width={75} height={55}/>
        <CardTypeLogo src={images.Visa} alt='Visa'  width={75} height={55}/>
        <CardTypeLogo src={images.RuPay} alt='RuPay'  width={75} height={55}/>
    </CreditCardTypeWrapper>
  )
}

export default CreditCardType