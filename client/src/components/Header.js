import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
import styles from './Components.module.css'

const Header = () => {
  return (
    <div className={styles.sticky}>
      <Nav>
        <NavLink to='/'>
          <img className={styles.Image} src={"https://svgshare.com/i/SG0.svg"} alt='logo' />
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
    </div>
  );
};

export default Header;