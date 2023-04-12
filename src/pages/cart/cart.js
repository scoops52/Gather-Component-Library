import React from 'react'
import { CartPageContainer } from './cart.styles'
import CartItems from '@/components/Cart/CartItems'
import Payment from '@/components/Cart/Payment/Payment'
import { images } from '@/assets'

const cart = () => {
  return (
    <CartPageContainer>
      <CartItems />
      <Payment />
    </CartPageContainer>
  )
}

export default cart