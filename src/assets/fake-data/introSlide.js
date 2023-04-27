import nha_hang1 from '../images/nha-hang1.jpg'
import nha_hang2 from '../images/nha-hang2.jpg'
import { v4 as uuidv4 } from 'uuid';

export const introSlide = {
  view_restaurant: [
    {
      id: uuidv4(),
      src: nha_hang1,
      alt: 'view'
    },
    {
      id: uuidv4(),
      src: nha_hang2,
      alt: 'view'
    }
  ],
  food_slide: [
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
      alt: 'food'
    },
    {
      id: uuidv4(),
      src: "https://assets.bonappetit.com/photos/631788f25635b01b337f6bb4/4:3/w_2000,h_1500,c_limit/220827_GuangXu_BA-UncleLou_014.jpg",
      alt: 'food'
    },
    {
      id: uuidv4(),
      src: "https://www.questrmg.com/wp-content/uploads/2019/03/web-banner-Top-Three-Restaurant-Trends.jpg",
      alt: 'food'
    }
  ]
};