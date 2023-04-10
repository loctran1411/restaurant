import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/logo_yen.png";
import data from '../../assets/fake-data/info'

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="6">
            <div className=" footer__logo hello__footer">
              <Link to={'/'}><img src={logo} alt="logo" /></Link>
              {/* <h5>YenLongHai</h5> */}
              <p>
                &#127867; NHAHANGYENLONGHAI &#127860; Ẩm thực Châu Á
              </p>
              <p>
                Kính chào quý khách &#129309;
              </p>
              <hr style={{ width: '100%', border: '1px solid #fff' }} />
            </div>
          </Col>

          {/* <Col lg="4" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col> */}

          {
            data?.map((i, index) => (
              <Col lg="6" md="6" sm="6" key={index} style={{ paddingTop: '30px' }}>
                <h5 className="footer__title">Liên hệ</h5>
                <span className="footer__hasgtag">#inbox đặt qua page hoặc book</span>
                <ListGroup className="deliver__time-list">
                  <ListGroupItem className=" delivery__time-item border-0 ps-0">
                    <span>Địa chỉ:</span>
                    <p>{i.address}</p>
                  </ListGroupItem>
                  <ListGroupItem className=" delivery__time-item border-0 ps-0">
                    <span>Điện thoại: </span>
                    <p>{i.hotline}</p>
                  </ListGroupItem>
                </ListGroup>
              </Col>
            ))
          }

          {/* <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col> */}
        </Row>

        <Row className="mt-5">
          {/* <Col lg="6" md="6">
            <p className="copyright__text">
              2023 &#9997; Ng Chg Tu
            </p>
          </Col> */}
          {/* <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                <Link to="#">
                  <i className="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                <Link to="#">
                  <i className="ri-github-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to="#">
                  <i className="ri-instagram-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col> */}
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;