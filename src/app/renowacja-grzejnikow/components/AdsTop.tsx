'use client';

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from "next/image";
import styles from  './AdsTop.module.scss'
import { getData } from "@/app/api/Renowacja";

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
  icon: ImageData;
  bold: string;
  text: string;
}

interface ProcessStep {

}

interface Benefit {

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

export const AdsTop: React.FC<{ acf: ACFData }> = ({ acf }) => {
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
}