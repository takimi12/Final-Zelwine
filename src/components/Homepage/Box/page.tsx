'use client';

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import styles from './Box.module.scss';

const FutureSection = ({ data }: { data: Array<object> }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">  </span>';
    },
  };

  const breakpoints = {
    300: {
      slidesPerView: 1, // Ustawiamy na jeden slajd poniżej 550px
    },
    550: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  };

  return (
    <section className={styles.futureSection}>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className={styles.swiper}
        spaceBetween={20}
        slidesOffsetBefore={40}
        wrapperClass={styles.wrapperClass}
        breakpoints={breakpoints} // Dodaj breakpoints do Swipera
      >
        {data.map((feature, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.feature}>
              <div className={styles.featureWrapper}>
                <div className={styles.featureIcon}>
                  <Image
                    src={(feature as { icon: { url: string; alt: string } }).icon.url}
                    alt={(feature as { icon: { url: string; alt: string } }).icon.alt}
                    width={50}
                    height={50}
                  />
                </div>
                <p className={`${styles.featureTitle} p15six`}>{(feature as { title: string }).title}</p>
                <p className={`${styles.featureDescription} p15`}>{(feature as { description: string }).description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FutureSection;