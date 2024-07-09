'use client';
import React from "react";
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import styles from "./Opinion.module.scss";
import Star from "../../../../public/static/Homepage/Opinion/star";
import Link from "next/link";

const Clients = ({ data }: { data: any[] }) => {

  const breakpoints = {
    200: {
      slidesPerView: 1,
    },
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
    <section className={styles.clients}>
      <div className={styles.top}>
        <div className={styles.left}>
          <h4 >Opinie klientów</h4>
          <div className={styles.left1}
          >
          <p className={`${styles.left1} EyebrowHeader `}>  Średnia ocena<span className="bodySmallBigger">4.9</span>
          </p>
          </div>
        </div>
        <div className={styles.right}>
             <Link className={`${styles.cta} body`} href="/Opinie">
              Zobacz wszystkie
            </Link>
                  </div>
      </div>
      <div className={styles.clientOpinionParent}>
        <Swiper 
        spaceBetween={20} 
        slidesPerView={3} 
        slidesOffsetBefore={40}
        wrapperClass={styles.wrapperClass}
        breakpoints={breakpoints} 
        >
            {data.map((opinion: any, index: number) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.clientOpinion}>

                <div className={styles.clientOpinionWrapper}>
                <div className={styles.star}><Star /><Star /><Star /><Star /><Star /></div>
                <h6 className={styles.h6}>{opinion.subtitle}</h6> 
                <p className={`body ${styles.body}`}>{opinion.content}</p>

                  <div className={styles.sign}>
                    <p className={`body-small ${styles.bodySmall}`}>
                      {opinion.name}{" "}
                      <span className={`body-small ${styles.bodySmallSmaller}`}>{`from ${opinion.from}`}</span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;