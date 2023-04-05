import React from 'react'
import { Carousel } from "react-responsive-carousel";
import './carouselSlider.css'

const CarouselSlider = () => {
    return (
        <Carousel autoPlay interval="3000" transitionTime="2000" showThumbs={false} infiniteLoop={true}>
            <div>
                <img alt="" src='https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80' className='carousel_img'/>
                {/* <p className="legend">Món 1</p> */}
            </div>
            <div>
                <img alt="" src='https://assets.bonappetit.com/photos/631788f25635b01b337f6bb4/4:3/w_2000,h_1500,c_limit/220827_GuangXu_BA-UncleLou_014.jpg' className='carousel_img'/>
            </div>
            <div>
                <img alt="" src='https://www.questrmg.com/wp-content/uploads/2019/03/web-banner-Top-Three-Restaurant-Trends.jpg' className='carousel_img'/>
            </div>
        </Carousel>
    )
}

export default CarouselSlider