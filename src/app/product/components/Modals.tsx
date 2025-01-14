'use client';
import React, { useState } from 'react';
import Wykonczenia from './PopupEnd';
import ConnectionType from './ConnectionType';
import Guarantee from './Guarantee';
import Delivery from './Delivery';
import TechnicalData from './DataTechnical';
import { PopupSection } from './subcomponents/ModalSectionComponents';
import { PopupModal } from './subcomponents/ModalPopupComponents';
import styles from './Modal.module.scss';
import { ResponseModal } from '../../types/modals';

export default function Modal({
  responseModal,
}: {
  responseModal: ResponseModal;
}) {
  const { acf } = responseModal;

  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const closeModal = () => {
    setActiveComponent(null);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'wykonczenia':
        return (
          <Wykonczenia responseModal={responseModal} closeModal={closeModal} />
        );
      case 'technicalData':
        return (
          <TechnicalData
            responseModal={responseModal}
            closeModal={closeModal}
          />
        );
      case 'connectionType':
        return (
          <ConnectionType
            responseModal={responseModal}
            closeModal={closeModal}
          />
        );
      case 'guarantee':
        return (
          <Guarantee responseModal={responseModal} closeModal={closeModal} />
        );
      case 'delivery':
        return (
          <Delivery responseModal={responseModal} closeModal={closeModal} />
        );
      default:
        return null;
    }
  };

  return (
    <section className={styles.sectionPopUp}>
      <div className={styles.mainSection}>
        <div className={styles.parentBox}>
          {acf.wykonczenia && acf.wykonczenia.length > 0 && (
            <PopupSection
              title='Wykończenia'
              onClick={() => setActiveComponent('wykonczenia')}
              isVisible={acf.wykonczenia.length > 0}
            />
          )}

          <PopupSection
            title='Rodzaje podłączeń'
            onClick={() => setActiveComponent('connectionType')}
            isVisible={true}
          />

          {acf.technical_data && acf.technical_data.length > 0 && (
            <PopupSection
              title='Dane techniczne'
              onClick={() => setActiveComponent('technicalData')}
              isVisible={acf.technical_data.length > 0}
            />
          )}

          <PopupSection
            title='Gwarancja'
            onClick={() => setActiveComponent('guarantee')}
            isVisible={true}
          />

          <PopupSection
            title='Dostawa'
            onClick={() => setActiveComponent('delivery')}
            isVisible={true}
          />
        </div>
      </div>

      <PopupModal
        activeComponent={activeComponent}
        closeModal={closeModal}
        renderComponent={renderComponent}
      />
    </section>
  );
}
