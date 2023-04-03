import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routes from '../../routes/Routers'

import Carts from '../UI/cart/Carts'
import { useSelector } from 'react-redux'
import CarouselSlider from '../Carousel/CarouselSlider'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Layout = () => {
    const showCart = useSelector(state => state.cartUi.cartIsVisible)
    return (
        <div>
            <Header />
            <CarouselSlider/>
            {
                showCart && <Carts/>
            }
            <div>
                <Routes />
            </div>
            <Footer />
        </div>
    )
}

export default Layout