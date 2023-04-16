import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routes from '../../routes/Routers'

import Carts from '../UI/cart/Carts'
import { useSelector } from 'react-redux'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MultipleButton from '../ScrollToTop/MultipleButton'
// import Form from '../Form/Form'

const Layout = () => {
    const showCart = useSelector(state => state.cartUi.cartIsVisible)
    return (
        <div>
            <Header />
            {
                showCart && <Carts/>
            }
            <div>
                <Routes />
            </div>
            {/* <Form/> */}
            <Footer />
            <MultipleButton/>
        </div>
    )
}

export default Layout