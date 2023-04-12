import { images } from '../../assets'
import React from 'react'
import NavBar from './NavBar/NavBar'
import { HeaderStyled, SectionStyled } from './Header.styles'
import Search from './Search/Search'
import Button from '../Button/Button'

const Header = ({navItems}) => {
  return (
    <HeaderStyled>
      <SectionStyled>
        <img src={images.Logo} alt="logo" />
        <NavBar navItems={navItems} />
        </SectionStyled>
      <SectionStyled>
        <Search />
        <Button label='Join the community' large />
      </SectionStyled>
    </HeaderStyled>
  )
}

export default Header