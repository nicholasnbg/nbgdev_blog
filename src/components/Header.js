import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'




class Header extends Component {
  render() {
    const { location: { pathname }, title } = this.props

    // to be used to map links into header
    const links = ['about']

    const navLinks = (
      links.map(link => (
        <NavLink >
          <HeaderLink to={`/${link}`} currentPage={pathname === `/${link}`} >
            {link.toUpperCase()}
          </HeaderLink>
        </NavLink>
      ))
    )

    return (
      <HeaderWrapper>
        <Logo>
          <HeaderLink to={`/`} currentPage={pathname === '/'} >
            {title}
          </HeaderLink>
        </Logo>

        {navLinks}
      </HeaderWrapper>
    )
  }
}

export default Header

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0 0 50px;
  position: fixed;
  width: 100%;
  background: rgba(255,255,255,0.7);
  top: 0;
  left: 0;
`

const Logo = styled.h2`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
  margin-right: 35px;
`

const NavLink = styled.h4`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
  margin-right: 20px;
`

const HeaderLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: ${props => props.currentPage ? `rgb(102, 51, 153)` : `inherit`}
` 