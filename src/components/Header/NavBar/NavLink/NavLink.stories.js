import React from "react";
import NavLink from "./NavLink";

export default {
    title: 'Header/ NavBar/ NavLink',
    component: NavLink,
    args: {
        active: false,
        href: '#',
        activeClassName: '',
    },
}

const Template = (args) => <NavLink {...args} />

export const Default = Template.bind({});
Default.args = {
    label: 'NavLink',
    active: false,
}

export const Active = Template.bind({});
Active.args = {
  label: 'Active Link',
  activeClassName: 'active',
};