
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CategoriesContainer, CategoryWrapper, Checkbox, CheckboxLabel } from './Categories.styles'
import { filterProducts, unfilterProducts } from '../../../features/productsSlice'


const Categories = ({categories}) => {
    const [isChecked, setIsChecked] = useState(true);
    const { products, filteredProducts } = useSelector(state => state.products)
    const dispatch = useDispatch();

    const handleSelect = (e) => {
        const category = e.target.value;
        setIsChecked(e.target.checked);
        console.log(e.target.checked);
        if (e.target.checked) {
        dispatch(filterProducts(category));
        } else {
            dispatch(unfilterProducts(category));
        }
    }

    


  return (
    <CategoriesContainer>
        <h4>Filter by Category</h4>
        {categories.map(category => (
            <CategoryWrapper>
            <Checkbox 
                id={category} 
                value={category} 
                isChecked={isChecked}
                onChange={handleSelect}
                />
            <CheckboxLabel>{category.toUpperCase()}</CheckboxLabel>
        </CategoryWrapper>
        ))}
    </CategoriesContainer>
  )
}

export default Categories