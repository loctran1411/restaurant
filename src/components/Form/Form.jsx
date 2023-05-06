import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import "../../styles/form.css";
import moment from 'moment/moment';

const Form = () => {
    let dateFormat = moment().format("D-MM-YYYY, h:mm:ss a");

    const formRef = useRef(null)
    const [loading, setLoading] = useState(false)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbz4MQbqgk0lGiRZcunJZjq7jzv3WdHgVxt0fth7arLA9_PkniLc7LDOFrtFcUVIyGatRA/exec"

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

    useEffect(() => {
        var today = new Date().toISOString().slice(0, 16);
        document.getElementsByName("DateTime")[0].min = today;
    }, [])

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
                                <input className='inp' placeholder="Nhập tên" name="Name" type="text" id="name" />
                            </div>

                            <div className="form-inp-item">
                                <label htmlFor="phone" className="form-inp-label">Số điện thoại</label>
                                <input className='inp' placeholder="Nhập số điện thoại" name="Email" type="number" id="phone" />
                            </div>

                            <div className="form-inp-item">
                                <label htmlFor="customers" className="form-inp-label">Số lượng khách</label>
                                <input className='inp' placeholder="Nhập số lượng" name="Message" type="number" id='customers' />
                            </div>

                            <div className="form-inp-item">
                                <label className="form-inp-label" htmlFor="date">Ngày</label>
                                <input defaultValue={dateFormat} className='inp' type="datetime-local" name="DateTime" id="date" lang="vi-VN" />
                            </div>

                            <div className="form-inp-item">
                                <label className="form-inp-label" htmlFor="note">Yêu cầu khác</label>
                                <textarea className='inp' name="Note" id="note" cols="10" rows="10" placeholder="Nhập yêu cầu"></textarea>
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