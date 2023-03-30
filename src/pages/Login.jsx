import React,{useRef} from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Link } from 'react-router-dom'

const Login = () => {

  const loginEmailRef = useRef()
  const loginPasswordRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Helmet title="Đăng nhập">
      <CommonSection title="Đăng nhập"/>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
                <form className='form mb-5' onSubmit={handleSubmit}>
                  <div className='form__group'>
                    <input type="text" placeholder="Email..." required ref={loginEmailRef}/>
                  </div>

                  <div className='form__group'>
                    <input type="password" placeholder="Mật khẩu..." required ref={loginPasswordRef}/>
                  </div>
                  <button type="submit" className="addToCart__btn">Đăng nhập</button>
                </form>
                <Link to='/register'>
                  Bạn chưa có tài khoản? ĐĂNG KÍ TẠI ĐÂY &#9997;
                </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login