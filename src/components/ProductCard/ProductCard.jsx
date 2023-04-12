import React from 'react'
import { CardWrapper, ProductDetails, ProductImage, ProductInfo, ProductName, ProductPrice } from './ProductCard.styles'

const ProductCard = ({product}) => {
  return (
    <CardWrapper href='/'>
        <ProductImage src={product.image} alt='product' />
        <ProductInfo>
            <ProductName>{product.title}</ProductName>
            <ProductDetails>{product.rating.rate}/5</ProductDetails>
            <ProductPrice>${product.price}</ProductPrice>
        </ProductInfo>
    </CardWrapper>
  )
}

export default ProductCard