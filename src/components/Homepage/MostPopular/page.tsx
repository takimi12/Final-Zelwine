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

function MostPopular({ data }: { data: any }) {
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




  const breakpoints = {
    400: {
      slidesPerView: 1,
    },
  800: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  };




  return (
    <section className={styles.mostPopular}>
      <div className='SwiperSliderParent'>
        <Swiper
          className={styles.swiper}
          wrapperClass={styles.wrapperClass}
          onReachEnd={handleReachEnd}
          onReachBeginning={handleReachBeginning}
          spaceBetween={20}
          slidesPerView={4}
          slidesOffsetBefore={40}
          breakpoints={breakpoints} // Dodaj breakpoints do Swipera
        >
          <div className={styles.swiperTop}>
            <h4 className={styles.h4}>Najczęściej wybierane</h4>
          <div>
            <SwiperNav  first={isAtBeginning} last={isAtEnd}/> 
          </div>
          </div>

          {data.map((item: any, index: number) => (
            <SwiperSlide className={styles.swiperSlide} key={index}>
            <Link  href={`/product/${item.link_do_produktu.ID}`}>
<div className={styles.imageWraper}> 

                <Image
  src={item.image.url}
  alt={item.title}
 fill
 objectFit='cover'
className={styles.imageLarge}
/>
</div>

              <div className={styles.swipperSliderHeading}>
                <h6 className={styles.h6}>{item.title}</h6>
                <h6 className={styles.h6}>{item.price}</h6>
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


