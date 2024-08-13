'use client';
import React from 'react';
import { useSwiper } from 'swiper/react';
import {ArrowPrev} from "../../../public/static/components/ArrowPrev";
import Image from 'next/image';
import styles from './Swiper.module.scss';


export const SwiperPrev = () => {
  const swiper = useSwiper();

  return (
    <>
      <p className={styles.prev} onClick={() => swiper.slidePrev()}>
        <Image 
        width={20}
        height={20}
      src={ArrowPrev} /></p>
       </>
  );
};