'use client';
import React, { useState } from 'react';
import styles from './DataTechnical.module.scss';
import Image from 'next/image';
import Close from "../../../../public/static/ProductPage/close.svg"
import Arrow from "../../../../public/static/ProductPage/modalArrow"

type TechnicalValue = {
  label: string;
  value: string;
};

type TechnicalDataGroup = {
  title: string;
  values: TechnicalValue[];
};

type ResponseModalAcf = {
  technical_data: TechnicalDataGroup[];
  technical_image?: string;
};

type ResponseModal = {
  acf: ResponseModalAcf;
};

type DataTechnicalProps = {
  responseModal: ResponseModal;
  closeModal: () => void;
};

export default function DataTechnical({ responseModal, closeModal }: DataTechnicalProps) {
  const [openSection, setOpenSection] = useState<string | null>(null); // Change initial state to null

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <section className={`${styles.productSection} ${styles.productSectionDesktop}`}>
      <div className={styles.mainwrapper}>
        <div className={styles.wykonczenia}>
          <div className={styles.closeButton}>
            <button onClick={closeModal}>
              <Image src={Close} alt='close'/>
            </button>
          </div>
          <div className={styles.technicalDataContainer}>
            <div className={styles.technicalDataList}>
              {responseModal.acf.technical_data.map((technicalDataGroup, index) => (
                <div key={index} className={`${styles.listItem} ${openSection === technicalDataGroup.title ? styles.active : ''}`}>
                  <div className={styles.technicalDataGroup}>
                    <h6 
                      onClick={() => toggleSection(technicalDataGroup.title)}
                      className={styles.groupTitle}
                    >
                      {technicalDataGroup.title}
                      <span className={`${styles.arrow} ${openSection === technicalDataGroup.title ? styles.rotated : ''}`}>
                        <Arrow />
                      </span>
                    </h6>
                  </div>
                  {openSection === technicalDataGroup.title && (
                    <ul className={styles.groupData}>
                      {technicalDataGroup.values.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <span className={styles.leftSpan}>{item.label}</span>
                          <span className={styles.rightSpan}>{item.value}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.technicalImage}>
              {responseModal.acf.technical_image && (
                <Image 
                  src={responseModal.acf.technical_image} 
                  alt="Technical diagram" 
                  width={400} 
                  height={400} 
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
