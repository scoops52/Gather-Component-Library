import React from "react";
import Input from "./Input";

export default {
    title: 'input',
    component: Input,
    args: {
        placeholder: 'Default',
        glass: false,
    }
}

const Template = (args) => <Input {...args} />



export const Default = Template.bind({});
Default.args = {
    placeholder: 'Default',
    glass: false
}

export const Glass = Template.bind({});
Default.args = {
    placeholder: 'Glass',
    glass: true
}