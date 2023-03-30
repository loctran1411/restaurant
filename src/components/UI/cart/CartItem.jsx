import React from 'react'
import { ListGroupItem } from 'reactstrap'
import '../../../styles/cart-item.css'

import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/shopping-cart/cartSlice'

const CartItem = ({ i }) => {

    const { id, title, price, image01, quantity, totalPrice } = i

    const dispatch = useDispatch();
    const incrementItem = () => {
        dispatch(cartActions.addItem({
            id, title, price, image01
        }))
    }

    const decreaseItem = () => {
        dispatch(cartActions.removeItem(id))
    }

    const removeItem = () => {
        dispatch(cartActions.deleteItem(id))
    }

    return (
        <ListGroupItem className='border-0 cart__item'>
            <div className="cart__item-info d-flex gap-2">
                <img src={image01} alt="product-img" />
                <div className="cart__product-info d-flex align-items-center gap-5 justify-content-between w-100">
                    <div>
                        <h6 className="cart__product-title">{title}</h6>
                        <p className='d-flex align-items-center gap-5 cart__product-price'>{quantity}x <span>{totalPrice}đ</span></p>
                        <div className='d-flex align-items-center increase__decrease-btn justify-content-between'>
                            <span className='decrease__btn' onClick={decreaseItem}><i className='ri-subtract-line'></i></span>
                            <span className='quantity'>{quantity}</span>
                            <span className='increase__btn' onClick={incrementItem}><i className='ri-add-line'></i></span>
                        </div>
                    </div>

                    <span className='delete__btn' onClick={removeItem}><i className='ri-close-line'></i></span>
                </div>
            </div>
        </ListGroupItem>
    )
}

export default CartItem