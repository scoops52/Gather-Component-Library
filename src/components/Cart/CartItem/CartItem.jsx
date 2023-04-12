import { ProductName, ProductPrice } from '../../ProductCard/ProductCard.styles'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { CartItemImage, CartItemInfo, CartItemName, CartItemTitle, CartItemWrapper, CartItemPrice, ClearItem } from './CartItem.style'
import CartItemQuantity from './CartItemQuantity/CartItemQuantity'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../../features/cartSlice'

const CartItem = ({id}) => {
  const dispatch=useDispatch();
  const {image, title, amount, price} = useSelector(state => state.cart.cartItems.find(item => item.id === id));


  const handleIncrease = () => dispatch(increase(id)); 
  const handleRemove = () => dispatch(removeItem(id));
  return (
    <CartItemWrapper>
        <CartItemTitle>
            <CartItemImage src={image} alt='' />
            <CartItemName href='/'>{title}</CartItemName>
        </CartItemTitle>
        <CartItemInfo>
            <CartItemQuantity amt={amount} id={id} />
            <CartItemPrice onClick={handleIncrease}>${(amount*price).toFixed(2)}</CartItemPrice>
            <ClearItem onClick={handleRemove}>
                <FontAwesomeIcon icon={faTrashCan} />
            </ClearItem>
        </CartItemInfo>
    </CartItemWrapper>
  )
}

export default CartItem