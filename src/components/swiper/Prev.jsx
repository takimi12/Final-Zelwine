// SwiperNav.js
import React from 'react';
import { useSwiper } from 'swiper/react';
import styles from './Swiper.module.scss';

import ArrowPrev from "../../../public/static/components/ArrowPrev"


const SwiperNav = ({first, last}) => {
  const swiper = useSwiper();


   

  return (
    <>
   <ArrowPrev
        onClick={() => swiper.slidePrev()}
        className={first ? styles.unactive : styles.active} 
      />
 
 
    </>
  );
};

export default SwiperNav;