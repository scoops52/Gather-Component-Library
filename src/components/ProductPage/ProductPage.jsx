import React from 'react'
import { ProductDetails } from '../ProductCard/ProductCard.styles'
import { ProductDescription, ProductImageWrapper, ProductPageImage, ProductPageInfo, ProductPageWrapper, ProductPageName, ProductPageDetails, ProductPagePrice } from './ProductPage.styles'
import Button from '../Button/Button'
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cartSlice';
import { filterProducts } from '../../features/productsSlice';

const ProductPage = ({product}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
    dispatch(filterProducts(product.category))
  };

  return (
    <ProductPageWrapper>
        <ProductImageWrapper>
            <ProductPageImage src={product.image} alt='product' />
        </ProductImageWrapper>
        <ProductPageInfo>
            <ProductPageName>{product.title}</ProductPageName>
            <ProductPageDetails>
                <ProductPagePrice>${product.price}</ProductPagePrice>
                <ProductDetails>{product.rating.rate}</ProductDetails>
            </ProductPageDetails>
            <ProductDescription>{product.description}</ProductDescription>
            <Button label='Add to Cart' onClick={handleAddToCart} />
        </ProductPageInfo>
    </ProductPageWrapper>
  )
}

export default ProductPage