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

import Seven_up from '../images/thuc-uong/7up.png'
import Bo_huc from '../images/thuc-uong/bohuc.png'
import Coca from '../images/thuc-uong/coca.png'
import Heineken from '../images/thuc-uong/heineken.png'
import Nuoc_suoi from '../images/thuc-uong/nuoc-suoi.png'
import Pepsi from '../images/thuc-uong/pepsi.png'
import Sting from '../images/thuc-uong/sting.png'
import Tiger_bac from '../images/thuc-uong/tiger-bac.png'
import Tiger_nau from '../images/thuc-uong/tiger-nau.png'
import Tra_xanh_0_do from '../images/thuc-uong/tra-xanh-0-do.png'

import { v4 as uuidv4 } from 'uuid';

export const name_list_menu = {
    cate_ghe: [
        {
            id: uuidv4(),
            name: 'ghẹ'
        }
    ],
    cate_cahap: [
        {
            id: uuidv4(),
            name: 'cá hấp'
        }
    ],
    cate_oc: [
        {
            id: uuidv4(),
            name: 'ốc'
        }
    ],
    cate_mongtay: [
        {
            id: uuidv4(),
            name: 'móng tay'
        }
    ],
    cate_ca: [
        {
            id: uuidv4(),
            name: 'cá'
        }
    ],
    cate_lau: [
        {
            id: uuidv4(),
            name: 'lẩu'
        }
    ],
    cate_thuc_uong: [
        {
            id: uuidv4(),
            name: 'Thức uống'
        }
    ]
}

export const menu = {
    ghe: [
        {
            id: uuidv4(),
            name: 'Ghẹ hấp',
            img: ghe_1,
            price: 'theo thời giá'
        },
        {
            id: uuidv4(),
            name: 'Ghẹ rang me',
            img: ghe_2,
            price: 'theo thời giá'
        },
        {
            id: uuidv4(),
            name: 'Ghẹ rang muối ',
            img: ghe_3,
            price: 'theo thời giá'
        },
        {
            id: uuidv4(),
            name: 'Lẩu ghẹ ',
            img: ghe_4,
            price: 'theo thời giá'
        }
    ],

    cahap: [
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
            name: 'Cá mú chưng tương ',
            img: ca_hap_3,
            price: 'theo thời giá'
        },
    ],

    oc: [
        {
            id: uuidv4(),
            name: 'Nghêu hấp sả',
            img: oc_1,
            price: '90.000đ/ 1 thố'
        },
        {
            id: uuidv4(),
            name: 'Nghêu hấp thái ',
            img: oc_2,
            price: '90.000đ/ 1 thố '
        },
        {
            id: uuidv4(),
            name: 'Nghêu um tiêu xanh ',
            img: oc_3,
            price: '90.000đ/1 thố'
        },
        {
            id: uuidv4(),
            name: 'canh nghêu thì là ',
            img: oc_4,
            price: '120.000đ/ 1 tô'
        }
    ],

    mongtay: [
        {
            id: uuidv4(),
            name: 'Xào lá quế ',
            img: mong_tay_1,
            price: '120.000đ/ 1 đĩa '
        },
        {
            id: uuidv4(),
            name: 'Xào rau muống ',
            img: mong_tay_2,
            price: '120.000đ/ 1 đĩa '
        },
        {
            id: uuidv4(),
            name: 'Xào bơ tỏi ',
            img: mong_tay_3,
            price: '120.000đ/ 1 đĩa '
        },
        {
            id: uuidv4(),
            name: 'Cháy tỏi ',
            img: mong_tay_4,
            price: '120.000đ/ 1 đĩa '
        },
        {
            id: uuidv4(),
            name: 'Rang me ',
            img: mong_tay_5,
            price: '120.000đ/ 1 đĩa '
        }
    ],

    ca: [
        {
            id: uuidv4(),
            name: 'Cá dứa kho tộ ',
            img: ca_1,
            price: '140.000đ/ 1 tộ '
        },
        {
            id: uuidv4(),
            name: 'Cá bóp kho tộ ',
            img: ca_2,
            price: '150.000đ/ 1 tộ'
        },
        {
            id: uuidv4(),
            name: 'Cá chiên sả ớt ',
            img: ca_3,
            price: '150.000đ/ 1 tộ'
        },
        {
            id: uuidv4(),
            name: 'cá chiên tươi',
            img: ca_4,
            price: '150.000đ/ 1 tộ'
        },
        {
            id: uuidv4(),
            name: 'Cá chiên sốt cà',
            img: ca_5,
            price: '150.000đ/ 1 tộ'
        }
    ],

    lau: [
        {
            id: uuidv4(),
            name: 'Lẩu cá nấu ngót ',
            img: lau_1,
            price: '300.000đ/ 1 lẩu '
        },
        {
            id: uuidv4(),
            name: 'Lẩu cá nấu măng chua ',
            img: lau_2,
            price: '300.000đ/ 1 lẩu '
        },
        {
            id: uuidv4(),
            name: 'Lẩu cá dứa ',
            img: lau_3,
            price: '300.000đ/ 1 lẩu '
        },
        {
            id: uuidv4(),
            name: 'lẩu cá bóp ',
            img: lau_4,
            price: '300.000đ/ 1 lẩu '
        },
        {
            id: uuidv4(),
            name: 'Lẩu tôm mực ',
            img: lau_5,
            price: '300.000đ/ 1 lẩu '
        },
        {
            id: uuidv4(),
            name: 'Lẩu thái lan ',
            img: lau_6,
            price: '350.000đ/ 1 lẩu '
        }
    ],

    trung: [{
        name: '',
        img: 'hải sản',
        price: 1
    }],

    thit: [{
        name: '',
        img: 'hải sản',
        price: 1
    }],

    ga: [{
        name: '',
        img: 'hải sản',
        price: 1
    }],

    tom: [{
        name: '',
        img: 'hải sản',
        price: 1
    }],

    ochuong: [{
        name: '',
        img: 'hải sản',
        price: 1
    }],
    sodiep: [{
        name: '',
        img: 'hải sản',
        price: 1
    }],

    hau: [{
        name: '',
        img: 'hải sản',
        price: 1
    }],

    comchien: [{
        name: '',
        img: 'hải sản',
        price: 1
    }],

    chao: [{
        name: '',
        img: 'hải sản',
        price: 1
    }]
}

