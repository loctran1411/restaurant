import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/logo_yen.png";
import data from '../../assets/fake-data/info'

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" id="lien-he">
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

          {
            data?.map((i, index) => (
              <Col lg="4" md="4" sm="6" key={index} style={{ paddingTop: '30px' }}>
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

          <Col lg="4" md="4" sm="6">
            <div className="map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.1799971299292!2d107.23888733149256!3d10.385901679814038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317576f43a6883c5%3A0x681385933c5bf859!2zMTEwMyDEkC4gVsO1IFRo4buLIFPDoXUsIFRULiBMb25nIEjhuqNpLCBMb25nIMSQaeG7gW4sIELDoCBS4buLYSAtIFbFqW5nIFTDoHUsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1681078717554!5m2!1svi!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="map-place"></iframe>
            </div>
          </Col>

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