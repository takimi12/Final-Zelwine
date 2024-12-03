'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import styles from './AdsBottom.module.scss';

import { ACFData, Benefit } from '../../types/adsBottom'; 

const AdsBottom: React.FC<{ acf: ACFData }> = ({ acf }) => {
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
      <h3 className={styles.heading}>{acf.benefits.benefits_heading}</h3>
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
          {acf.benefits.benefits_repeater.map(
            (benefit: Benefit, index: number) => (
              <SwiperSlide key={index} className={styles.slide}>
                <div className={styles.renovationPageInfoParent}>
                  <div className={styles.slides}>
                    <Image
                      src={benefit.benefit_icons.url}
                      alt={benefit.under_icon}
                      width={65}
                      height={64}
                      className={styles.image}
                    />
                    <h6 className={` ${styles.middleText}`}>
                      {benefit.under_icon}
                    </h6>
                  </div>
                </div>
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default AdsBottom;
