import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'reactstrap'
import CartItem from './CartItem'
import '../../../styles/shopping-cart.css'

import { useDispatch, useSelector } from 'react-redux'
import { cartUiActions } from '../../../store/shopping-cart/cartUiSlice'

const Carts = () => {

    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart.cartItems)
    const toggleCart = () =>{
        dispatch(cartUiActions.toggle())
    }
    const totalAmount = useSelector(state => state.cart.totalAmount)

  return (
    <div className='cart__container'>
        <ListGroup className='cart'>
            <div className="cart__close">
                <span onClick={toggleCart}><i className='ri-close-fill'></i></span>
            </div>

            <div className="cart__item-list">
                {
                    cartProducts.length === 0 ? <h6 className='text-center mt-5'>Giỏ hàng trống</h6> : cartProducts.map((i, index)=>(
                        <CartItem i={i} key={index}/>
                    ))
                }
            </div>

            <div className="cart__bottom d-flex align-items-center justify-content-between">
                <h6>Tổng tiền: <span>{totalAmount}đ</span></h6>
                <button><Link to='/checkout'>Thanh toán</Link></button>
            </div>
        </ListGroup>
    </div>
  )
}

export default Carts