import React from "react";
import Button from "./Button";

export default {
    title: 'Button',
    component: Button,
}

export const Default = () => <Button label='Default'/>;
export const Outline = () => <Button label='Outline' outline />;
export const Disabled = () => <Button label='Disabled' disabled />