'use client';

import React, { useState } from 'react';
import styles from './PopupEnd.module.scss';
import Image from 'next/image';
import Close from '../../../../public/static/ProductPage/close.svg';
import { PopupEndProps, ModalData } from '../../types/popupEnd';
import { ButtonModal } from './subcomponents/ButtonPopupEnd';
import { RenderModal } from './RenderModal';

export default function PopupEnd({ responseModal, closeModal }: PopupEndProps) {
  const { acf } = responseModal;
  const [activeModal, setActiveModal] = useState<string>('signature-series');
  const [activeButton, setActiveButton] = useState<string>('signature-series');

  const openModal = (modalId: string) => {
    setActiveModal(modalId);
    setActiveButton(modalId);
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
              label='Signature Series'
            />
            <ButtonModal
              onClick={() => openModal('bare-metal')}
              isActive={activeButton === 'bare-metal'}
              label='Bare Metal'
            />
            <ButtonModal
              onClick={() => openModal('ral')}
              isActive={activeButton === 'ral'}
              label='RAL'
            />
          </div>
          <div className='mainwrapper'>
            {activeModal === 'signature-series' && acf.wykonczenia[0] && (
              <RenderModal modalData={acf.wykonczenia[0]} />
            )}
            {activeModal === 'bare-metal' && acf.wykonczenia[1] && (
              <RenderModal modalData={acf.wykonczenia[1]} />
            )}
            {activeModal === 'ral' && acf.wykonczenia[2] && (
              <RenderModal modalData={acf.wykonczenia[2]} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
