import React from 'react'
import { Carousel } from "react-responsive-carousel";
import './carouselSlider.css'

const SubCarouselSlider = () => {
    return (
        <Carousel autoPlay interval="3000" transitionTime="1000" showThumbs={false} infiniteLoop={true}>
            <div>
                <img alt="" src='https://nhahang37hungvuong.com/wp-content/uploads/2020/10/hai-san-hau-nuong-mo-hanh.jpg' className='sub_carousel_img'/>
            </div>
            <div>
                <img alt="" src='https://www.nhahangquangon.com/wp-content/uploads/2013/08/hai-san.jpg' className='sub_carousel_img' />
            </div>
            <div>
                <img alt="" src='https://cdn.tgdd.vn/2021/04/CookProduct/13-1200x676.jpg' className='sub_carousel_img' />
            </div>
        </Carousel>
    )
}

export default SubCarouselSlider