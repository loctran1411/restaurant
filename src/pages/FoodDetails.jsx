import React, { useEffect, useState } from 'react'
import menuToSearch from '../assets/fake-data/menuToSearch'
import { useParams } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'

import ProductCard from '../components/UI/product-card/ProductCard'
import { Col, Container, Row } from 'reactstrap'

import { useDispatch } from 'react-redux'
import { cartActions } from '../store/shopping-cart/cartSlice'

import '../styles/product-details.css'

const FoodDetails = () => {

  const [tab, setTab] = useState('desc')
  const { id } = useParams()
  const product = menuToSearch.find(product => product.id === id)
  const { title, price, category, desc, image01 } = product
  const [reviewImg, setPreviewImg] = useState(product.image01)

  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [reviewMsg, setReviewMsg] = useState('')

  //lấy cate sản phẩm
  const relatedProduct = menuToSearch.filter(i => category === i.category)
  // console.log(relatedProduct);

  //load ra ảnh đầu tiên demo món ăn
  useEffect(() => {
    setPreviewImg(product.image01)
  }, [product])

  //khi chọn món khác trong page foods dưới mục bạn sẽ thích thì nó sẽ scroll lên top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product])

  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(cartActions.addItem({
      id, title, price, image01
    }))
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const logSubmit = enteredEmail + ',' + enteredName + ',' + reviewMsg
    console.log(logSubmit);
  }

  return (
    <Helmet title='Product-details'>
      <CommonSection title={title} />
      <section>
        <Container>
          <Row>
            <Col lg='2' md='2'>
              <div className="product__images">
                <div className="img__item mb-3" onClick={() => setPreviewImg(product.image01)}>
                  <img src={product.image01} alt="" className="w-50" />
                </div>
                <div className="img__item mb-3" onClick={() => setPreviewImg(product.image02)}>
                  <img src={product.image02} alt="" className="w-50" />
                </div>
                <div className="img__item" onClick={() => setPreviewImg(product.image03)}>
                  <img src={product.image03} alt="" className="w-50" />
                </div>

              </div>
            </Col>
            <Col lg='4' md='4'>
              <div className="product__main-img">
                <img src={reviewImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">Giá: <span>{price}đ</span></p>
                <p className='category mb-5'>Menu: <span>{category}</span></p>
                {/* <button onClick={addToCart} className='addToCart__btn'>Thêm vào giỏ hàng</button> */}
              </div>
            </Col>

            <Col lg='12'>
              <div className='tabs d-flex align-items-center gap-3 py-3'>
                <h6 className={`${tab === 'desc' ? 'tab__active' : ''}`} onClick={() => setTab('desc')}>Mô tả</h6>
                <h6 className={`${tab === 'rev' ? 'tab__active' : ''}`} onClick={() => setTab('rev')}>Đánh giá</h6>
              </div>

              {
                tab === 'desc'
                  ? <div className="tab__content">
                    <p>{desc}</p>
                  </div>
                  : < div className="tab__form mb-3" >
                    <div className="review pt-5">
                      <p className="user__name mb-0">Chú Chín</p>
                      <p className="user__email">chuchindeptrai@gmail.com</p>
                      <p className='feedback__text'>Món ngon</p>
                    </div>

                    <div className="review">
                      <p className="user__name mb-0">Chú Mười</p>
                      <p className="user__email">chumuoihotboy@gmail.com</p>
                      <p className='feedback__text'>Món ngon</p>
                    </div>

                    <div className="review">
                      <p className="user__name mb-0">Cô Tám</p>
                      <p className="user__email">congchuabongbong@gmail.com</p>
                      <p className='feedback__text'>Món ngon</p>
                    </div>

                    <form className='form' onSubmit={handleSubmit}>
                      <div className="form__group">
                        <input type="email" placeholder="Email Bạn..."
                          onChange={e => setEnteredEmail(e.target.value)}
                          required />
                      </div>

                      <div className="form__group">
                        <input type="text" placeholder="Tên Bạn..."
                          onChange={e => setEnteredName(e.target.value)}
                          required />
                      </div>

                      <div className="form__group">
                        <textarea rows={5} type="text" placeholder="Góp ý..."
                          onChange={e => setReviewMsg(e.target.value)}
                          required />
                      </div>

                      <button type="submit" className="addToCart__btn">Gửi</button>
                    </form>
                  </ div>
              }
            </Col>

            <Col lg='12' className='mb-5 mt-4'>
              <h2 className="related__Product-title">Món ngon bạn sẽ thích &#127860;</h2>
            </Col>

            {
              relatedProduct.map((i) => (
                <Col lg='3' md='4' sm='6' className='mb-4' key={i.id}>
                  <ProductCard i={i} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default FoodDetails