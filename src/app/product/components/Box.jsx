import React from 'react';
import styles from './Box.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import Image from 'next/image';

const Box = ({ box }) => {
  return (
    <section className={styles.box}>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        slidesOffsetBefore={40}
        navigation
        pagination={{ clickable: true }}
        wrapperTag="div"  // Ustaw wrapperTag na "div"
        wrapperClass={styles.customWrapper}  // Dodaj klasę stylu dla wrappera
      >
        {box &&
          box.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.boxParent}> 
              <Image
                className={styles.obrazek}
                 src={item.obrazek}
                  alt={item.tytul}
                  width={48}
                  height={48}
                  />
                <p className="p15six">{item.tytul}</p>
                <p className='p15'>{item.subtytul}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

export default Box;
