'use client';
import React from 'react';
import Image from 'next/image';
import styles from './ConnectionType.module.scss';
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

// Combined ResponseDesktop interface
interface ResponseDesktop {
  acf: {
    wykonczenia: ModalData[];
    connection_types: ConnectionType[];
  };
}

interface ConnectionTypeProps {
  responseModal: ResponseDesktop;
  closeModal: () => void;
}

export default function ConnectionType({ responseModal, closeModal }: ConnectionTypeProps) {
  return (
    <div className={styles.mainwrapper}>

      <div className={styles.wykonczenia}>
      <div className={styles.topText}>
                <h3 className={styles.guaranteeTitle}>Rodzaje połączeń</h3>
                <button onClick={closeModal}>
              <Image src={Close} alt='close'/>
            </button>
              </div>
        <div className={styles.innerWrapper}>
          {responseModal.acf.connection_types.map((connection, index) => (
            <div key={index}>
              <Image
                src={connection.image.url} 
                alt={connection.image.title} 
                width={connection.image.width}
                height={connection.image.height}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
