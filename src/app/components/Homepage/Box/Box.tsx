'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import styles from './Box.module.scss';

interface Feature {
  icon: {
    url: string;
    alt: string;
  };
  title: string;
  description: string;
}

interface BoxesProps {
  data: Feature[];
}

const Boxes = ({ data }: BoxesProps) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">  </span>';
    },
  };

  const breakpoints = {
    300: {
      slidesPerView: 1,
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
        breakpoints={breakpoints}
      >
        {data.map((feature, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.feature}>
              <div className={styles.featureWrapper}>
                <div className={styles.featureIcon}>
                  <Image
                    src={feature.icon.url}
                    alt={feature.icon.alt}
                    width={50}
                    height={50}
                  />
                </div>
                <h6 className={styles.h6}>{feature.title}</h6>
                <p className='body'>{feature.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Boxes;
