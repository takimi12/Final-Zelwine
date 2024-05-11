'use client';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import {  Navigation } from 'swiper/modules';
import styles from "./MostPopular.module.scss"
import Image from 'next/image';
import Link from 'next/link';

export default function App({data}: any) {


  

  return (
    <>
       <section className={styles.mostPopular}>

      <Swiper
          className={styles.swiper}
          wrapperClass={styles.wrapperClass}
       slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[ Navigation]}
      >
           {data.map((item: any, index: number) => (
            <SwiperSlide className={styles.swiperSlide} key={index}>
            <Link  href={`/product/${item.link_do_produktu.ID}`}>
<div className={styles.imageWraper}> 

                <Image
  src={item.image.url}
  alt={item.title}
  width={400}
  height={400}
 objectFit='cover'
className={styles.imageLarge}
/>
</div>

              <div className={styles.swipperSliderHeading}>
                <h6 className={styles.h6}>{item.title}</h6>
                <h6 className={styles.h6}>{item.price}</h6>
              </div>
              </Link>
            </SwiperSlide>
           
          ))}
      </Swiper>
    </section>
    </>
  );
}
