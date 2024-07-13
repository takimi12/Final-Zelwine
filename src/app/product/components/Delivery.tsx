'use client';
import React from 'react';
import styles from './Delivery.module.scss';
import Image from 'next/image';
import Close from "../../../../public/static/ProductPage/close.svg"

// Existing interfaces from the parent component
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

// New interfaces for Delivery component
interface DeliveryPackItem {
  line: string;
}

interface DeliveryPack {
  description: string;
  image: ImageData;
  list?: DeliveryPackItem[];
}

// Combined ResponseDesktop interface
interface ResponseDesktop {
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
    delivery_pack?: DeliveryPack;
  };
}

interface DeliveryProps {
  responseModal: ResponseDesktop;
  closeModal: () => void;
}

export default function Delivery({ responseModal, closeModal }: DeliveryProps) {
  const deliveryPack = responseModal?.acf?.delivery_pack;

  return (
    <section className={`${styles.productSection} ${styles.productSectionDesktop}`}>
      <div className={styles.mainwrapper}>

        <div className={styles.wykonczenia}>
        <div className={styles.topText}>
                <h3 className={styles.guaranteeTitle}>Dostawa</h3>
                <button onClick={closeModal}>
              <Image src={Close} alt='close'/>
            </button>
              </div>
          {deliveryPack && (
            <div className={styles.deliveryPackContainer}>
             
              <div className={styles.bottomWrapper}>
                <div className={styles.left}>
                  {deliveryPack.list && deliveryPack.list.length > 0 && (
                    <>
                      <p className={styles.top}>{deliveryPack.description}</p>
                      <ul>
                        {deliveryPack.list.map((item, index) => (
                          <li key={index}>{item.line}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                <div className={styles.right}>
                  {deliveryPack.image && (
                    <Image
                      src={deliveryPack.image.url}
                      alt={deliveryPack.image.alt || "Delivery image"}
                      width={deliveryPack.image.width}
                      height={deliveryPack.image.height}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
