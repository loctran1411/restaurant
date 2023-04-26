import nha_hang1 from '../images/nha-hang1.jpg'
import nha_hang2 from '../images/nha-hang2.jpg'
import { v4 as uuidv4 } from 'uuid';

const introSlide = [
    {
      id: uuidv4(),
      src: nha_hang1,
      alt:'view'
    },
    {
      id: uuidv4(),
      src: nha_hang2,
      alt:'view'
    }
  ];
  
  export default introSlide;