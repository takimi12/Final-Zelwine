'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import SwiperNav from '../../series/SwiperNav';
import styles from './Inspiration.module.scss';
import Plus from '../../../../../public/static/Homepage/Inspiration/Plus';
import { Prev } from '../../swiper/Prev';
import { Next } from '../../swiper/Next';
import Arrow from '../../../../../public/static/Homepage/Inspiration/Arrow';
import Link from 'next/link';
import { SelectedImage, ConfigType } from '../../../types/inspiration';
import { breakpoints2 } from '@/app/constants/breakpoints';

const SectionSwiper = ({ data }: { data: SelectedImage[] }) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null,
  );
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const [isBottomSectionExpanded, setIsBottomSectionExpanded] = useState(false);
  const [isAtBeginning, setIsAtBeginning] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const [isAbove900, setIsAbove900] = useState(false);
  const [isBelow900, setIsBelow900] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsAbove900(typeof window === 'object' && window.innerWidth > 899);
      setIsBelow900(typeof window === 'object' && window.innerWidth <= 899);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleReachEnd = () => {
    setIsAtBeginning(false);
    setIsAtEnd(true);
  };

  const handleReachBeginning = () => {
    setIsAtBeginning(true);
    setIsAtEnd(false);
  };

  const handleImageClick = (image: SelectedImage, index: number) => {
    setSelectedImage(image);
    setSelectedSlideIndex(index);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedImage(null);
  };

  const handlePopupClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (showPopup) {
      document.body.classList.add('popup-active');
    } else {
      document.body.classList.remove('popup-active');
    }
  }, [showPopup]);

  useEffect(() => {
    if (showPopup && isBottomSectionExpanded) {
      if (popupRef.current) {
        popupRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }
  }, [showPopup, isBottomSectionExpanded]);

  const [isConfigExpanded, setIsConfigExpanded] = useState(false);

  const handleSwitcherClick = () => {
    setIsConfigExpanded(!isConfigExpanded);
  };



  return (
    <>
      <section className={styles.swiperSectionInspiration}>
        <Swiper
          spaceBetween={40}
          slidesPerView='auto'
          slidesOffsetBefore={40}
          className={styles.swiper}
          wrapperClass={styles.wrapperClass}
          onReachEnd={handleReachEnd}
          onReachBeginning={handleReachBeginning}
          breakpoints={breakpoints2}
        >
          <div className={styles.swiperTop}>
            <h4 className={styles.h4}>Inspiracje</h4>
            <div className='arrowParent'>
              <SwiperNav first={isAtBeginning} last={isAtEnd} />
            </div>
          </div>
          {data.map((item: SelectedImage, index: number) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div
                className={styles.hoverEffectDiv}
                onClick={() => handleImageClick(item, index)}
              >
                <Image
                  src={item.image.url}
                  alt={item.title}
                  width={388}
                  height={618}
                />
                <div className={styles.hoverEffectDivInner}>
                  <Plus />
                  <h3 className={styles.Look}>Zobacz</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {showPopup && (
          <div
            ref={popupRef}
            className={styles.popupOverlay}
            onClick={closePopup}
          >
            <div className={styles.popup} onClick={handlePopupClick}>
              {selectedImage && (
                <div className={styles.popupContent}>
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    slidesOffsetBefore={40}
                    className={`${isConfigExpanded ? styles.scroll : styles.swiper}`}
                    wrapperClass={styles.wrapperClass1}
                  >
                    <div className={styles.arrowWrapper}>
                      <div className={styles.arrowParent}>
                        <Prev first={isAtBeginning} last={isAtEnd} />
                      </div>
                      <div className={styles.arrowParent}>
                        <Next first={isAtBeginning} last={isAtEnd} />
                      </div>
                    </div>
                    <SwiperSlide
                      key={selectedSlideIndex}
                      className={styles.slide1}
                    >
                      <Image
                        src={selectedImage.bigger_image.url}
                        alt={selectedImage.bigger_image.title}
                      />
                    </SwiperSlide>
                    <SwiperSlide
                      key={selectedSlideIndex + 1}
                      className={styles.slide1}
                    >
                      <Image
                        src={selectedImage.bigger_image.url}
                        alt={selectedImage.bigger_image.title}
                      />
                    </SwiperSlide>
                  </Swiper>
                  {isAbove900 && (
                    <div className={styles.info}>
                      <div className={styles.topInfoSection}>
                        <div className='buttoninnerWrapper'>
                          <button
                            className={styles.closeButton}
                            onClick={closePopup}
                          >
                            X
                          </button>
                        </div>
                      </div>
                      <h5>{selectedImage.title} </h5>
                      <p className='body-small'>
                        Count Column: {selectedImage.count_column}
                      </p>
                      <p className='body-small'>
                        Height: {selectedImage.height}
                      </p>
                      <div className={styles.bottomInfoSection}>
                        <h6 className={` ${styles.firstParagraph}`}>
                          Konfiguracja ze zdjęcia
                        </h6>
                        {selectedImage.config.map(
                          (configItem: ConfigType, index: number) => (
                            <div
                              className={styles.bottomInfoSectionText}
                              key={index}
                            >
                              <div className={styles.photoWithText}>
                                <div className={styles.photo}>
                                  <Image
                                    src={configItem.image.url}
                                    alt='popraw'
                                    width={100}
                                    height={100}
                                  />
                                </div>
                                <div className='text'>
                                  <p className='EyebrowHeader'>
                                    {configItem.subtitle}
                                  </p>
                                  <p className='body-small'>
                                    {configItem.value}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                      <div>
                        <Link className={`Button`} href='#'>
                          <button className={` ${styles.Button}`}>
                            Zobacz produkt
                          </button>
                        </Link>
                      </div>
                    </div>
                  )}
                  {isBelow900 && (
                    <>
                      <div className={styles.buttoninnerWrapper}>
                        <button
                          className={styles.closeButton1}
                          onClick={closePopup}
                        >
                          X
                        </button>
                      </div>
                      <div
                        className={`${isConfigExpanded ? styles.mobileParentScroll : styles.mobileParent}`}
                      >
                        <div className={styles.mobile}>
                          <div>
                            <h3>{selectedImage.title} </h3>
                            <p className='p-13'>
                              Count Column: {selectedImage.count_column}
                            </p>
                            <p className='p-13'>
                              Height: {selectedImage.height}
                            </p>
                          </div>
                          <div>
                            <button>
                              <a href='#'>Zobacz produkt</a>
                            </button>
                          </div>
                        </div>
                        <div className={` ${styles.swipeContent}`}>
                          <p className={`p15six ${styles.firstParagraph}`}>
                            Konfiguracja ze zdjęcia
                          </p>
                          {selectedImage.config.map((configItem, index) => (
                            <div
                              className={styles.bottomInfosecttionText}
                              key={index}
                            >
                              <div className={styles.photoWithText}>
                                <div className={styles.photo}>
                                  <Image
                                    src={configItem.image.url}
                                    alt='alt'
                                    width={100}
                                    height={100}
                                  />
                                </div>
                                <div className='text'>
                                  <p className='body-small-bigger-third'>
                                    {configItem.subtitle}
                                  </p>
                                  <p className='body-small-smaller-third'>
                                    {configItem.value}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div
                        className={styles.mobileSwitcher}
                        onClick={handleSwitcherClick}
                      >
                        <p className='p15'>
                          {isConfigExpanded
                            ? 'Zwiń'
                            : 'Konfiguracja ze zdjęcia'}
                          {isConfigExpanded ? (
                            <span>
                              <Arrow className={styles.rotate} />
                            </span>
                          ) : (
                            <span>
                              <Arrow />
                            </span>
                          )}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SectionSwiper;
