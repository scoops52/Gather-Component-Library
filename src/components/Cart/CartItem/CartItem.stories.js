import React from "react";
import CartItem from "./CartItem";
import cartItems from "../../../assets/cartItems";


export default {
    title: 'Cart/ Cart Item',
    component: CartItem,
}

export const CartItemExample = () => <CartItem {...cartItems[2]} />