'use client';
import React from "react";
import Image from "next/image";
import styles from "./Renovation.module.scss";

const RenovationSection = ({ data }: { data: any }) => {

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
            <p className="p138">{mappedData.small_title}</p>
          </div>
          <h6 className={`${styles.renovationSectionHeading} h1big`}>{mappedData.title}</h6>
          <div className={styles.renovationSectionDescription}>
            <p className="p15">{mappedData.description}</p>
          </div>
          <a href="/Renowacja" target={mappedData.link.target} rel="noopener noreferrer">
            <button className={`${styles.renovationSectionButton} button`} type="button">
              {mappedData.link.title}
            </button>
          </a>
        </div>
        <div className={styles.renovationSectionImage}>
          <Image
            src={mappedData.image.url}
            alt={mappedData.image.alt}
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default RenovationSection;