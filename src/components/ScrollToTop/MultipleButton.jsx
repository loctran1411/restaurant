import React from 'react'
import '../../styles/scrolltotop.css'
import FloatingButton from './FloatingButton'

const MultipleButton = () => {

    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector('.scrollup');
        if (this.scrollY >= 360) scrollUp.classList.add('show-scroll');
        else scrollUp.classList.remove('show-scroll')
    })
    return (
        <>
            <div className="scrollup multi-btn">
                <FloatingButton />
            </div>
        </>
    )
}

export default MultipleButton