import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import "../../styles/form.css";

const Form = () => {
    const formRef = useRef(null)
    const [loading, setLoading] = useState(false)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbw4BH3nHCBp7kl5_exUmVowUlT_oYTsqbvJ05kdI7Y2bUS31nO9pyD3lO6YuwczNfCuLQ/exec"

    function Submit(e) {
        e.preventDefault();
        setLoading(true);
        fetch(scriptUrl, {
            method: 'POST',
            body: new FormData(formRef.current),
        }).then(res => {
            alert("Gửi thành công")
            e.target.reset();
            setLoading(false)
        }).catch(err => console.log(err))
    }

    return (
        <Container>
            <Row>
                <Col lg='12' md='12' sm='12'>
                    <Container className='container-form-inp'>
                        <div className='form-header'>
                            <h5>Đặt bàn</h5>
                            <hr className='hr' />
                        </div>
                        <form className="form-inp" onSubmit={(e) => Submit(e)} ref={formRef}>
                            <div className="form-inp-item">
                                <label htmlFor="name" className="form-inp-label">Họ và tên</label>
                                <input className='inp' placeholder="Họ Tên..." name="Name" type="text" id="name" />
                            </div>

                            <div className="form-inp-item">
                                <label htmlFor="phone" className="form-inp-label">Số điện thoại</label>
                                <input className='inp' placeholder="Sđt.." name="Email" type="number" id="phone" />
                            </div>

                            <div className="form-inp-item">
                                <label htmlFor="customers" className="form-inp-label">Số lượng khách</label>
                                <input className='inp' placeholder="Số lượng..." name="Message" type="number" id='customers' />
                            </div>

                            <div className="date-time-place">
                                <div className="form-inp-item">
                                    <label className="form-inp-label" htmlFor="date">Ngày</label>
                                    <input className='inp' type="date" name="Date" id="date" lang="vi-VN" />
                                </div>

                                <div className="form-inp-item">
                                    <label className="form-inp-label" htmlFor="time">Giờ</label>
                                    <input className='inp' type="time" name="Time" id="time" lang="vi-VN" />
                                </div>
                            </div>

                            <div className="form-inp-item">
                                <label className="form-inp-label" htmlFor="note">Ghi chú khách hàng</label>
                                <textarea className='inp' name="Note" id="note" cols="10" rows="10" placeholder="Ghi chú"></textarea>
                            </div>

                            <input className='btn-submit' name="Name" type="submit" value={loading ? "Vui lòng chờ..." : "Gửi"} />
                        </form>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Form