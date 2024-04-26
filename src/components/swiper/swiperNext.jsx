import React from 'react';
import { useSwiper } from 'swiper/react';
import Image from 'next/image';
import styles from './Swiper.module.scss';
import ArrowNext from "../../../public/static/components/ArrowNext";


export const SwiperNext = () => {
  const swiper = useSwiper();

  return (
    <>

      <p className={styles.next} onClick={() => swiper.slideNext()}><Image src={ArrowNext} /></p>
      </>
  );
};