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

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Tag {
  id: number;
  name: string;
  slug: string;
}

interface Image {
  id: number;
  src: string;
  name: string;
  alt: string;
  position: number;
}
interface Attribute {
  id: number;
  name: string;
  slug: string;
  position: number;
  visible: boolean;
  variation: boolean;
  options: string[];
}



interface ResponseMobile {
  id: number;
  categories: Category[];
  images: Image[];
  attributes: Attribute[];
  meta_data: MetaData[];
}
interface MetaData {
    key: string;
    value: string;
  }


  interface Product {
    id: number;
    meta_data: MetaData[];
    attributes: Attribute[];
    images: Image[];
  }
  
  interface MetaData {
    key: string;
    value: string;
  }
  
  interface Attribute {
    id: number;
    name: string;
    options: string[];
  }
  
  interface Image {
    src: string;
    alt: string;
  }
  
  interface ModalData {
    title: string;
    description: string;
    produkt: Array<{
      ID: number;
      featured_image_url: string;
      post_title: string;
    }>;
  }
  
  interface ImageSizes {
    [key: string]: string | number;
  }
  
  interface ImageData {
    ID: number;
    id: number;
    title: string;
    filename: string;
    filesize: number;
    url: string;
    link: string;
    alt: string;
    author: string;
    description: string;
    caption: string;
    name: string;
    status: string;
    uploaded_to: number;
    date: string;
    modified: string;
    menu_order: number;
    mime_type: string;
    type: string;
    subtype: string;
    icon: string;
    width: number;
    height: number;
    sizes: ImageSizes;
  }
  
  interface ConnectionType {
    image: ImageData;
  }
  

  
  interface TechnicalData {
    title: string;
    values: Array<{ label: string; value: string }>;
  }
  
  interface ResponseModal {
    acf: {
      wykonczenia: ModalData[];
      connection_types: ConnectionType[];
      guarantee_pack: {
        description: string;
        image: {
          url: string;
          alt: string;
        };
      };
      technical_data: TechnicalData[];
    };
  }


  const ProductPageSingle = ({ responsemobile,responseModal }: { responsemobile: ResponseMobile, responseModal:ResponseModal }) => {


    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(responsemobile.images ? responsemobile.images.length : 0);
  
  
 
  
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
                      {responsemobile.images &&responsemobile.images.map((image: Image, index: number) => (

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
  
                          <div className={styles.height}>{responsemobile.attributes && responsemobile.attributes.map((attribute: Attribute) => (

                              <div key={attribute.id}>
                                <p>{attribute.name}:</p>
                                <div className={styles.wrapperHeight}>
                                  {attribute.options.map((option: string) => (
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
                          <Link className={`Button ${styles.button}`}href="/Kontakt" >
                    <button 
                           type="button" data-button="true">
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
          )}
        </section>
      </>
    );
  };
  
  export default ProductPageSingle;
  