import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Header = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={"https://svgshare.com/i/SG0.svg"} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink exact to='/' activeStyle>
            Home
          </NavLink>
          <NavLink exact to='/projects' activeStyle>
            Projects
          </NavLink>
          <NavLink exact to='/about' activeStyle>
            About Me
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Header;