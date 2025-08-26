import React from 'react';
import { useSwiper } from 'swiper/react';
import styles from './Swiper.module.scss';

import ArrowPrev from '../../../../public/static/components/ArrowPrev';

interface SwiperNavProps {
  first: boolean | string;
  last: boolean | string;
}

export const Prev: React.FC<SwiperNavProps> = ({ first, last }) => {
  const swiper = useSwiper();

  return (
    <>
      <ArrowPrev
        onClick={() => swiper.slidePrev()}
        className={first ? styles.unactive : styles.active}
      />
    </>
  );
};
