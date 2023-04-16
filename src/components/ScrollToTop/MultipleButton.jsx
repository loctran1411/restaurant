import React from 'react'
import '../../styles/scrolltotop.css'
import { Link } from 'react-floating-action-button'
import { SiZalo } from 'react-icons/si'
import { BsFillTelephoneFill, BsFillShareFill } from 'react-icons/bs'

const MultipleButton = () => {

    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector('.scrollup');
        if (this.scrollY >= 360) scrollUp.classList.add('show-scroll');
        else scrollUp.classList.remove('show-scroll')
    })
    return (
        <>
            <div className="scrollup multi-btn">
                <div>
                    <Link href="tel:0909940333" className="btn-icon">
                        <BsFillTelephoneFill className='icon-btn' />
                    </Link>
                </div>

                <div>
                    <Link href="https://zalo.me/0909940333">
                        <SiZalo className='icon-btn' />
                    </Link>
                </div>

                <div className="tooltip-btn">
                    <div class="tooltip">
                        <BsFillShareFill className='icon-btn' />
                        <span class="tooltiptext">
                            <div><a href="https://www.facebook.com/Nhà-Hàng-Yến-Long-Hải-101799236121370/" target="_blank">Facebook</a></div>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MultipleButton