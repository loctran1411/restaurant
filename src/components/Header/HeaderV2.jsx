import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_yen.png";
import closeIcon from '../../assets/images/close.png'
import openNav from '../../assets/images/menu-icon.png'
import './headerv2.css'

const HeaderV2 = () => {

  useEffect(() => {
    const openNavMenu = document.querySelector(".open-nav-menu"),
      closeNavMenu = document.querySelector(".close-nav-menu"),
      navMenu = document.querySelector(".nav-menu"),
      menuOverlay = document.querySelector(".menu-overlay"),
      mediaSize = 991;

    function toggleNav() {
      navMenu.classList.toggle("open");
      menuOverlay.classList.toggle("active");
      document.body.classList.toggle("hidden-scrolling");
    }

    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener("click", toggleNav);

    navMenu.addEventListener("click", (event) => {
      if (event.target.hasAttribute("data-toggle") &&
        window.innerWidth <= mediaSize) {
        // prevent default anchor click behavior
        event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
        // if menuItemHasChildren is already expanded, collapse it
        if (menuItemHasChildren.classList.contains("active")) {
          collapseSubMenu();
        }
        else {
          // collapse existing expanded menuItemHasChildren
          if (navMenu.querySelector(".menu-item-has-children.active")) {
            collapseSubMenu();
          }
          // expand new menuItemHasChildren
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
    });
    function collapseSubMenu() {
      navMenu.querySelector(".menu-item-has-children.active .sub-menu")
        .removeAttribute("style");
      navMenu.querySelector(".menu-item-has-children.active")
        .classList.remove("active");
    }
    function resizeFix() {
      // if navMenu is open ,close it
      if (navMenu.classList.contains("open")) {
        toggleNav();
      }
      // if menuItemHasChildren is expanded , collapse it
      if (navMenu.querySelector(".menu-item-has-children.active")) {
        collapseSubMenu();
      }
    }

    window.addEventListener("resize", function () {
      if (this.innerWidth > mediaSize) {
        resizeFix();
      }
    });
  }, [])

  return (
    <>
      <header className="header">
        {/* <div className="container"> */}
        <div className="header-main">
          <div className="logo">
            <Link to={'/'}><img src={logo} alt="logo" className='logo_img' /></Link>
          </div>
          <div className="open-nav-menu">
            {/* <span></span> */}
            <img src={openNav} alt="open"/>
          </div>
          <div className="menu-overlay">
          </div>
          <nav className="nav-menu">
            <div className="close-nav-menu">
              <img src={closeIcon} alt="close" />
            </div>
            <ul className="menu">
              <li className="menu-item">
                <a href="#gioi-thieu">Giới thiệu</a>
              </li>
              <li className="menu-item">
                <a href="#mon-ban-chay">Món bán chạy</a>
              </li>
              <li className="menu-item">
                <a href="#lien-he">Liên hệ</a>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#" data-toggle="sub-menu">Dropdown <i className="plus"></i></a>
                <ul className="sub-menu">
                  <li className="menu-item"><a href="#">Home 1</a></li>
                  <li className="menu-item"><a href="#">Home 2</a></li>
                  <li className="menu-item"><a href="#">Home 3</a></li>
                  <li className="menu-item"><a href="#">Home 4</a></li>
                </ul>
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