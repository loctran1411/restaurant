import React from 'react'
import CommonSection from '../components/UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Col, Container, Row } from 'reactstrap'
import '../styles/contact.css'
import data from '../assets/fake-data/info'

const Contact = () => {
    return (
        <Helmet title="Liên hệ">
            <CommonSection title="Liên hệ" />
            <section>
                <Container className='contact_container'>
                    <Row>
                        <Col lg='6' md='6' sm='6'>
                            {
                                data?.map((i, index) => (
                                    <div className='contact__list' key={index}>
                                        <span className='contact__item'>
                                            <i className="ri-map-pin-fill"></i>
                                            <span>địa chỉ</span>
                                            <p>{i.address}</p>
                                        </span>
                                        <span className='contact__item'>
                                            <i className="ri-phone-fill"></i>
                                            <span>điện thoại</span>
                                            <p>{i.hotline}</p>
                                        </span>
                                        <span className='contact__item'>
                                            <i className="ri-global-fill"></i>
                                            <span>zalo</span>
                                            <p>{i.hotline}</p>
                                        </span>
                                    </div>
                                ))
                            }
                        </Col>

                        <Col lg='6' md='6' sm='6'>
                            <div className="map-container">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.1799971299292!2d107.23888733149256!3d10.385901679814038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317576f43a6883c5%3A0x681385933c5bf859!2zMTEwMyDEkC4gVsO1IFRo4buLIFPDoXUsIFRULiBMb25nIEjhuqNpLCBMb25nIMSQaeG7gW4sIELDoCBS4buLYSAtIFbFqW5nIFTDoHUsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1681078717554!5m2!1svi!2s" allowFullScreen="" loading="lazy" width="600" height="450" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Contact