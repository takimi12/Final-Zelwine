'use client'
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import styles from './MobileSection.module.scss';

import Prev  from '../../../components/swiper/Prev';
import  Next  from '../../../components/swiper/Next';
import Image from 'next/image';
import Link from 'next/link';


import Telephone from "../../../../public/static/ProductPage/telephonepage.jsx";
import Car from '../../../../public/static/ProductPage/Car.jsx';
import Post from '../../../../public/static/ProductPage/post.jsx';


interface MetaData {
    key: string;
    value: string;
  }
  const ProductPageSingle = ({ responsemobile }: { responsemobile: any }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(responsemobile.images ? responsemobile.images.length : 0);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 769);
      };
  
      window.addEventListener('resize', handleResize);
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const getMetaValue = (metaData: MetaData[], key: string): string => {
      const metaItem = metaData.find((meta) => meta.key === key);
      return metaItem ? metaItem.value : '';
    };
  
    const getAddonValue = (metaData: MetaData[]): string => {
      const addonMeta = metaData.find((meta) => meta.key === 'addon');
      return addonMeta ? addonMeta.value : 'Brak informacji o addonie';
    };
  
    return (
      <>
      <section className={` ${styles.productSectionMobile}`}>
          {responsemobile && (
            <>
              {isMobile ? (
                <>
                  <div className={styles.leftSection}>
                    <Swiper
                      spaceBetween={10}
                      slidesPerView={1}
                      className={`${styles.swiper} `}
                      wrapperClass={styles.wrapperClass}
                      pagination={{ clickable: true }}
                      onSlideChange={(swiper) => {
                        setCurrentSlide(swiper.activeIndex);
                        setTotalSlides(swiper.slides.length);
                      }}
                    >
                      {responsemobile.images &&
                        responsemobile.images.map((image: any, index: number) => (
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
                        <div className={currentSlide === totalSlides - 1 ? `${styles.unactive}` : ''}>
                          <Next first='' last=''/>
                        </div>
                      </div>
                    </Swiper>
                  </div>
                  {responsemobile && (
                    <>
                      <div className={styles.rightSection}>
                        <div className={styles.sticky} key={responsemobile.id}>
                          <div className={styles.rightTitle}>
                            <h1>{getMetaValue(responsemobile.meta_data, 'tytul_na_strone_produktu')}</h1>
                            <p className="p15-six">{getAddonValue(responsemobile.meta_data)}</p>
                          </div>
                          <div className={styles.shortDesc}>
                            <p>{getMetaValue(responsemobile.meta_data, 'short_description')}</p>
                          </div>
  
                          <div className={styles.height}>
                            {responsemobile.attributes && responsemobile.attributes.map((attribute: any) => (
                              <div key={attribute.id}>
                                <p>{attribute.name}:</p>
                                <div className={styles.wrapperHeight}>
                                  {attribute.options.map((option: any) => (
                                    <div className={styles.availableHeight} key={option}>
                                      {option}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          <h3>{getMetaValue(responsemobile.meta_data, 'dopis_przy_cenie')}</h3>
  
                          <div className={styles.buttonWrapper}>
                            <Link href="/Kontakt">
                              <button type="button" data-button="true">
                                <span className="">Skontaktuj się</span>
                              </button>
                            </Link>
                          </div>
  
                          <div className={styles.time}>
                            <Car />
                            <p className="p15">Dostawa: 6 - 8 tygodni</p>
                          </div>
  
                          <div className={styles.wrapperDelivery}>
                            <div className={styles.delivery}>
                              <Telephone />
                              <p className="p15">123123123</p>
                            </div>
                            <div className={styles.delivery}>
                              <Post />
                              <p className="p15">test@test.pl</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </>
              ) : (
                // Render something if not mobile
                <></>
              )}
            </>
          )}
        </section>
      </>
    );
  };
  
  export default ProductPageSingle;
  