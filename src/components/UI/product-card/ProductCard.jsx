import React from 'react'
import '../../../styles/product-card.css'
const ProductCard = (props) => {

    const { id, img, name, price } = props.i

    return (
        <div className='product__item'>
            <div className="product__img">
                <img src={img} alt="product-img"/>
            </div>

            <div className="product__content">
                <h5 className="product_name" 
                >&#9654; {name}</h5>
                <div className='d-flex justify-content-between'>
                    <span className='product__price'>{price}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard