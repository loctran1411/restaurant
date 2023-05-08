/* #region  khai vị */
import soup_cua from '../images/menu/soup-1.png'
import soup_hai_san from '../images/menu/soup-2.png'
import goi_bo_bop_thau from '../images/menu/goi-bo-bop-thau.png'
import goi_ngo_sen_tom_thit from '../images/menu/goi-ngo-sen-tom-thit.png'
import goi_sua from '../images/menu/goi-sua.png'
import salad_dau_giam from '../images/menu/salad-dau-giam.png'
/* #endregion */

/* #region  ghẹ */
import ghe_1 from '../images/menu/ghe-1.png'
import ghe_2 from '../images/menu/ghe-2.png'
import ghe_3 from '../images/menu/ghe-3.png'
/* #endregion */

/* #region  lẩu */
import lau_3 from '../images/menu/lau-3.png'
import lau_4 from '../images/menu/lau-4.png'
import lau_5 from '../images/menu/lau-5.png'
import lau_6 from '../images/menu/lau-6.png'
/* #endregion */

/* #region  móng tay */
import mong_tay_1 from '../images/menu/mong-tay-1.png'
import mong_tay_3 from '../images/menu/mong-tay-3.png'
import mong_tay_4 from '../images/menu/mong-tay-4.png'
import mong_tay_5 from '../images/menu/mong-tay-5.png'
/* #endregion */

/* #region  ốc */
import oc_1 from '../images/menu/oc-1.png'
import oc_2 from '../images/menu/oc-2.png'
import oc_3 from '../images/menu/oc-3.png'
/* #endregion */

/* #region  thịt */
import suon_cot_let_ram from '../images/menu/suon-cot-let-ram.png'
import suon_non_xao_chua_ngot from '../images/menu/suon-non-xao-chua-ngot.png'
/* #endregion */

/* #region  gà */
import ga_4 from '../images/menu/ga-4.png'
import ga_5 from '../images/menu/ga-5.png'
import ga_6 from '../images/menu/ga-6.png'
/* #endregion */

/* #region  tôm */
import tom_5 from '../images/menu/tom-5.png'
import tom_6 from '../images/menu/tom-6.png'
import tom_7 from '../images/menu/tom-7.png'
import tom_9 from '../images/menu/tom-9.png'
import tom_10 from '../images/menu/tom-10.png'
import tom_11 from '../images/menu/tom-11.png'
/* #endregion */

/* #region  ốc hương */
import oc_huong_2 from '../images/menu/oc-huong-2.png'
import oc_huong_3 from '../images/menu/oc-huong-3.png'
import oc_huong_4 from '../images/menu/oc-huong-4.png'
import oc_huong_5 from '../images/menu/oc-huong-5.png'
/* #endregion */

/* #region  sò điệp */
import so_diep_1 from '../images/menu/so-diep-1.png'
import so_diep_2 from '../images/menu/so-diep-2.png'
/* #endregion */

/* #region hàu */
import hau_1 from '../images/menu/hau-1.png'
import hau_2 from '../images/menu/hau-2.png'
/* #endregion */

/* #region  cơm chiên */
import com_chien_3 from '../images/menu/com-chien-3.png'
import com_chien_4 from '../images/menu/com-chien-4.png'
/* #endregion */

import { v4 as uuidv4 } from 'uuid';

