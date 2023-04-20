import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import '../../../styles/product-card.css'

// import { useDispatch } from 'react-redux'
// import { cartActions } from '../../../store/shopping-cart/cartSlice'
// import FoodDetail from '../../Modal/FoodDetail'
// import { Col, Container, Row } from 'reactstrap'
// import { AiOutlineCloseCircle } from 'react-icons/ai'

const ProductCard = (props) => {
    // const [modalShown, toggleModal] = useState(false); //show popup food detail
    // const { id, title, image01, price } = props.i //các thành phần trong products được props thông qua biến i
    // const dispatch = useDispatch();

    const { id, img, name, price } = props.i

    // const addToCart = () => {
    //     dispatch(cartActions.addItem({
    //         id, title, image01, price
    //     }))
    // }

    // function Modal({ children, shown, close }) {
    //     return shown ? (
    //         <div
    //             className="modal-backdrop"
    //             onClick={() => {
    //                 // close modal when outside of modal is clicked
    //                 close();
    //             }}>
    //             <div
    //                 className="modal-content"
    //                 onClick={e => {
    //                     // do not close modal if anything inside modal content is clicked
    //                     e.stopPropagation();
    //                 }}>
    //                 <div className="modal-close-btn">
    //                     <h4>Món</h4>
    //                     <AiOutlineCloseCircle onClick={close} className="close-icon" />
    //                 </div>
    //                 {children}
    //             </div>
    //         </div>
    //     ) : null;
    // }

    return (
        <div className='product__item'>
            <div className="product__img">
                <img src={img} alt="product-img" className='w-100' />
            </div>

            <div className="product__content">
                {/* <h5 className="product_name"><Link to={`/foods/${id}`}>{title}</Link></h5> */}
                <h5 className="product_name" 
                // onClick={() => {toggleModal(!modalShown);}}
                >{name}</h5>
                <div className='d-flex align-items-center justify-content-between'>
                    <span className='product__price'>{price}</span>
                    {/* <button className='addToCart__btn' onClick={addToCart}>
                < i class="ri-shopping-cart-fill"></i>
                </button> */}
                </div>
            </div>

            {/* <Modal
                shown={modalShown}
                close={() => {
                    toggleModal(false);
                }}
            >
                <Col lg='12' md='12' sm='12'>
                    <Container>
                        <FoodDetail
                            id={id}
                            title={title}
                            image01={image01}
                            price={price} />
                    </Container>
                </Col>
            </Modal> */}
        </div>
    )
}

export default ProductCard