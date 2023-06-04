import { v4 as uuidv4 } from 'uuid';

import mainSlideFiles from '../fake-data/main_slide.json';
import subSlideFiles from '../fake-data/sub_slide.json';

const mainSlideData = mainSlideFiles.map((f) => ({id: uuidv4(), src: `./slider/main/${f}`, alt: f}));

const subSlideData = subSlideFiles.map((f) => ({id: uuidv4(), src: `./slider/sub/${f}`, alt: f}));

export const introSlide = {
  view_restaurant: mainSlideData,
  view_lobby: subSlideData,
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