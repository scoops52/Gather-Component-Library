import React from "react";
import NavBar from "./NavBar";

export default {
    title: 'Header/ NavBar',
    component: NavBar,
}

export const MonitoBar = () => <NavBar navItems={['Home', 'Products', 'About', 'Contact']} />