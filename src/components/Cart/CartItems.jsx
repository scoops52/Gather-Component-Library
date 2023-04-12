import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartButtons, CartContainer, CartHeader, CartInfo, CartTitle, CartTotals, ContinueShoppingLink } from './CartItems.styles'
import CartItem from './CartItem/CartItem'
import { calculateTotals } from '../../features/cartSlice'
import Button from '../Button/Button'
import ClearCart from './ClearCart/ClearCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const CartItems = () => {
  const {cartItems, total, amount } = useSelector(state => state.cart);
  const [clearModalOpen, setClearModalOpen] = useState(false)
  const dispatch = useDispatch();

  const handleClear = (e) => {
    setClearModalOpen(true);
    console.log(clearModalOpen)
  }

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems])


  return (
    <>
    {clearModalOpen && <ClearCart setClearModalOpen={setClearModalOpen} />}
    <CartContainer>
        <CartHeader>
          <CartTitle>Shopping Cart</CartTitle>
          <ContinueShoppingLink href=''>
          <FontAwesomeIcon icon={faChevronLeft} />
            Continue Shopping
            </ContinueShoppingLink>
        </CartHeader>
        {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
        ))}
        <CartInfo>
        <CartButtons>
          <Button onClick={handleClear} label='Clear Cart' large outline/>
        </CartButtons>
        <CartTotals>
            <h4>Cart Total:</h4>
            <h4>${total.toFixed(2)}</h4>
        </CartTotals>
        </CartInfo>
    </CartContainer>
    </>
  )
}

export default CartItems