const menuToSearch = [
    //khai vi
    {
        id: uuidv4(),
        name: 'Súp cua',
        img: soup_cua,
        price: '120.000đ/ 1 tô '
    },
    {
        id: uuidv4(),
        name: 'Súp hải sản',
        img: soup_hai_san,
        price: '120.000đ/ 1 tô '
    },
    {
        id: uuidv4(),
        name: 'Salad dầu giấm',
        img: salad_dau_giam,
        price: '70.000đ/ 1 dĩa '
    },
    {
        id: uuidv4(),
        name: 'Gỏi bò bóp thấu',
        img: goi_bo_bop_thau,
        price: '150.000đ/ 1 dĩa '
    },
    {
        id: uuidv4(),
        name: 'Gỏi ngó sen tôm thịt',
        img: goi_ngo_sen_tom_thit,
        price: '150.000đ/ 1 dĩa '
    },
    {
        id: uuidv4(),
        name: 'Gỏi sứa',
        img: goi_sua,
        price: '150.000đ/ 1 dĩa '
    },
    //ghe
    {
        id: uuidv4(),
        name: 'Ghẹ hấp',
        img: ghe_1,
        price: 'theo thời giá',
        cate: 'ghe'
    },
    {
        id: uuidv4(),
        name: 'Ghẹ rang me',
        img: ghe_2,
        price: 'theo thời giá',
        cate: 'ghe'
    },
    {
        id: uuidv4(),
        name: 'Ghẹ rang muối ',
        img: ghe_3,
        price: 'theo thời giá',
        cate: 'ghe'
    },
    //oc
    {
        id: uuidv4(),
        name: 'Nghêu hấp sả',
        img: oc_1,
        price: '90.000đ/ 1 thố',
        cate: 'oc'
    },
    {
        id: uuidv4(),
        name: 'Nghêu hấp thái ',
        img: oc_2,
        price: '90.000đ/ 1 thố ',
        cate: 'oc'
    },
    {
        id: uuidv4(),
        name: 'Nghêu um tiêu xanh ',
        img: oc_3,
        price: '90.000đ/1 thố',
        cate: 'oc'
    },
    //mong tay
    {
        id: uuidv4(),
        name: 'Xào lá quế ',
        img: mong_tay_1,
        price: '120.000đ/ 1 đĩa ',
        cate: 'mongtay'
    },
    {
        id: uuidv4(),
        name: 'Xào bơ tỏi ',
        img: mong_tay_3,
        price: '120.000đ/ 1 đĩa ',
        cate: 'mongtay'
    },
    {
        id: uuidv4(),
        name: 'Cháy tỏi ',
        img: mong_tay_4,
        price: '120.000đ/ 1 đĩa ',
        cate: 'mongtay'
    },
    {
        id: uuidv4(),
        name: 'Rang me ',
        img: mong_tay_5,
        price: '120.000đ/ 1 đĩa ',
        cate: 'mongtay'
    },
    //lau
    {
        id: uuidv4(),
        name: 'Lẩu cá dứa ',
        img: lau_3,
        price: '300.000đ/ 1 lẩu ',
        cate: 'lau'
    },
    {
        id: uuidv4(),
        name: 'lẩu cá bóp ',
        img: lau_4,
        price: '300.000đ/ 1 lẩu ',
        cate: 'lau'
    },
    {
        id: uuidv4(),
        name: 'Lẩu tôm mực ',
        img: lau_5,
        price: '300.000đ/ 1 lẩu ',
        cate: 'lau'
    },
    {
        id: uuidv4(),
        name: 'Lẩu thái lan ',
        img: lau_6,
        price: '350.000đ/ 1 lẩu ',
        cate: 'lau'
    },
    //thit
    {
        id: uuidv4(),
        name: 'Sườn cốt lết ram',
        img: suon_cot_let_ram,
        price: '120.000đ/ 1 dĩa'
    },
    {
        id: uuidv4(),
        name: 'Sườn non xào chua ngọt ',
        img: suon_non_xao_chua_ngot,
        price: '150.000đ/ 1 dĩa'
    },
    //ga
    {
        id: uuidv4(),
        name: 'Cánh gà chiên nước mắm ',
        img: ga_4,
        price: '160.000đ/ 1 dĩa'
    },
    {
        id: uuidv4(),
        name: 'Lẩu gà lá giang ',
        img: ga_5,
        price: '300.000đ/ 1 lẩu'
    },
    {
        id: uuidv4(),
        name: 'Gà đồi nướng muối ớt ',
        img: ga_6,
        price: '450.000đ/ 1 con'
    },
    //tom
    {
        id: uuidv4(),
        name: 'Tôm chiên giòn ',
        img: tom_5,
        price: '200.000đ/ 1 dĩa'
    },
    {
        id: uuidv4(),
        name: 'Tôm rang me ',
        img: tom_6,
        price: '200.000đ/ 1 dĩa'
    },
    {
        id: uuidv4(),
        name: 'Tôm nướng muối ớt ',
        img: tom_7,
        price: '200.000đ/ 1 dĩa'
    },
    {
        id: uuidv4(),
        name: 'Tôm hấp bia ',
        img: tom_9,
        price: '200.000đ/ 1 dĩa'
    },
    {
        id: uuidv4(),
        name: 'Tôm hấp nước dừa',
        img: tom_10,
        price: '200.000đ/ 1 dĩa'
    },
    {
        id: uuidv4(),
        name: 'Tôm cháy tỏi',
        img: tom_11,
        price: '200.000đ/ 1 dĩa'
    },
    //oc huong
    {
        id: uuidv4(),
        name: 'Ốc hương sốt me ',
        img: oc_huong_2,
        price: '200.000đ/ 1 dĩa'
    },
    {
        id: uuidv4(),
        name: 'Ốc hương cháy tỏi ',
        img: oc_huong_3,
        price: '200.000đ/ 1 dĩa'
    },
    {
        id: uuidv4(),
        name: 'Ốc hương sốt bơ cay ',
        img: oc_huong_4,
        price: '200.000đ/ 1 dĩa'
    },
    {
        id: uuidv4(),
        name: 'Ốc hương sốt trứng muối ',
        img: oc_huong_5,
        price: '200.000đ/ 1 dĩa'
    },
    //so diep
    {
        id: uuidv4(),
        name: 'Sò điệp nướng mỡ hành ',
        img: so_diep_1,
        price: '150.000đ/ 1 dĩa'
    },
    {
        id: uuidv4(),
        name: 'Sò điệp nướng phomai',
        img: so_diep_2,
        price: '150.000đ/ 1 dĩa'
    },
    //hau
    {
        id: uuidv4(),
        name: 'Hàu nướng mỡ hành ',
        img: hau_1,
        price: '35.000đ/ 1 con'
    },
    {
        id: uuidv4(),
        name: 'Hàu nướng phomai',
        img: hau_2,
        price: '35.000đ/ 1 con'
    },
    //com
    {
        id: uuidv4(),
        name: 'Cơm chiên dương châu ',
        img: com_chien_3,
        price: '120.000đ/ 1 thố'
    },
    {
        id: uuidv4(),
        name: 'Cơm chiên hải sản ',
        img: com_chien_4,
        price: '120.000đ/ 1 thố'
    },
]

export default menuToSearch