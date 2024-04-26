'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

import styles from './Series.module.scss';
import Link from 'next/link';
import SwiperNav from './SwiperNav';

function Series({ lastSegment2, seriesProp, prop, lastSegment1 }) {
  const [categories, setCategories] = useState(null);
  const [lastSegment, setLastSegment] = useState(null);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://grzejniki2.ergotree.pl/wp-json/wc/v3/products/categories?per_page=100', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('ck_333c63c1676df66d84322191922b725ba3dc7f1e:cs_85c7bc717de01741a71ad8dc9152986569b62cec')
          },
        });
        const result = await response.json();

        const filteredCategories = result.filter(category => category.parent === 0 && category.name !== "Bez kategorii");
        setCategories(filteredCategories);

        if (lastSegment2 !== undefined && lastSegment2 !== null) {
          const filteredLastSegment = result.filter(category => category.id == lastSegment2);
          setLastSegment(filteredLastSegment);

          const filteredCategories = result.filter(category => category.parent == lastSegment2);
          setCategories(filteredCategories);
        }
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, [lastSegment2]);

  return (
    <>
      <section className={styles.products}>
        <div className={styles.product}>
          {categories && (
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
                {prop !== null && prop !== undefined ? (
                  <h4>Kategorie Produktów</h4>
                ) : (
                  <>
                    {lastSegment2 ? <h4>Pozostałe serie</h4> : <h4>Pozostałe Kategorie</h4>}
                  </>
                )}
                <div className={styles.arrowParent}>
                  <SwiperNav first={isAtBeginning} last={isAtEnd} />
                </div>
              </div>
              {lastSegment2 ? (
  categories.map((category) => (
    <SwiperSlide key={category.id} className={styles.slide}>
      <Link href={`/Produkty/${category.parent}/${category.id}`}>
        {category.image && category.image.src && (
          <img
            src={category.image.src}
            alt={category.image.alt}
            className={styles.image}
          />
        )}
        <p className='p15sixx'>{category.name}</p>
      </Link>
    </SwiperSlide>
  ))
) :   categories.map((category) => (
  <SwiperSlide key={category.id} className={styles.slide}>
    <Link href={`/Produkty/${category.id}`}>
      {category.image && category.image.src && (
        <img
          src={category.image.src}
          alt={category.image.alt}
          className={styles.image}
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