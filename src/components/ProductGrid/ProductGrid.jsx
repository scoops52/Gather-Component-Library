
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard'
import { GridStyled, ProductsGridContainer, ProductsGridTitle } from './ProductGrid.styles'
import { getProducts } from '../../features/productsSlice';

const ProductGrid = () => {
  const { products, isLoading } = useSelector(state => state.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    console.log(products);
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <ProductsGridContainer>
      <ProductsGridTitle>Products</ProductsGridTitle>
      <GridStyled>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </GridStyled>
    </ProductsGridContainer>
  )
}

export default ProductGrid