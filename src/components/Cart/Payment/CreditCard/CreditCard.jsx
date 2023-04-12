import React from 'react'
import { CardInfoWrapper, InputLabel, SharedInputWrapper } from './CreditCard.styles'
import { CardType } from './CreditCardType/CreditCardType.stories'
import Input from '../../../Input/Input'

const CreditCard = () => {
    return (
        <CardInfoWrapper>
            <CardType />
            <InputLabel>Name on card</InputLabel>
            <Input glass type='text' placeholder='Name' required />
            <InputLabel>Card Number</InputLabel>
            <Input glass type='text' placeholder='1111 2222 3333 4444' pattern='[0-9]{13,16}' required />
            <SharedInputWrapper>
                <div>
                <InputLabel>Expiration Date</InputLabel>
                <Input glass type='text' placeholder='MM/YY' pattern='(0[1-9]|1[0-2])\/([0-9]{2})' required />
                </div>
                <div>
                <InputLabel>CVV</InputLabel>
                <Input glass type='text' placeholder='123' pattern='[0-9]{3}' required />
                </div>
            </SharedInputWrapper>
        </CardInfoWrapper>
    )
}

export default CreditCard