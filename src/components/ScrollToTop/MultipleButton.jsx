import React, { useState } from 'react'
import '../../styles/scrolltotop.css'
import { SiZalo } from 'react-icons/si'
import { BsFillTelephoneFill, BsFillCartPlusFill } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { Col, Container, Row } from 'reactstrap'
import SimpleForm from './Chatbot'

const MultipleButton = () => {

    const [modalShown, toggleModal] = useState(false);
    const [modalShownChatbot, toggleModalChatBot] = useState(false);

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
                    <div className="modal-close-btn">
                        <h4>Đặt hàng</h4>
                        <AiOutlineCloseCircle onClick={close} className="close-icon" />
                    </div>
                    {children}
                </div>
            </div>
        ) : null;
    }

    function ModalChatbot({ children, shown, close }) {
        return shown ? (
            <div
                className="modal-backdrop"
                onClick={() => {
                    // close modal when outside of modal is clicked
                    close();
                }}>
                <div
                    className="modal-content chatbox"
                    onClick={e => {
                        // do not close modal if anything inside modal content is clicked
                        e.stopPropagation();
                    }}>
                    <div className="modal-close-btn">
                    <h4>Chat với chúng tôi</h4>
                        <AiOutlineCloseCircle onClick={close} className="close-icon" />
                    </div>
                    {children}
                </div>
            </div>
        ) : null;
    }

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

    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector('.scrollup');
        if (this.scrollY >= 360) scrollUp.classList.add('show-scroll');
        else scrollUp.classList.remove('show-scroll')
    })
    return (
        <>
            <div className="scrollup multi-btn">
                <div>
                    <a href="tel:0909940333">
                        <BsFillTelephoneFill className='icon-btn' />
                    </a>
                </div>

                <div>
                    <a href="https://zalo.me/0909940333">
                        <SiZalo className='icon-btn' />
                    </a>
                </div>

                <div>
                    <BsFillCartPlusFill className='icon-btn' onClick={() => {
                        toggleModal(!modalShown);
                    }} />
                </div>
                <div>
                    <BsFillChatDotsFill className='icon-btn' onClick={() => {
                        toggleModalChatBot(!modalShownChatbot);
                    }} />
                </div>
            </div>

            <Container>
                <Row>
                    <Col lg='12' md='12' sm='12'>
                        <div>
                            <Modal
                                shown={modalShown}
                                close={() => {
                                    toggleModal(false);
                                }}
                            >
                                <Col lg='12' md='12' sm='12'>
                                    <Container>
                                        <form className="form-inp" onSubmit={(e) => Submit(e)}>
                                            <input className='inp' placeholder="Your Name" name="Name" type="text" />
                                            <input className='inp' placeholder="Your Email" name="Email" type="text" />
                                            <input className='inp' placeholder="Your Message" name="Message" type="text" />
                                            <input className='btn-submit' name="Name" type="submit" />
                                        </form>
                                    </Container>
                                </Col>
                            </Modal>

                            <ModalChatbot
                                shown={modalShownChatbot}
                                close={() => {
                                    toggleModalChatBot(false);
                                }}>
                                <div className='chatbox-container'>
                                    <SimpleForm />
                                </div>
                            </ModalChatbot>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MultipleButton