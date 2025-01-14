'use client';

import React, { useState } from 'react';
import styles from './DataTechnical.module.scss';
import Image from 'next/image';
import Close from '../../../../public/static/ProductPage/close.svg';
import { TechnicalDataGroup } from './subcomponents/TechnicalDataGroup';
import { DataTechnicalProps } from '../../types/dataTechnical';

export default function DataTechnical({
  responseModal,
  closeModal,
}: DataTechnicalProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <section
      className={`${styles.productSection} ${styles.productSectionDesktop}`}
    >
      <div className={styles.mainwrapper}>
        <div className={styles.wykonczenia}>
          <div className={styles.closeButton}>
            <button onClick={closeModal}>
              <Image src={Close} alt='close' />
            </button>
          </div>
          <div className={styles.technicalDataContainer}>
            <div className={styles.technicalDataList}>
              {responseModal.acf.technical_data.map(
                (technicalDataGroup, index) => (
                  <TechnicalDataGroup
                    key={index}
                    technicalDataGroup={technicalDataGroup}
                    openSection={openSection}
                    toggleSection={toggleSection}
                  />
                ),
              )}
            </div>
            <div className={styles.technicalImage}>
              {responseModal.acf.technical_image && (
                <Image
                  src={responseModal.acf.technical_image}
                  alt='Technical diagram'
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
