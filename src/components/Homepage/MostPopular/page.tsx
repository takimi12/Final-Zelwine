'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

import Image from 'next/image';
import styles from './MostPopular.module.scss';
import SwiperNav from '../../series/SwiperNav';
import { useEffect, useState } from 'react';
import Link from 'next/link';

function MostPopular({ data }) {
  const [isAtBeginning, setIsAtBeginning] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);


  const handleReachEnd = () => {
    setIsAtBeginning(false);
    setIsAtEnd(true);
  };

  const handleReachBeginning = () => {
    setIsAtBeginning(true);
    setIsAtEnd(false);
  };









  return (
    <section className={styles.mostPopular}>
      <div className='SwiperSliderParent'>
        <Swiper
          spaceBetween={20}
          slidesPerView='auto'
          slidesOffsetBefore={40}
          className={styles.swiper}
          wrapperClass={styles.wrapperClass}
          onReachEnd={handleReachEnd}
          onReachBeginning={handleReachBeginning}
        >
          <div className={styles.swiperTop}>
            <h4>Najczęściej wybierane</h4>
          <div>
            <SwiperNav  first={isAtBeginning} last={isAtEnd}/> 
          </div>
          </div>

          {data.map((item, index) => (
            <SwiperSlide className={styles.swiperSlide} key={index}>
            <Link  href={`/product/${item.link_do_produktu.ID}`}>
   
              <div className={styles.swiperSliderWrapper}>
                <div className={styles.swipersSliderImage}>
                <Image
  src={item.image.url}
  alt={item.title}
fill
/>
                </div>
              </div>
              <div className={styles.swipperSliderHeading}>
                <h6 className='h6-600'>{item.title}</h6>
                <h6 className='h6-600'>{item.price}</h6>
              </div>
              </Link>
            </SwiperSlide>
           
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default MostPopular;