import { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import DatePicker, { registerLocale } from "react-datepicker"
import vn from "date-fns/locale/vi";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/form.css";
import axios from 'axios'
registerLocale("vi", vn);

const Form = () => {
    // form states
    const initialValues = { name: "", phone: "", numberof: "", note: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const currentDate = new Date();
    const [startDate, setStartDate] = useState(currentDate);
    const [loading, setLoading] = useState(false)

    //handleChange
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    // submit event
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // our object to pass
        setFormErrors(validate(formValues));
        const data = {
            TEN_KH: formValues.name,
            SDT: formValues.phone,
            SO_LUONG_KH: formValues.numberof,
            NGAY_GIO: startDate.toLocaleString(),
            GHI_CHU: formValues.note
        }
        // console.log('data',data);
        if (formValues.name !== '' && formValues.phone !== '' && formValues.numberof !== '' && formValues.note === '') {
            axios.post('https://sheet.best/api/sheets/820aee89-edd8-4335-a026-08e695898298', data).then(response => {
                setTimeout(() => {
                    alert("Gửi thành công, Chúng tôi sẽ liên hệ đến bạn")
                    e.target.reset();
                    setFormValues("");
                    setLoading(false)
                    window.location.reload();
                }, 3000);
            }).catch((err) => {
                alert("Gửi thất bại")
                console.log(err);
            })
        }
        else {
            alert("Vui lòng điền đầy đủ các thông tin!")
            setLoading(false)
            console.log('Không gửi form');
        }
    }

    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Vui lòng nhập tên";
        }
        if (!values.phone) {
            errors.phone = "Vui lòng nhập số điện thoại";
        }
        if (!values.numberof) {
            errors.numberof = "Vui lòng nhập số lượng";
        }
        return errors;
    };

    return (
        <Container>
            <Row>
                <Col lg='12' md='12' sm='12'>
                    <Container className='container-form-inp'>
                        <div className='form-header'>
                            <h5>Đặt bàn</h5>
                            <hr className='hr' />
                        </div>
                        <form autoComplete="off" className="form-inp" onSubmit={handleSubmit}>
                            <div className="form-inp-item">
                                <label htmlFor="name" className="form-inp-label">Họ và tên</label>
                                <input className='inp' placeholder="Nhập tên" type="text" id="name"
                                    name="name"
                                    value={formValues.name}
                                    onChange={handleChange} />
                                {
                                    formErrors.name && (<p className='error-valid-form'>*{formErrors.name}</p>)
                                }
                            </div>
                            <div className="form-inp-item">
                                <label htmlFor="phone" className="form-inp-label">Số điện thoại</label>
                                <input className='inp' placeholder="Nhập số điện thoại" type="number" id="phone"
                                    name="phone"
                                    value={formValues.phone}
                                    onChange={handleChange}
                                />
                                {
                                    formErrors.phone && (<p className='error-valid-form'>*{formErrors.phone}</p>)
                                }
                            </div>
                            <div className="form-inp-item">
                                <label htmlFor="customers" className="form-inp-label">Số lượng khách</label>
                                <input className='inp' placeholder="Nhập số lượng" type="number" id='customers'
                                    name="numberof"
                                    value={formValues.numberof}
                                    onChange={handleChange}
                                />
                                {
                                    formErrors.numberof && (<p className='error-valid-form'>*{formErrors.numberof}</p>)
                                }
                            </div>
                            <div className="form-inp-item">
                                <label className="form-inp-label" htmlFor="date">Ngày</label>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    timeInputLabel="Time:"
                                    dateFormat="dd/MM/yyyy h:mm aa"
                                    showTimeSelect
                                    timeFormat="p"
                                    timeIntervals={15}
                                    minDate={new Date()}
                                    className='inp'
                                    name="datetime" id="date"
                                />
                            </div>

                            <div className="form-inp-item">
                                <label className="form-inp-label" htmlFor="note">Yêu cầu khác</label>
                                <textarea className='inp' id="note" cols="10" rows="10" placeholder="Nhập yêu cầu"
                                    name="note"
                                    value={formValues.note}
                                    onChange={handleChange}
                                ></textarea>
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