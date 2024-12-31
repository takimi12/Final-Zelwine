'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import styles from '../MobileSection.module.scss';
import { Prev } from '../../../components/swiper/Prev';
import { Next } from '../../../components/swiper/Next';
import Image from 'next/image';
import { Images } from '../../../types/mobileSection';

interface LeftSectionProps {
  images: Images[];
}

const LeftSection: React.FC<LeftSectionProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = images ? images.length : 0;

  return (
    <div className={styles.leftSection}>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        className={`${styles.swiper} `}
        wrapperClass={styles.wrapperClass}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.activeIndex);
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.swiper}>
            <Image src={image.src} alt='Popraw' width={200} height={200} />
          </SwiperSlide>
        ))}
        <div className={styles.pageNumber}>
          <div className={currentSlide === 0 ? `${styles.unactive}` : ''}>
            <Prev first='' last='' />
          </div>
          <div className={styles.slideInfo}>
            <p>{` ${currentSlide + 1} / ${totalSlides}`}</p>
          </div>
          <div
            className={
              currentSlide === totalSlides - 1 ? `${styles.unactive}` : ''
            }
          >
            <Next first='' last='' />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default LeftSection;
