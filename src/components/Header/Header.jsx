import React, { useRef, useEffect } from "react";
import logo from "../../assets/images/logo_yen.png";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "../../styles/header.css";

import { useTranslation } from 'react-i18next';

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

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

  const { t, i18n } = useTranslation();

  const handleTrans = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  const lngs = [
    { code: "vn", native: "Tiếng Việt" },
    { code: "en", native: "English" },
  ];

  return (
    <header className="header" ref={headerRef}>
      <div className="nav__wrapper d-flex justify-content-between header-container">
        <div className="logo">
          <Link to={'/'}><img src={logo} alt="logo" /></Link>
        </div>

        {/* ======== nav right icons ========= */}
        <div className="nav__right d-flex align-items-center gap-4 p-0">

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5 menu__tab">
              <div>
                {/* <h1>{t("content")}</h1> */}

                <select defaultValue={i18n.language} onChange={handleTrans}>
                  {lngs.map(({ code, native }) => (
                    <option key={code} value={code}>
                      {native}
                    </option>
                  ))}
                </select>
              </div>

              <Navbar>
                <Nav className="nav-bar">
                  <Nav.Link className={(navClass) => navClass.isActive ? "active__menu" : ""} href="#gioi-thieu">{t('nav.nav_item_intro')}</Nav.Link>
                  <Nav.Link className={(navClass) => navClass.isActive ? "active__menu" : ""} href="#thuc-don">{t('nav.nav_item_menu')}</Nav.Link>
                  <Nav.Link className={(navClass) => navClass.isActive ? "active__menu" : ""} href="#dich-vu">{t('nav.nav_item_services')}</Nav.Link>
                  <Nav.Link className={(navClass) => navClass.isActive ? "active__menu" : ""} href="#lien-he">{t('nav.nav_item_contact')}</Nav.Link>
                </Nav>
              </Navbar>
            </div>
          </div>
          <span className="mobile__menu" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;