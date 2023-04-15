import React, { useState } from 'react'
import { Container, Button, Link } from 'react-floating-action-button'
import { Col, Row } from 'reactstrap'
import '../../styles/scrolltotop.css'
import { SiZalo } from 'react-icons/si'
import { BsFillTelephoneFill, BsFillEnvelopeOpenFill, BsPlusCircleFill } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { FacebookShareButton, FacebookIcon } from 'react-share';
import SimpleForm from './Chatbot'

const FloatingButton = () => {

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
                        <h4>Góp ý</h4>
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

    return (
        <>
            <div className="multi-btn">
                <Container>
                    <Link href="tel:0909940333" className="btn-icon">
                        <BsFillTelephoneFill className='icon-btn' />
                    </Link>

                    <Link href="https://zalo.me/0909940333">
                        <SiZalo className='icon-btn' />
                    </Link>

                    <Link>
                        <BsFillEnvelopeOpenFill className='icon-btn' onClick={() => {
                            toggleModal(!modalShown);
                        }} />
                    </Link>

                    <Link>
                        <BsFillChatDotsFill className='icon-btn' onClick={() => {
                            toggleModalChatBot(!modalShownChatbot);
                        }} />
                    </Link>

                    <Link>
                        <FacebookShareButton
                            url={'https://www.facebook.com/Nhà-Hàng-Yến-Long-Hải-101799236121370/'}
                            quote={'YenLongHai'}
                            hashtag="#YenLongHaiRestaurant"
                        >
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                    </Link>

                    <div className="float-button">
                        <Button
                            tooltip="Liên hệ với chúng tôi!">
                            <BsPlusCircleFill className='float-icon-plus'/>
                        </Button>
                    </div>
                </Container>
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
                                    <container>
                                        <form className="form-inp" onSubmit={(e) => Submit(e)}>
                                            <input className='inp' placeholder="Họ Tên" name="Name" type="text" />
                                            <input className='inp' placeholder="Số điện thoại hoặc Email" name="Email" type="text" />
                                            <input className='inp' placeholder="Ý Kiến Đóng Góp" name="Message" type="text" />
                                            <input className='btn-submit' name="Name" type="submit" />
                                        </form>
                                    </container>
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

export default FloatingButton