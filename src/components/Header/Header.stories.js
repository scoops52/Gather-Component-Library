import React from "react";
import Header from "./Header";

export default {
    title: 'Header/ Header',
    component: Header,
}

export const Gather = () => <Header navItems={['Home', 'Products', 'About', 'Contact']}  />