import React, { useEffect, useState } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import heroImg from '../assets/images/hero.png'
import '../styles/hero-section.css'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import Category from '../components/UI/category/Category'

import featureImg01 from '../assets/images/service-01.png'
import featureImg02 from '../assets/images/service-02.png'
import featureImg03 from '../assets/images/service-03.png'

import products from '../assets/fake-data/products.js'

import foodCategoryImg01 from '../assets/images/hamburger.png'
import foodCategoryImg02 from '../assets/images/pizza.png'
import foodCategoryImg03 from '../assets/images/bread.png'
import whyImg from '../assets/images/location.png'
import networkingImg from '../assets/images/network.png'

import ProductCard from '../components/UI/product-card/ProductCard'
import TestimonialSlider from '../components/UI/slider/TestimonialSlider'

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
  const [category, setCategory] = useState("ALL")
  const [allProducts, setAllProducts] = useState(products)
  const [hotPizza, setHotPizza] = useState([])

  useEffect(()=>{
    const filteredPizza = products.filter((i)=>i.category === 'Pizza')
    const slicePizza = filteredPizza.slice(0,4)
    setHotPizza(slicePizza)
  },[])

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products)
    }
    if (category === "BURGER") {
      const filteredProducts = products.filter(i => i.category === 'Burger')
      setAllProducts(filteredProducts)
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(i => i.category === 'Pizza')
      setAllProducts(filteredProducts)
    }
    if (category === "BREAD") {
      const filteredProducts = products.filter(i => i.category === 'Bread')
      setAllProducts(filteredProducts)
    }
  }, [category])

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <h5 className='mb-3'>Đặt món nhanh chóng</h5>
                <h1 className='mb-4 hero__title'><span>Bạn đang đói?<br /></span> Chỉ cần đợi <span>trong giây lát</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, repellendus.</p>

                <div className="hero__btns d-flex align-items-center gap-5">
                  <button className="order__btn d-flex align-items-center justify-content-between">Order now
                    <i className='ri-arrow-right-s-line'></i></button>

                  <button className='all__foods-btn'><Link to='/foods'>See all foods</Link></button>
                </div>

                <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                  <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i className='ri-car-line'></i></span>Free ship</p>

                  <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i className='ri-shield-check-line'></i></span>Giao hàng uy tín</p>
                </div>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

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

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Món bán chạy</h2>
            </Col>

            <Col lg='12'>
              <div className='food__category d-flex align-items-center justify-content-center'>
                <button className={`all__btn ${category === 'ALL' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('ALL')}>Tất cả</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'BURGER' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('BURGER')}><img src={foodCategoryImg01} alt="food category burger" />Burger</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'PIZZA' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('PIZZA')}><img src={foodCategoryImg02} alt="food category pizza" />Pizza</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'BREAD' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('BREAD')}><img src={foodCategoryImg03} alt="food category bread" />Bánh mì</button>
              </div>
            </Col>

            {
              allProducts.map((i) => (
                <Col lg='3' md='4' sm='6' xs='6' key={i.id} className='mt-5'>
                  <ProductCard i={i} />
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

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2>Hot Pizza</h2>
            </Col>
            {
              hotPizza.map((i)=>(
                <Col lg='3' md='4' key={i.id}>
                  <ProductCard i={i}/>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='testimonial'>
                <h5 className='testimonial__subtitle mb-4'>Testimonial</h5>
                <h2 className='testimonial__title mb-4'>Đánh giá từ <span>khách hàng</span> đến chúng tôi</h2>
                <p className='testimonial__desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint ad odit delectus consequuntur enim, dicta cupiditate saepe id praesentium ex.</p>
                <TestimonialSlider/>
              </div>
            </Col>
            <Col lang='6' md='6'>
              <img src={networkingImg} alt="testimonial img" className='w-100'/>
            </Col>
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Home