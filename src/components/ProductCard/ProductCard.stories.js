import React from "react";
import ProductCard from "./ProductCard";
import cartItems from "../../assets/cartItems";


export default {
    title: 'Product Card',
    component: ProductCard,
}

export const Jacket = () => 
<ProductCard product={cartItems[2]} />