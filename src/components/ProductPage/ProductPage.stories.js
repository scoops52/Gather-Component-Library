import React from "react";
import ProductPage from "./ProductPage";
import cartItems from "../../assets/cartItems";


export default {
    title: 'Product Page',
    component: ProductPage,
}

export const JacketPage = () => <ProductPage product={cartItems[3]} />