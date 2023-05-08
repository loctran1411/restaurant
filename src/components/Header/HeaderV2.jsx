import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_yen.png";
import closeIcon from '../../assets/icon/close.png'
import openNav from '../../assets/icon/menu-icon.png'
import more_lobby_icon from '../../assets/icon/menu.png'
import { navItem, dropdownNavbar } from '../../assets/fake-data/navItem'
import './headerv2.css'
import { Modal, Button } from 'react-bootstrap';

function CustomModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='modal_img'>
          <img src={props.img} alt="lobby img" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Đóng</Button>
      </Modal.Footer>
    </Modal>
  );
}

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

  const [modalShow, setModalShow] = useState(false);
  const [dropdownImg, setDropdownImg] = useState({})

  return (
    <>
      <header className="header">
        <div className="header-main">
          <div className="logo">
            <Link to={'/'}><img src={logo} alt="logo" className='logo_img' /></Link>
          </div>
          <div className="open-nav-menu">
            {/* <span></span> */}
            <img src={openNav} alt="open" />
          </div>
          <div className="menu-overlay">
          </div>
          <nav className="nav-menu">
            <div className="close-nav-menu">
              <img src={closeIcon} alt="close" />
            </div>
            <ul className="menu">
              {
                navItem.map((i) => (
                  <li className="menu-item" key={i.id}>
                    <a href={i.href}><img src={i.icon} alt={i.alt} />{i.name}</a>
                  </li>
                ))
              }

              <li className="menu-item menu-item-has-children">
                <a href="#sanh-tiec" data-toggle="sub-menu"><img src={more_lobby_icon} alt="more-lobby" /> Sảnh <i className="plus"></i></a>
                <ul className="sub-menu">
                  {
                    dropdownNavbar.map((i) => (
                      <li className="menu-item" key={i.id}>
                        <a href="#" onClick={() => {
                          setModalShow(true)
                          setDropdownImg(i.img)
                        }}><img src={i.icon} alt="arrow" />{i.title}</a>

                      </li>
                    ))
                  }
                  <CustomModal
                    show={modalShow}
                    img={dropdownImg}
                    onHide={() => setModalShow(false)}
                  />
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default HeaderV2
// https://react-bootstrap.github.io/components/navbar/#sticky-top