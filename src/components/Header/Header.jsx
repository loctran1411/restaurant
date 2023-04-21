import React, { useRef, useEffect } from "react";

// import { Container } from "reactstrap";
import logo from "../../assets/images/logo_yen.png";
import { Link, NavLink, BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import { Navbar, Nav } from "react-bootstrap";

import "../../styles/header.css";

// const nav__links = [
//   {
//     display: "Trang chủ",
//     path: "/home",
//   },
//   {
//     display: "Thực đơn mới",
//     path: "/foods",
//   },
//   {
//     display: "Giỏ hàng",
//     path: "/cart",
//   },
//   {
//     display: "Liên hệ",
//     path: "/contact",
//   },
// ];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <header className="header" ref={headerRef}>
        {/* <div className="nav__wrapper d-flex align-items-center justify-content-between"> */}
        <div className="nav__wrapper d-flex justify-content-between header-container">
          <div className="logo">
            <Link to={'/'}><img src={logo} alt="logo" /></Link>
            {/* <h5>YenLongHai</h5> */}
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4 p-0">

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu d-flex align-items-center gap-5 menu__tab">
                {/* {nav__links.map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive ? "active__menu" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                ))} */}
                <Navbar>
                  <Nav className="nav-bar">
                    <Nav.Link className={(navClass) => navClass.isActive ? "active__menu" : ""} href="#gioi-thieu">Giới thiệu</Nav.Link>
                    <Nav.Link className={(navClass) => navClass.isActive ? "active__menu" : ""} href="#thuc-don">Thực đơn</Nav.Link>
                    {/* <Nav.Link className={(navClass) => navClass.isActive ? "active__menu" : ""} href="#bestseller">Món bán chạy</Nav.Link> */}
                    <Nav.Link className={(navClass) => navClass.isActive ? "active__menu" : ""} href="#dich-vu">Dịch vụ</Nav.Link>
                    <Nav.Link className={(navClass) => navClass.isActive ? "active__menu" : ""} href="#lien-he">Liên hệ</Nav.Link>
                  </Nav>
                </Navbar>
              </div>
            </div>

            {/* <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span> */}

            {/* <span className="user">
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            </span> */}

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
    </header>
  );
};

export default Header;