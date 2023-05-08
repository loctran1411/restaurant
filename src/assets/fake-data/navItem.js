import home_icon from '../icon/home.png'
import best_seller_icon from '../icon/best-seller.png'
import lobby_icon from '../icon/lift.png'
import booking_icon from '../icon/restaurant.png'
import contact_icon from '../icon/contacting.png'

import sanh_1 from '../images/sanh-1.jpg'
import sanh_2 from '../images/sanh-2.jpg'
import sanh_3 from '../images/sanh-3.jpg'

export const navItem = [
    {
        id: 1,
        name: "Giới thiệu",
        icon: home_icon,
        href: "#gioi-thieu",
        alt: "home"
    },
    {
        id: 2,
        name: "Món bán chạy",
        icon: best_seller_icon,
        href: "#mon-ban-chay",
        alt: "best-seller"
    },
    // {
    //     id: 3,
    //     name: "Sảnh tiệc",
    //     icon: lobby_icon,
    //     href: "#sanh-tiec",
    //     alt: "lobby"
    // },
    {
        id: 4,
        name: "Đặt bàn",
        icon: booking_icon,
        href: "#dat-ban",
        alt: "booking"
    },
    {
        id: 5,
        name: "Liên hệ",
        icon: contact_icon,
        href: "#lien-he",
        alt: "contact"
    },
]

export const dropdownNavbar = [
    {
        id: 1,
        title: "Sảnh 1",
        img: sanh_1
    },
    {
        id: 2,
        title: "Sảnh 2",
        img: sanh_2
    },
    {
        id: 3,
        title: "Sảnh 3",
        img: sanh_3
    }
]