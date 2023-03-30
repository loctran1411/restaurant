import React from 'react'
import CommonSection from '../components/UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Col, Container, Row } from 'reactstrap'
import '../styles/contact.css'

const Contact = () => {
    return (
        <Helmet title="Liên hệ">
            <CommonSection title="Liên hệ" />
            <section>
                <Container className='contact_container'>
                    <Row>
                        <Col lg='6' md='6' sm='6'>
                            <div className='contact__list'>
                                <span className='contact__item'>
                                    <i className="ri-map-pin-fill"></i>
                                    <span>địa chỉ</span>
                                    <p>cũng gần đây hà!!</p>
                                </span>
                                <span className='contact__item'>
                                    <i className="ri-phone-fill"></i>
                                    <span>sđt</span>
                                    <p>chưa đăng kí số</p>
                                </span>
                                <span className='contact__item'>
                                    <i className="ri-global-fill"></i>
                                    <span>zalo</span>
                                    <p>i chang sđt</p>
                                </span>
                            </div>
                        </Col>

                        <Col lg='6' md='6' sm='6'>
                            <div className="map-container">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62690.0825533348!2d106.55881695598848!3d10.877703516667978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a742dabfd33%3A0xd99a9f06eac63692!2zSMOzYyBNw7RuLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1677414758245!5m2!1svi!2s" allowFullScreen="" loading="lazy" width="600" height="450"referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Contact