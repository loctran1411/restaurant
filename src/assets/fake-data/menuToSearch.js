import ca_1 from '../images/menu/ca-1.png'
import ca_2 from '../images/menu/ca-2.png'
import ca_3 from '../images/menu/ca-3.png'
import ca_4 from '../images/menu/ca-4.png'
import ca_5 from '../images/menu/ca-5.png'

import ca_hap_1 from '../images/menu/ca-hap-1.png'
import ca_hap_2 from '../images/menu/ca-hap-2.png'
import ca_hap_3 from '../images/menu/ca-hap-3.png'

import ghe_1 from '../images/menu/ghe-1.png'
import ghe_2 from '../images/menu/ghe-2.png'
import ghe_3 from '../images/menu/ghe-3.png'
import ghe_4 from '../images/menu/ghe-4.png'

import lau_1 from '../images/menu/lau-1.png'
import lau_2 from '../images/menu/lau-2.png'
import lau_3 from '../images/menu/lau-3.png'
import lau_4 from '../images/menu/lau-4.png'
import lau_5 from '../images/menu/lau-5.png'
import lau_6 from '../images/menu/lau-6.png'

import mong_tay_1 from '../images/menu/mong-tay-1.png'
import mong_tay_2 from '../images/menu/mong-tay-2.png'
import mong_tay_3 from '../images/menu/mong-tay-3.png'
import mong_tay_4 from '../images/menu/mong-tay-4.png'
import mong_tay_5 from '../images/menu/mong-tay-5.png'

import oc_1 from '../images/menu/oc-1.png'
import oc_2 from '../images/menu/oc-2.png'
import oc_3 from '../images/menu/oc-3.png'
import oc_4 from '../images/menu/oc-4.png'
import { v4 as uuidv4 } from 'uuid';

const menuToSearch = [
    //ghe
    {
        id: uuidv4(),
        name: 'Ghẹ hấp',
        img: ghe_1,
        price: 'theo thời giá',
        cate:'ghe'
    },
    {
        id: uuidv4(),
        name: 'Ghẹ rang me',
        img: ghe_2,
        price: 'theo thời giá',
        cate:'ghe'
    },
    {
        id: uuidv4(),
        name: 'Ghẹ rang muối ',
        img: ghe_3,
        price: 'theo thời giá',
        cate:'ghe'
    },
    {
        id: uuidv4(),
        name: 'Lẩu ghẹ ',
        img: ghe_4,
        price: 'theo thời giá',
        cate:'ghe'
    },
    //ca hap
    {
        id: uuidv4(),
        name: 'Cá chim hấp nấm ',
        img: ca_hap_1,
        price: 'theo thời giá'
    },
    {
        id: uuidv4(),
        name: 'Cá chẽm hấp hongkong ',
        img: ca_hap_2,
        price: 'theo thời giá'
    },
    {
        id: uuidv4(),
        name: 'cá mú chưng tương ',
        img: ca_hap_3,
        price: 'theo thời giá'
    },
    //oc
    {
        id: uuidv4(),
        name: 'Nghêu hấp sả',
        img: oc_1,
        price: '90đ/ 1 thố'
    },
    {
        id: uuidv4(),
        name: 'Nghêu hấp thái ',
        img: oc_2,
        price: '90đ/ 1 thố '
    },
    {
        id: uuidv4(),
        name: 'Nghêu um tiêu xanh ',
        img: oc_3,
        price: '90đ/1 thố'
    },
    {
        id: uuidv4(),
        name: 'canh nghêu thì là ',
        img: oc_4,
        price: '120đ/ 1 tô'
    },
    //mong tay
    {
        id: uuidv4(),
        name: 'Xào lá quế ',
        img: mong_tay_1,
        price: '120đ/ 1 đĩa '
    },
    {
        id: uuidv4(),
        name: 'Xào rau muống ',
        img: mong_tay_2,
        price: '120đ/ 1 đĩa '
    },
    {
        id: uuidv4(),
        name: 'Xào bơ tỏi ',
        img: mong_tay_3,
        price: '120đ/ 1 đĩa '
    },
    {
        id: uuidv4(),
        name: 'Cháy tỏi ',
        img: mong_tay_4,
        price: '120đ/ 1 đĩa '
    },
    {
        id: uuidv4(),
        name: 'Rang me ',
        img: mong_tay_5,
        price: '120đ/ 1 đĩa '
    },
    //ca
    {
        id: uuidv4(),
        name: 'Cá dứa kho tộ ',
        img: ca_1,
        price: '140đ/ 1 tộ '
    },
    {
        id: uuidv4(),
        name: 'Cá bóp kho tộ ',
        img: ca_2,
        price: '150đ/ 1 tộ'
    },
    {
        id: uuidv4(),
        name: 'Cá chiên sả ớt ',
        img: ca_3,
        price: '150đ/ 1 tộ'
    },
    {
        id: uuidv4(),
        name: 'cá chiên tươi',
        img: ca_4,
        price: '150đ/ 1 tộ'
    },
    {
        id: uuidv4(),
        name: 'Cá chiên sốt cà',
        img: ca_5,
        price: '150đ/ 1 tộ'
    },
    //lau
    {
        id: uuidv4(),
        name: 'Lẩu cá nấu ngót ',
        img: lau_1,
        price: '300đ/ 1 lẩu '
    },
    {
        id: uuidv4(),
        name: 'Lẩu cá nấu măng chua ',
        img: lau_2,
        price: '300đ/ 1 lẩu '
    },
    {
        id: uuidv4(),
        name: 'Lẩu cá dứa ',
        img: lau_3,
        price: '300đ/ 1 lẩu '
    },
    {
        id: uuidv4(),
        name: 'lẩu cá bóp ',
        img: lau_4,
        price: '300đ/ 1 lẩu '
    },
    {
        id: uuidv4(),
        name: 'Lẩu tôm mực ',
        img: lau_5,
        price: '300đ/ 1 lẩu '
    },
    {
        id: uuidv4(),
        name: 'Lẩu thái lan ',
        img: lau_6,
        price: '350đ/ 1 lẩu '
    }
]

export default menuToSearch