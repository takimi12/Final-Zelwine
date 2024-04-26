// SwiperNav.js
import React from 'react';
import { useSwiper } from 'swiper/react';
import styles from './Swiper.module.scss';

import ArrowNext from "../../../public/static/components/ArrowNext"

const SwiperNav = ({first, last}) => {
  const swiper = useSwiper();


   

  return (
    <>
 
      <ArrowNext
        onClick={() => swiper.slideNext()}
        className={last ? styles.unactive : styles.active}
      />

 
    </>
  );
};

export default SwiperNav;