export const menuType = {
    bia:"Bia",
    nuoc_ngot:'Nước ngọt',
    ruou:"Rượu",
    nuoc_suoi:"Nước suối",
}

export const loai_thuc_uong = {
    bia:[{
        id: uuidv4(),
        name: menuType.bia
    }],
    ruou:[{
        id: uuidv4(),
        name: menuType.ruou
    }],
    nuoc_ngot:[{
        id: uuidv4(),
        name: menuType.nuoc_ngot
    }],
    nuoc_suoi:[{
        id: uuidv4(),
        name: menuType.nuoc_suoi
    }],
}

export const thuc_uong = {
    list_thuc_uong: [
        {
            id: uuidv4(),
            name: 'Tiger Nâu',
            price:'19.000đ/ lon',
            type: menuType.bia,
            img: Tiger_nau
        },
        {
            id: uuidv4(),
            name: 'Tiger Bạc',
            price:'20.000đ/ lon',
            type: menuType.bia,
            img: Tiger_bac
        },
        {
            id: uuidv4(),
            name: 'Heineken',
            price:'22.000đ/ lon',
            type: menuType.bia,
            img: Heineken
        },
        {
            id: uuidv4(),
            name: 'Coca',
            price:'15.000đ/ lon',
            type: menuType.nuoc_ngot,
            img: Coca
        },
        {
            id: uuidv4(),
            name: 'Pepsi',
            price:'15.000đ/ lon',
            type: menuType.nuoc_ngot,
            img: Pepsi
        },
        {
            id: uuidv4(),
            name: '7Up',
            price:'15.000đ/ lon',
            type: menuType.nuoc_ngot,
            img: Seven_up
        },
        {
            id: uuidv4(),
            name: 'Sting',
            price:'15.000đ/ lon',
            type: menuType.nuoc_ngot,
            img: Sting
        },
        {
            id: uuidv4(),
            name: 'Bò húc',
            price:'20.000đ/ lon',
            type: menuType.nuoc_ngot,
            img: Bo_huc
        },
        {
            id: uuidv4(),
            name: 'Trà xanh 0 độ',
            price:'15.000đ/ chai',
            type: menuType.nuoc_ngot,
            img: Tra_xanh_0_do
        },
        {
            id: uuidv4(),
            name: 'Nước suối',
            price:'10.000đ/ chai',
            type: menuType.nuoc_suoi,
            img: Nuoc_suoi
        }
    ]
}