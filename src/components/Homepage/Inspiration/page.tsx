'use client';

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";
import SwiperNav from "../../series/SwiperNav";
import styles from "./Inspiration.module.scss";
import Plus from "../../../../public/static/Homepage/Inspiration/Plus";
import Prev from "../../swiper/Prev";
import Next from "../../swiper/Next";
import Arrow from "../../.././../public/static/Homepage/Inspiration/Arrow";

const SectionSwiper = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const [isBottomSectionExpanded, setIsBottomSectionExpanded] = useState(false);
  const [isAtBeginning, setIsAtBeginning] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);


  console.log(data);

  const handleReachEnd = () => {
    setIsAtBeginning(false);
    setIsAtEnd(true);
  };

  const handleReachBeginning = () => {
    setIsAtBeginning(true);
    setIsAtEnd(false);
  };

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setSelectedSlideIndex(index);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedImage(null);
  };

  const handlePopupClick = (event) => {
    event.stopPropagation();
  };

  const [isAbove900, setIsAbove900] = useState(window.innerWidth > 899);
  const [isBelow900, setIsBelow900] = useState(window.innerWidth <= 899);

  useEffect(() => {
    const handleResize = () => {
      setIsAbove900(window.innerWidth > 899);
      setIsBelow900(window.innerWidth <= 899);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


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
        popupRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
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
          spaceBetween={20}
          slidesPerView={4}
          slidesOffsetBefore={40}
          className={styles.swiper}
          wrapperClass={styles.wrapperClass}
          onReachEnd={handleReachEnd}
          onReachBeginning={handleReachBeginning}
        >
          <div className={styles.swiperTop}>
            <h4 className="h4">Inspiracje</h4>
            <div className="arrowParent">
              <SwiperNav first={isAtBeginning} last={isAtEnd} />
            </div>
          </div>
          {[...data, data[0], data[1]].map((inspiration, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.hoverEffectDiv} onClick={() => handleImageClick(inspiration, index)}>
                <Image
                  src={inspiration.image.url}
                  alt={inspiration.image.title}
                  fill
                />
                <div className={styles.hoverEffectDivInner}>
                  <Plus />
                  <h5 className={styles.Look}>Zobacz</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
{showPopup && (
  <div ref={popupRef} className={styles.popupOverlay} onClick={closePopup}>
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
            <Prev   />
            </div>
            <div className={styles.arrowParent}>
            <Next  />
            </div>
            </div>
            <SwiperSlide key={selectedSlideIndex} className={styles.slide1}>
              <img
                src={selectedImage.bigger_image.url}
                alt={selectedImage.bigger_image.title}
              />
            </SwiperSlide>
            <SwiperSlide key={selectedSlideIndex + 1} className={styles.slide1}>
    <img
      src={selectedImage.bigger_image.url}
      alt={selectedImage.bigger_image.title}
    />
  </SwiperSlide>
          </Swiper>
          {isAbove900 && (
          <div className={styles.info}>
          <div className={styles.topInfoSection}>
                      <div className="buttoninnerWrapper">
              <button className={styles.closeButton} onClick={closePopup}>
                X
              </button>
            </div>
            </div>
            <h5>{selectedImage.title} </h5>
            <p className="p-13">Count Column: {selectedImage.count_column}</p>
            <p className="p-13">Height: {selectedImage.height}</p>
            
                      


 <div className={styles.bottomInfoSection}>
                        <p className={`p15six ${styles.firstParagraph}`}>Konfiguracja ze zdjęcia</p>
                        {selectedImage.config.map((configItem, index) => (
                          <div className="bottoInfosecttionText" key={index}>
                            <div className={styles.photoWithText}>
                              <div className={styles.photo}>
                                <img src={configItem.image.url} alt='alt'
                                  width={100}
                                  height={100}
                                />
                              </div>
                              <div className="text">
                                <p className="body-small-bigger-third">{configItem.subtitle}</p>
                                <p className="body-small-smaller-third">{configItem.value}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className>
                      {selectedImage.relationship.map((relationship) => (
                        <button><a href={`/product/${relationship.ID}`}>Zobacz produkt</a></button>
                      ))}
                        </div>
          </div>
          )}
  {isBelow900 && (
    <>
          <div className={styles.buttoninnerWrapper}>
              <button className={styles.closeButton1} onClick={closePopup}>
                X
              </button>
            </div>
  <div             className={`${isConfigExpanded ? styles.mobileParentScroll : styles.mobileParent}`}>
        <div className={styles.mobile}>
    <div className>
      <h5>{selectedImage.title} </h5>
            <p className="p-13">Count Column: {selectedImage.count_column}</p>
            <p className="p-13">Height: {selectedImage.height}</p>
    </div>

   <div className>
   {selectedImage.relationship.map((relationship) => (
                        <button><a href={`/product/${relationship.ID}`}>Zobacz produkt</a></button>
                      ))}
 </div>


 </div>
 <div className={` ${styles.swipeContent}`}>

<p className={`p15six ${styles.firstParagraph}`}>Konfiguracja ze zdjęcia</p>
                       {selectedImage.config.map((configItem, index) => (
                         <div className={styles.bottomInfosecttionText} key={index}>
                           <div className={styles.photoWithText}>
                             <div className={styles.photo}>
                               <img src={configItem.image.url} alt='alt'
                                 width={100}
                                 height={100}
                               />
                             </div>
                             <div className="text">
                               <p className="body-small-bigger-third">{configItem.subtitle}</p>
                               <p className="body-small-smaller-third">{configItem.value}</p>
                             </div>
                           </div>
                         </div>
                       ))}
               

 </div>
 </div>

  <div className={styles.mobileSwitcher} onClick={handleSwitcherClick}>
            <p className="p15">{isConfigExpanded ? "Zwiń" : "Konfiguracja ze zdjęcia"}
            {isConfigExpanded ? <span  ><Arrow className={styles.rotate}/></span> :  <span><Arrow /></span>}
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