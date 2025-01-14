'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import styles from './AdsTop.module.scss';

import { ACFData, Step } from '../../types/adsTop';
import { breakpoints4 } from '@/app/constants/breakpoints';

export const AdsTop: React.FC<{ acf: ACFData }> = ({ acf }) => {


  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">  </span>';
    },
  };

  return (
    <section className={styles.renovationPageInfoAdvantages}>
      <div></div>
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
          breakpoints={breakpoints4}
        >
          {acf.simple_steps.steps.map((step: Step, index: number) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.renovationPageInfoParent}>
                <div className={styles.slides}>
                  <Image
                    src={step.icon.url}
                    alt={step.icon.title}
                    width={step.icon.width}
                    height={step.icon.height}
                    className={styles.image}
                  />
                  <h6 className={` ${styles.middleText}`}>{step.bold}</h6>
                  <p className={`body ${styles.bottomText}`}>{step.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
