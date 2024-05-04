'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

import styles from './Series.module.scss';
import Link from 'next/link';
import SwiperNav from './SwiperNav';
import Image from 'next/image';


function Series({ series, series1, filtereddataSeries, productSeriesProp}: any) {

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

  let filteredCategories = [];
  if (series) {
    filteredCategories = series.filter((category: any) => category.parent === 0 && category.name !== "Bez kategorii");
  }

  let filteredCategories1 = [];
  if (series1) {
    filteredCategories1 = series1.filter((category: any) => category.parent === 0 && category.name !== "Bez kategorii");
  }


  return (
    <>
      <section className={styles.products}>
        <div className={styles.product}>
          {filteredCategories.length > 0 && (
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              slidesOffsetBefore={40}
              className={styles.swiperClass}
              wrapperClass={styles.wrapperClass}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 30 },
                768: { slidesPerView: 2, spaceBetween: 40 },
                991: { slidesPerView: 3, spaceBetween: 40 },
                1199: { slidesPerView: 4, spaceBetween: 40 },
              }}
              onReachEnd={handleReachEnd}
              onReachBeginning={handleReachBeginning}
            >
              <div className={styles.topParent}>
                <p>Kategorie produktów</p>
                <div className={styles.arrowParent}>
                  <SwiperNav first={isAtBeginning} last={isAtEnd} />
                </div>
              </div>
              {filteredCategories.map((category: any) => (
                <SwiperSlide key={category.id} className={styles.slide}>
                  <Link href={`/Produkty/${category.id}`}>
                    {category.image && category.image.src && (
                      <div className={styles.imageWraper}> 
                      <Image
                        src={category.image.src}
                        alt={category.image.alt}
                        className={styles.image}
                        fill
                        objectFit='cover'
                      />
                      </div>
                    )}
              
                    <div className={styles.swipperSliderHeading}>
                    <p className='p15sixx'>{category.name}</p>
              </div>
                  </Link>
                </SwiperSlide>






              ))}
            </Swiper>
          )}
          
          {filteredCategories1.length > 0 && (
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              slidesOffsetBefore={40}
              className={styles.swiperClass}
              wrapperClass={styles.wrapperClass}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 30 },
                768: { slidesPerView: 2, spaceBetween: 40 },
                991: { slidesPerView: 3, spaceBetween: 40 },
                1199: { slidesPerView: 4, spaceBetween: 40 },
              }}
              onReachEnd={handleReachEnd}
              onReachBeginning={handleReachBeginning}
            >
              <div className={styles.topParent}>
                <p>Pozostałe Kategorie</p>
                <div className={styles.arrowParent}>
                  <SwiperNav first={isAtBeginning} last={isAtEnd} />
                </div>
              </div>
              {filteredCategories1.map((category: any) => (
                <SwiperSlide key={category.id} className={styles.slide}>
                  <Link href={`/Produkty/${category.id}`}>
                    {category.image && category.image.src && (
                      <Image
                        src={category.image.src}
                        alt={category.image.alt}
                        className={styles.image}
                        width={425}
                        height={325}
                      />
                    )}
                    <p className='p15sixx'>{category.name}</p>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {filtereddataSeries.length  > 0 && (
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              slidesOffsetBefore={40}
              className={styles.swiperClass}
              wrapperClass={styles.wrapperClass}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 30 },
                768: { slidesPerView: 2, spaceBetween: 40 },
                991: { slidesPerView: 3, spaceBetween: 40 },
                1199: { slidesPerView: 4, spaceBetween: 40 },
              }}
              onReachEnd={handleReachEnd}
              onReachBeginning={handleReachBeginning}
            >
              <div className={styles.topParent}>
                <p>Pozostałe Serie</p>
                <div className={styles.arrowParent}>
                  <SwiperNav first={isAtBeginning} last={isAtEnd} />
                </div>
              </div>
              {filtereddataSeries.map((category: any) => (
                <SwiperSlide key={category.id} className={styles.slide}>
                  <Link href={`/Produkty/${category.id}`}>
                    {category.image && category.image.src && (
                      <Image
                        src={category.image.src}
                        alt={category.image.alt}
                        className={styles.image}
                        width={425}
                        height={325}
                      />
                    )}
                    <p className='p15sixx'>{category.name}</p>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>
    </>
  );
}

export default Series;