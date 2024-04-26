'use client';
import React from "react";
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import Image from "next/image";
import styles from "./Opinion.module.scss";
import Star from "../../../../public/static/Homepage/Opinion/star";

const Clients = ({ data }) => {

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
          <p className={`${styles.left1} p13brown `}>  Średnia ocena<span className="bodySmallBigger">4.9</span>
          </p>
          </div>
        </div>
        <div className={styles.right}>
          <p className="p15">
            <a className={styles.cta} href="/Opinie">
              Zobacz wszystkie
            </a>
          </p>
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
          {data.map((opinion, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.clientOpinion}>

                <div className={styles.clientOpinionWrapper}>
                <div className={styles.star}><Star /><Star /><Star /><Star /><Star /></div>
                <p className="p15six">{opinion.subtitle}</p> 
                  <p className="p15">{opinion.content}</p>
 
                  <div className={styles.sign}>
                    <h6 className="h6-300">
                      {opinion.name}{" "}
                      <span className="bodySmallSmaller">{`from ${opinion.from}`}</span>
                    </h6>
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