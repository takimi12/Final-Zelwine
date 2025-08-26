import React from 'react';
import { useSwiper } from 'swiper/react';
import styles from './Swiper.module.scss';

import { ArrowNext } from '../../../../public/static/components/ArrowNext';

interface SwiperNavProps {
  first: boolean | string;
  last: boolean | string;
}

export const Next: React.FC<SwiperNavProps> = ({ first, last }) => {
  const swiper = useSwiper();

  return (
    <>
      <ArrowNext
        onClick={() => swiper.slideNext()}
        className={last ? styles.unactive : styles.active}
      />
    </>
  );
};
