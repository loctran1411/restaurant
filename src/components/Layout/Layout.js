import React from 'react'
import Footer from '../Footer/Footer'
import Routes from '../../routes/Routers'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MultipleButton from '../ScrollToTop/MultipleButton'
import HeaderV2 from '../Header/HeaderV2';

const Layout = () => {
    return (
        <div>
            <HeaderV2/>
            <div>
                <Routes />
            </div>
            <Footer />
            <MultipleButton/>
        </div>
    )
}

export default Layout