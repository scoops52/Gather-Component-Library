import Button from '../../../components/Button/Button'
import React from 'react'
import { Modal, ModalContainer, ModalSectionWrapper } from './ClearCart.styles'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../../features/cartSlice'

const ClearCart = ({ setClearModalOpen }) => {
  const {cartItems} = useSelector(state => state.cart)
  const dispatch = useDispatch();
  
  const handleClearCart = () => {
      dispatch(clearCart());
      setClearModalOpen(false);
  }
  
  const handleKeepItems = () => {
    setClearModalOpen(false)
  }
  return (
    <ModalContainer>
        <Modal>
            <ModalSectionWrapper>
                <h1>Are you sure you want to clear your cart?</h1>
            </ModalSectionWrapper>
            <ModalSectionWrapper>
            <Button label='Keep Items' onClick={handleKeepItems} />
            <Button onClick={handleClearCart} label='Clear Cart' outline />
            </ModalSectionWrapper>
        </Modal>
    </ModalContainer>
  )
}

export default ClearCart