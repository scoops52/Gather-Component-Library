import React from 'react';
import Button from "./Button";


export default {
    title: 'Button',
    component: Button,
    args: {
        large: false
    }
}

// export const Default = () => <Button label='Default'/>;
// export const Outline = () => <Button label='Outline' outline />;
// export const Disabled = () => <Button label='Disabled' disabled />

const Template = (args) => <Button {...args} />

export const Default = Template.bind({});
Default.args = {
    label: 'Default',
    large: false
}

export const Outline = Template.bind({});
Outline.args = {
    label: 'Outline',
    outline: true
}

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Disabled',
    disabled: true
}