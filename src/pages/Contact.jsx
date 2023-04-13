import React, { useState } from 'react'
import CommonSection from '../components/UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Col, Container, Row } from 'reactstrap'
import '../styles/contact.css'
import data from '../assets/fake-data/info'

const Contact = () => {

    function Submit(e) {
        e.preventDefault()
        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);
        fetch(
            "https://script.google.com/macros/s/AKfycbx8eByTZQVM2199o-pS6IUBTHy68YdJ-OV8StjdmG9y0QS-PzPBR2Zfq2pj0ksCZb68Jw/exec",
            {
                method: "POST",
                body: formDatab
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const [modalShown, toggleModal] = useState(false);

    function Modal({ children, shown, close }) {
        return shown ? (
            <div
                className="modal-backdrop"
                onClick={() => {
                    // close modal when outside of modal is clicked
                    close();
                }}>
                <div
                    className="modal-content"
                    onClick={e => {
                        // do not close modal if anything inside modal content is clicked
                        e.stopPropagation();
                    }}>
                    <button onClick={close}>Close</button>
                    {children}
                </div>
            </div>
        ) : null;
    }

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

                        <Col lg='6' md='6' sm='6'>
                            <div className="App">
                                <button
                                    onClick={() => {
                                        toggleModal(!modalShown);
                                    }}
                                >
                                    Toggle Modal
                                </button>
                                <Modal
                                    shown={modalShown}
                                    close={() => {
                                        toggleModal(false);
                                    }}
                                >
                                    <Col lg='12' md='12' sm='12'>
                                        <Container>
                                            <form className="form" onSubmit={(e) => Submit(e)}>
                                                <input placeholder="Your Name" name="Name" type="text" />
                                                <input placeholder="Your Email" name="Email" type="text" />
                                                <input placeholder="Your Message" name="Message" type="text" />
                                                <input name="Name" type="submit" />
                                            </form>
                                        </Container>
                                    </Col>
                                </Modal>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Contact