import React from 'react';
import { useSwiper } from 'swiper/react';
import Image from 'next/image';
import styles from './Swiper.module.scss';
import Next from "../../../public/static/components/ArrowNext";


export const SwiperNext = () => {
  const swiper = useSwiper();

  return (
    <>

      <p className={styles.next} onClick={() => swiper.slideNext()}><Image src={Next} width={20}
      height={20} /></p>
      </>
  );
};