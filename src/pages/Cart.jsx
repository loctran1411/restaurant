import React from 'react'
import CommonSection from '../components/UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Col, Container, Row } from 'reactstrap'
import '../styles/cart-page.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../store/shopping-cart/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  console.log(cartItems);
  return (
    <Helmet title='Cart'>
      <CommonSection title='Your Cart' />
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              {
                cartItems.length === 0 ? <h5 className='text-center'>Giỏ hàng trống</h5> : <table className='table table-bordered'>
                  <thead>
                    <tr>
                      <th className='text-center'>&#127860;</th>
                      <th className='text-center'>Món</th>
                      <th className='text-center'>Giá</th>
                      <th className='text-center'>Số lượng</th>
                      <th className='text-center'>Xóa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartItems.map(item =>
                        <Tr item={item} key={item.id} />
                      )
                    }
                  </tbody>
                </table>
              }

              <div className='mt-4'>
                <h6>Tổng tiền (tạm tính) : <span className='cart__subtotal'>{totalAmount}</span>đ</h6>
                <p>Thuế và ship sẽ được tính sau khi thanh toán</p>
                <div className='cart__page-btn'>
                  <button className='addToCart__btn me-4'><Link to='/foods'>Tiếp tục mua</Link></button>
                  <button className='addToCart__btn'><Link to='/checkout'>Thanh toán</Link></button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}


const Tr = (props) => {

  const { id, image01, title, price, quantity } = props.item
  // console.log(props.item);

  const dispatch = useDispatch()
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  }

  return (
    <>
      <tr>
        <td className='text-center cart__img-box'>
          <img src={image01} alt="product img" />
        </td>
        <td className='text-center'>{title}</td>
        <td className='text-center'>{price}đ</td>
        <td className='text-center'>{quantity}</td>
        <td className='text-center cart__item-del'>
          <i className='ri-delete-bin-line' onClick={deleteItem}></i>
        </td>
      </tr>
    </>
  )
}

export default Cart