import React, { useState } from 'react'
import CommonSection from '../components/UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Col, Container, Row } from 'reactstrap'
import { useSelector } from 'react-redux'
import '../styles/checkout.css'

const Checkout = () => {
  const cartTotalAmount = useSelector(state => state.cart.totalAmount)
  const shippingCost = 30
  const totalAmount = cartTotalAmount + Number(shippingCost)
  // console.log(cartTotalAmount);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [place, setPlace] = useState('')
  const shippingInfo = []

  const handleSubmit = (e) => {
    e.preventDefault()
    const userShippingAddress = {
      name: name,
      email: email,
      phone: phone,
      place: place,
    };
    shippingInfo.push(userShippingAddress)
    console.log(shippingInfo);
  }

  return (
    <Helmet title='Thanh toán'>
      <CommonSection title='Thanh toán' />
      <section>
        <Container>
          <Row>
            <Col lg='8' md='8'>
              <h6 className='mb-4'>Chọn địa chỉ giao hàng</h6>
              <form className='checkout__form' onSubmit={handleSubmit}>
                <div className="form__group">
                  <input type="text" placeholder='Tên bạn...' onChange={e => setName(e.target.value)} required />
                </div>

                <div className="form__group">
                  <input type="email" placeholder='Email...' onChange={e => setEmail(e.target.value)} required />
                </div>

                <div className="form__group">
                  <input type="Number" placeholder='Số điện thoại...' onChange={e => setPhone(e.target.value)} required />
                </div>

                <div className="form__group">
                  <input type="text" placeholder='Địa chỉ...' onChange={e => setPlace(e.target.value)} required />
                </div>
                <button type='submit' className="addToCart__btn">Thanh toán</button>
              </form>
            </Col>

            <Col lg='4' md='6'>
              <div className='checkout__bill'>
                <h6 className='d-flex align-items-center justify-content-between mb-3'>Tổng tiền (bao gồm ship): <span>{totalAmount}đ</span></h6>
                <h6 className='d-flex align-items-center justify-content-between mb-3'>Phí giao hàng: <span>${shippingCost}đ</span></h6>
                <div className='checkout__total'>
                  <h5 className='d-flex align-items-center justify-content-between'>Tổng: <span>{totalAmount}đ</span></h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout