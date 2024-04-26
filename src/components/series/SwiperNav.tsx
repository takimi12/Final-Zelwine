// SwiperNav.js
import React from 'react';
import { useSwiper } from 'swiper/react';
import styles from './Swiper.module.scss';

import ArrowPrev from '../../../public/static/Homepage/MostPopular/ArrowPrev';
import ArrowNext from '../../../public/static/Homepage/MostPopular/ArrowNext';


const SwiperNav = ({first, last}) => {
  const swiper = useSwiper();


   

  return (
    <>
    <div className={styles.swiperNav}>
   <ArrowPrev
        onClick={() => swiper.slidePrev()}
        className={first ? styles.unactive : styles.active} 
      />
      <ArrowNext
        onClick={() => swiper.slideNext()}
        className={last ? styles.unactive : styles.active}
      />
</div>
 
    </>
  );
};

export default SwiperNav;