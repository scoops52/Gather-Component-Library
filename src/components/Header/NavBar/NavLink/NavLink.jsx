import React from 'react'
import { NavLinkStyled } from './NavLink.styles'

const NavLink = ({label, href}) => {
  return (
    <NavLinkStyled href={href} activeClassName= 'active'>{label}</NavLinkStyled>
  )
}

export default NavLink