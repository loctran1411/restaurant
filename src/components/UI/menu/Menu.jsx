import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import ReactPaginate from 'react-paginate'
import menuToSearch from '../../../assets/fake-data/menuToSearch'
import ProductCard from '../product-card/ProductCard'

import '../../../styles/all-foods.css'
import '../../../styles/pagination.css'

const Menu = () => {

    const [searchItem, setSearchItem] = useState('')
    const [pageNumber, setPageNumber] = useState(0)

    // filter search item
    const searchedProduct = menuToSearch.filter((i) => {
        if (searchItem.valueOf === '') { return i }
        if (i.name.toLowerCase().includes(searchItem.toLowerCase())) { return i }
        // else { console.log('Không tìm thấy sản phẩm') }
    })

    const productPerPage = 8 // số item trong 1 page
    const visitedPage = pageNumber * productPerPage

    //tìm kiếm và lọc ra sản phẩm đúng loại, hiển thị trên cùng trang
    const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage)
    const pageCount = Math.ceil(searchedProduct.length / productPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <>
            <h2 className="menu__title">Món bán chạy &#128220;</h2>
            <Container>
                <Row>
                <Col lg='6' md='6' sm='6' >
                    </Col>
                    <Col lg='6' md='6' sm='6' xs='12' className='mb-3'>
                        <div className="search__widget d-flex align-items-center justify-content-between" style={{backgroundColor:'#fff'}}>
                            <input type="text" placeholder='Tìm món ăn....' value={searchItem} onChange={(e) => setSearchItem(e.target.value)} style={{width:'100%', backgroundColor:'#fff'}}/>
                            <span><i className='ri-search-line'></i></span>
                        </div>
                    </Col>

                    {
                        displayPage
                            .map((i) => (
                                <Col lg='3' md='3' sm='6' xs='6' key={i.id} className='mb-4'>
                                    <ProductCard i={i} />
                                </Col>
                            ))
                    }

                    <div>
                        <ReactPaginate
                            pageCount={pageCount}
                            onPageChange={changePage}
                            previousLabel={'<<<'}
                            nextLabel={">>>"}
                            containerClassName="paginationBttns"
                        />
                    </div>

                </Row>
            </Container>
        </>
    )
}

export default Menu