import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routes from '../../routes/Routers'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import MultipleButton from '../ScrollToTop/MultipleButton'

const Layout = () => {
    return (
        <div>
            <Header />
            <div>
                <Routes />
            </div>
            <Footer />
            <MultipleButton/>
        </div>
    )
}

export default Layout