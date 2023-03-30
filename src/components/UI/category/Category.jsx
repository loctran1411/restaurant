import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../../styles/category.css'

import categoryImg01 from '../../../assets/images/category-01.png'
import categoryImg02 from '../../../assets/images/category-02.png'
import categoryImg03 from '../../../assets/images/category-03.png'
import categoryImg04 from '../../../assets/images/category-04.png'

const categoryData = [
    {
        display:'Fast food',
        imgUrlL: categoryImg01,
    },
    {
        display:'Pizza',
        imgUrlL: categoryImg02,
    },
    {
        display:'Asian food',
        imgUrlL: categoryImg03,
    },
    {
        display:'Row meat',
        imgUrlL: categoryImg04,
    },
]

const Category = () => {
  return (
    <Container>
        <Row>
            {
                categoryData.map((i, index)=>(
                    <Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={index}>
                        <div className="category__item d-flex align-items-center gap-3">
                            <div className="category__img">
                                <img src={i.imgUrlL} alt="category-img" />
                            </div>
                            <h6>{i.display}</h6>
                        </div>
                    </Col>
                ))
            }
        </Row>
    </Container>
  )
}

export default Category