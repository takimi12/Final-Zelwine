import React from 'react';
import styles from './Guarantee.module.scss';
import Image from 'next/image';
import Close from '../../../../public/static/ProductPage/close.svg';
import { GuaranteeProps } from '../../types/guarantee'; 

export default function Guarantee({
  responseModal,
  closeModal,
}: GuaranteeProps) {
  const { guarantee_pack } = responseModal.acf;

  return (
    <section
      className={`${styles.productSection} ${styles.productSectionDesktop}`}
    >
      <div className={styles.mainwrapper}>
        <div className={styles.wykonczenia}>
          <div className={styles.top}>
            <h3 className={styles.guaranteeTitle}>Gwarancja</h3>
            <button onClick={closeModal}>
              <Image src={Close} alt='close' />
            </button>
          </div>
          <div className={styles.guaranteeWrapper}>
            <div className={styles.guaranteeContent}>
              <div className={styles.bottom}>
                <p className={styles.guaranteeDescription}>
                  {guarantee_pack.description}
                </p>
              </div>
            </div>
            <div className={styles.guaranteeIcon}>
              <Image
                src={guarantee_pack.image.url}
                alt={guarantee_pack.image.alt || 'Guarantee icon'}
                width={120}
                height={121}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
