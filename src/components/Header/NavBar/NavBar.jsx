import React from 'react';
import { NavBarStyled } from './NavBar.styles';
import NavLink from './NavLink/NavLink';

const NavBar = ({navItems}) => {
  return (
    <NavBarStyled>
        {navItems.map((item) => (
            <li key={item}>
                <NavLink label={item} href={item} />
            </li>
        ))}
    </NavBarStyled>
  )
}

export default NavBar