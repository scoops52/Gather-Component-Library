import React from 'react';
import Button from '@/components/Button/Button';
import CartItems from '@/components/Cart/CartItems';
import { images } from '../assets';
import Image from 'next/image';
import { CardTypeLogo } from '@/components/Cart/Payment/CreditCard/CreditCardType/CreditCardType.styles';
import CreditCardType from '@/components/Cart/Payment/CreditCard/CreditCardType/CreditCardType';

const components = () => {
  return (
    <div>
        <CartItems />
        <Image src={images.Logo} alt='logo' width={199} height={73}/>
        <CardTypeLogo src={images.Logo} alt='logo' width={199} height={73}/>
        <CreditCardType />
    </div>
  )
}

export default components