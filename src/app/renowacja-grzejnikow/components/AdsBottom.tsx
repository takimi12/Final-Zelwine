'use client'

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from "next/image";
import styles from  './AdsBottom.module.scss'

interface ImageSize {

}

interface ImageData {
  ID: number;
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  link: string;
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  status: string;
  uploaded_to: number;
  date: string;
  modified: string;
  menu_order: number;
  mime_type: string;
  type: string;
  subtype: string;
  icon: string;
  width: number;
  height: number;
  sizes: ImageSize;
}

interface ButtonData {
  title: string;
  url: string;
  target: string;
}

interface HeroData {
  image: ImageData;
  title: string;
  paragraph: string;
  button: ButtonData;
}

interface Step {
}

interface ProcessStep {

}

interface Benefit {
  benefit_icons: {
    url: string;
  };
  under_icon: string;
}

interface ACFData {
  hero: HeroData;
  simple_steps: {
    heading: string;
    steps: Step[];
  };
  process: {
    title: string;
    process_steps: ProcessStep[];
  };
  benefits: {
    benefits_heading: string;
    benefits_repeater: Benefit[];
  };
}

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
          {acf.benefits.benefits_repeater.map((benefit: Benefit, index: number) => (
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
                  <h6 className={` ${styles.middleText}`}>{benefit.under_icon}</h6>
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