'use client';

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from "next/image";
import styles from  './AdsTop.module.scss'
import { getData } from "@/app/api/Renowacja";


export const AdsTop: React.FC<{ acf: any }> = ({ acf }) => {

 

  const breakpoints = {
    1: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1150: {
      slidesPerView: 4,
    },
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">  </span>';
    },
  };

  return (
    <section className={styles.renovationPageInfoAdvantages}>
      <div>
      </div>
      <h3 className={styles.heading}>{acf.simple_steps.heading}</h3>
      <div className={styles.renovationPageInfoParentWrapper}>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          slidesOffsetBefore={40}
          wrapperClass={styles.wrapperClass}
          pagination={pagination}
          modules={[Pagination]}
          className={styles.swiper}
          breakpoints={breakpoints}
        >
            {acf.simple_steps.steps.map((step: any, index: number) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.renovationPageInfoParent}>
                <div className={styles.slides}>
                <Image
              src={step.icon.url}
              alt={step.icon.title}
              width={step.icon.width}
              height={step.icon.height}
            />
                  <p className={`p15six ${styles.middleText}`}>{step.bold}</p>
                  <p className={`p15 ${styles.bottomText}`}>{step.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
