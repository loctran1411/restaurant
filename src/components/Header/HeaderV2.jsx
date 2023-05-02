import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/images/logo_yen.png";
import './headerv2.css'

const HeaderV2 = () => {

  return (
    <>
      <Navbar expand="lg" sticky="top" className="nav_container">
          <Navbar.Brand href="#" className="nav_right"><img className="nav_right-logo" src={logo} alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="nav_content">
            <Nav navbarScroll>
              <Nav.Link className={(navClass) => navClass.isActive ? "active__menu" : ""} href="#gioi-thieu">Giới&nbsp;thiệu</Nav.Link>
              <Nav.Link className={(navClass) => navClass.isActive ? "active__menu" : ""} href="#mon-ban-chay">Thực&nbsp;đơn</Nav.Link>
              <Nav.Link className={(navClass) => navClass.isActive ? "active__menu" : ""} href="#lien-he">Liên&nbsp;hệ</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default HeaderV2
// https://react-bootstrap.github.io/components/navbar/#sticky-top