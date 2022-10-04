import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/logo-no-background.png';

const Menu = () => {
  return (
    <>
      <p><a href="/">Home</a> </p>
      <p><a href="#aboutSGA">About SGA</a> </p>
      <p><a href="#aboutMe">About Me</a> </p>
    </>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gsa__navbar gradient__bg-hd section__padding">
      <div className="gsa__navbar-links">
        <div className='gsa__navbar-links_logo'>
          <img className="img" src={logo} alt="logo" width="150px" height="56px" />
        </div>
        <div className="gsa__navbar-links_container">
          <Menu />
        </div>
        <div className='gsa__navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color="#DF7861" size="40" onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#DF7861" size="40" onClick={() => setToggleMenu(true)} /> 
          }
          {toggleMenu && (
            <div className='gsa__navbar-menu_container scale-up-center'>
              <div className='gsa__navbar-menu_container-links'>
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar;