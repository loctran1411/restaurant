import React, { useRef } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Link } from 'react-router-dom'

const Register = () => {

  const signupEmailRef = useRef()
  const signupPasswordRef = useRef()
  const signupFullName = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Helmet title="Đăng kí">
      <CommonSection title="Đăng kí" />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className='form mb-5' onSubmit={handleSubmit}>
                <div className='form__group'>
                  <input type="text" placeholder="Họ tên" required ref={signupFullName} />
                </div>

                <div className='form__group'>
                  <input type="text" placeholder="Email..." required ref={signupEmailRef} />
                </div>

                <div className='form__group'>
                  <input type="password" placeholder="Mật khẩu..." required ref={signupPasswordRef} />
                </div>
                <button type="submit" className="addToCart__btn">Đăng kí</button>
              </form>
              <Link to='/login'>
                Bạn đã có tài khoản? ĐĂNG NHẬP TẠI ĐÂY &#128229;
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Register