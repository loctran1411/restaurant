import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/images/logo_yen.png";
import './headerv2.css'
import '../helper/Navbar.js'

const HeaderV2 = () => {

  return (
    <>
      <header className="header">
        {/* <div className="container"> */}
          <div className="header-main">
            <div className="logo">
              <a href="#">Logo</a>
            </div>
            <div className="open-nav-menu">
              <span></span>
            </div>
            <div className="menu-overlay">
            </div>
            <nav className="nav-menu">
              <div className="close-nav-menu">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/controller-and-music/turn-off-button-red-icon.svg" alt="close" />
              </div>
              <ul className="menu">
                <li className="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">Home <i className="plus"></i></a>
                  <ul className="sub-menu">
                    <li className="menu-item"><a href="#">Home 1</a></li>
                    <li className="menu-item"><a href="#">Home 2</a></li>
                    <li className="menu-item"><a href="#">Home 3</a></li>
                    <li className="menu-item"><a href="#">Home 4</a></li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="#">About</a>
                </li>
                <li className="menu-item">
                  <a href="#">Services</a>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">Pages <i className="plus"></i></a>
                  <ul className="sub-menu">
                    <li className="menu-item"><a href="#">page 1</a></li>
                    <li className="menu-item"><a href="#">page 2</a></li>
                    <li className="menu-item"><a href="#">page 3</a></li>
                    <li className="menu-item"><a href="#">page 4</a></li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="#">News</a>
                </li>
                <li className="menu-item">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        {/* </div> */}
      </header>
    </>
  )
}

export default HeaderV2
// https://react-bootstrap.github.io/components/navbar/#sticky-top