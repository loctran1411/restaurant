import React, { useEffect, useState } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import '../styles/hero-section.css'
import '../styles/home.css'

import featureImg01 from '../assets/images/service-01.png'
import featureImg02 from '../assets/images/service-02.png'
import featureImg03 from '../assets/images/service-03.png'

import menuToSearch from '../assets/fake-data/menuToSearch'

import info from '../assets/fake-data/info.js'
import whyImg from '../assets/images/location.png'
import networkingImg from '../assets/images/network.png'

import TestimonialSlider from '../components/UI/slider/TestimonialSlider'
import CarouselSlider from '../components/Carousel/CarouselSlider'
import SubCarouselSlider from '../components/Carousel/SubCarouselSlider'
import Menu from '../components/UI/menu/Menu'
import Form from '../components/Form/Form'
import CollapseMenu from '../components/CollapseMenu/CollapseMenu'
import { menu, name_list_menu } from '../assets/fake-data/menu'

const featureData = [
  {
    title: 'Giao hàng nhanh',
    imgUrl: featureImg01,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quisquam.',
  },
  {
    title: 'Bữa ăn tiện ích',
    imgUrl: featureImg02,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quisquam.',
  },
  {
    title: 'Món ăn sang trọng',
    imgUrl: featureImg03,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quisquam.',
  }
]

const Home = () => {
  const [hotPizza, setHotPizza] = useState([])
  const [infomation, setInfomation] = useState(info)

  useEffect(() => {
    const filteredPizza = menuToSearch.filter((i) => i.cate === 'ghe')
    const slicePizza = filteredPizza.slice(0, 4)
    setHotPizza(slicePizza)
  }, [])

  return (
    <Helmet title="Home">
      <CarouselSlider />
      <section id="gioi-thieu"></section>
      <section className='hero_info'>
        <Container>
          <div className="hero">
            <div class="hero__content">
              {
                infomation?.map((i, index) => (
                  <div className="hero__content" key={index}>
                    <h5>&#127754; {i.title}</h5>
                    <ul className="hero__content-info">
                      <li>&#10024; {i.title_2}</li>
                      <li>&#10024; {i.title_3}</li>
                      <li>&#10024; {i.title_4}</li>
                      <li>&#10024; {i.title_5}</li>
                    </ul>

                    <div className="hero__btns d-flex align-items-center gap-5">
                    </div>
                  </div>
                ))
              }
            </div>

            <div className="hero__img">
              <div>
                <SubCarouselSlider />
              </div>

            </div>
          </div>
        </Container>
      </section>

      <section id='thuc-don'></section>
      <section className="pt-0" >
        <Col lg='12' className='text-center'>
        </Col>
        <Menu />
      </section>

      <section>
        <CollapseMenu menu={menu.ca} name_list_menu={name_list_menu.cate_ca}/>

        <CollapseMenu menu={menu.cahap} name_list_menu={name_list_menu.cate_cahap}/>

        <CollapseMenu menu={menu.ghe} name_list_menu={name_list_menu.cate_ghe}/>

        <CollapseMenu menu={menu.oc} name_list_menu={name_list_menu.cate_oc}/>

        <CollapseMenu menu={menu.mongtay} name_list_menu={name_list_menu.cate_mongtay}/>

        <CollapseMenu menu={menu.lau} name_list_menu={name_list_menu.cate_lau}/>
      </section>

      <section id="dich-vu"></section>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h5 className='feature__subtitle'>Dịch vụ &#127949;</h5>
              <h2 className='feature__title'>Ngồi tại nhà và enjoy</h2>
              <h2 className='feature__title'>
                Chúng tôi <span>sẽ giao đến</span>
              </h2>
              <p className='mb-1 mt-4 feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio alias nihil voluptatibus. Perferendis, error!</p>
              <p className='feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio alias nihil voluptatibus. Perferendis, error!</p>
            </Col>

            {
              featureData.map((i, index) => (
                <Col lg='4' md='6' sm='6' key={index} className='mt-5'>
                  <div className="feature__item text-center px-5 py-3">
                    <img src={i.imgUrl} alt="feature-img" className='w-25 mb-3' />
                    <h5 className='fw-bold mb-3'>&#128073; {i.title}</h5>
                    <p>{i.desc}</p>
                  </div>
                </Col>
              ))
            }

          </Row>
        </Container>
      </section>

      <section className='why__choose-us'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={whyImg} alt="why tasty treat" className='w-100' />
            </Col>
            <Col lg='6' md='6'>
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">Why <span>Tasty Treat?</span></h2>
                <p className='tasty__treat-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum doloremque officia, corporis dolorum nihil sit. Vero officia vel ad expedita!</p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className='choose__us-title d-flex align-items-center gap-2'><i className='ri-checkbox-circle-line'></i>
                      Thực phẩm tươi ngon</p>
                    <p className='choose__us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, porro.</p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className='choose__us-title d-flex align-items-center gap-2'><i className='ri-checkbox-circle-line'></i>
                      Chất lượng hàng đầu</p>
                    <p className='choose__us-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, doloribus!</p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className='choose__us-title d-flex align-items-center gap-2'><i className='ri-checkbox-circle-line'></i>
                      Giao hàng mọi nơi</p>
                    <p className='choose__us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, deserunt.</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='testimonial'>
                <h2 className='testimonial__title mb-4'>Trải Nghiệm và Đánh giá từ <span>Khách Hàng</span> đến với chúng tôi</h2>
                <p className='testimonial__desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint ad odit delectus consequuntur enim, dicta cupiditate saepe id praesentium ex.</p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lang='6' md='6'>
              <img src={networkingImg} alt="testimonial img" className='w-100' />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Form />
      </section>

    </Helmet>
  )
}

export default Home