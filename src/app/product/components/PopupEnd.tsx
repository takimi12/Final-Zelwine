'use client';

import React, { useState } from 'react';
import styles from './PopupEnd.module.scss';
import Image from 'next/image';
import Close from '../../../../public/static/ProductPage/close.svg';
import { PopupEndProps, ModalData } from '../../types/popupEnd';
import {ButtonModal} from './subcomponents/ButtonPopupEnd'; 

export default function PopupEnd({
  responseModal,
  closeModal,
}: PopupEndProps) {
  const { acf } = responseModal;
  const [activeModal, setActiveModal] = useState<string>('signature-series');
  const [activeButton, setActiveButton] = useState<string>('signature-series');

  const openModal = (modalId: string) => {
    setActiveModal(modalId);
    setActiveButton(modalId);
  };

  const renderModal = (modalData: ModalData): React.ReactNode => {
    if (!modalData) return null;
    return (
      <div className='modal'>
        <div className={styles.modalContent}>
          <h3>{modalData.title}</h3>
          <p className={styles.paragraph}>{modalData.description}</p>
          <div className={styles.productGrid}>
            {modalData.produkt.map((product) => (
              <div key={product.ID} className={styles.itemWrapper}>
                <div className={styles.productItem}>
                  <Image
                    src={product.featured_image_url}
                    alt={product.post_title}
                    width={130}
                    height={120}
                  />
                </div>
                <h6 className={styles.title}>{product.post_title}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className={`${styles.productSection} ${styles.productSectionDesktop}`}
    >
      <div className={styles.mainwrapper}>
        <div className={styles.wykonczenia}>
          <div className={styles.topSet}>
            <h2>Wykończenia</h2>
            <button onClick={closeModal}>
              <Image src={Close} alt='close' />
            </button>
          </div>
          <div className={styles.modalParent}>
            <ButtonModal
              onClick={() => openModal('signature-series')}
              isActive={activeButton === 'signature-series'}
              label="Signature Series"
            />
            <ButtonModal
              onClick={() => openModal('bare-metal')}
              isActive={activeButton === 'bare-metal'}
              label="Bare Metal"
            />
            <ButtonModal
              onClick={() => openModal('ral')}
              isActive={activeButton === 'ral'}
              label="RAL"
            />
          </div>
          <div className='mainwrapper'>
            {activeModal === 'signature-series' &&
              acf.wykonczenia[0] &&
              renderModal(acf.wykonczenia[0])}
            {activeModal === 'bare-metal' &&
              acf.wykonczenia[1] &&
              renderModal(acf.wykonczenia[1])}
            {activeModal === 'ral' &&
              acf.wykonczenia[2] &&
              renderModal(acf.wykonczenia[2])}
          </div>
        </div>
      </div>
    </section>
  );
}
