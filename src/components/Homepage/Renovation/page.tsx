'use client';
import React from "react";
import Image from "next/image";
import styles from "./Renovation.module.scss";
import Link from "next/link";

interface ImageSizes {
  thumbnail: string;
  medium: string;
 
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

interface LinkData {
  title: string;
  url: string;
  target: string;
}

interface RenovationData {
  small_title: string;
  title: string;
  description: string;
  link: LinkData;
  image: ImageData;
}

const RenovationSection: React.FC<{ data: RenovationData }> = ({ data }) => {
  const mapData = () => {
    const mappedData = {
      small_title: data.small_title,
      title: data.title,
      description: data.description,
      link: {
        title: data.link.title,
        url: data.link.url,
        target: data.link.target,
      },
      image: {
        url: data.image.url,
        alt: data.image.alt,
        sizes: data.image.sizes,
      },
    };

    return mappedData;
  };

  const mappedData = mapData();

  return (
    <section className={styles.renovationSection}>
      <div className={styles.renovationSectionContent}>
        <div className={styles.renovationSectionText}>
          <div className={styles.renovationSectionTitle}>
            <p className={`EyebrowHeader ${styles.EyebrowHeader}`}>{mappedData.small_title}</p>
          </div>
          <p className={`${styles.renovationSectionHeading} display1`}>{mappedData.title}</p>
          <div className={styles.renovationSectionDescription}>
            <p className="body">{mappedData.description}</p>
          </div>
          <div>
            <Link className={`Button`} href="/Renowacja" target={mappedData.link.target} rel="noopener noreferrer">
              <button className={`${styles.renovationSectionButton} `} type="button">
                {mappedData.link.title}
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.renovationSectionImage}>
          <Image
            src={mappedData.image.url}
            alt={mappedData.image.alt}
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default RenovationSection;