'use client'

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from "next/image";
import styles from  './AdsBottom.module.scss'

const AdsBottom = ({ acf }: { acf: any }) => {
  const breakpoints = {
    600: {
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
    renderBullet: function (index:any, className:any) {
      return '<span class="' + className + '">  </span>';
    },
  };


  return (

<section className={styles.renovationPageInfoAdvantages}>
<h2 className={styles.heading}>{acf.benefits.benefits_heading}</h2>
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
          {acf.benefits.benefits_repeater.map((benefit:any, index:any) => (
            <SwiperSlide key={index}>
             <div className={styles.renovationPageInfoParent}>
          <div className={styles.slides}>
                  <Image src={benefit.benefit_icons.url} alt={benefit.under_icon} width={65} height={64} />
                  <p className={`p15six ${styles.middleText}`}>{benefit.under_icon}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AdsBottom;