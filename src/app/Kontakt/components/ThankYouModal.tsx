import React from 'react';
import styles from './ThankYou.module.scss'; 
import Kaloryfer from '../../../../public/static/components/Form/formpopup.svg';
import close from "../../../../public/static/components/Form/close.svg"
import Image from 'next/image';

interface ThankYouModalProps {
  onClose: () => void; 
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ onClose }) => {
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
   
    if (e.target === e.currentTarget) {
      onClose(); 
    }
  };

  return (
    <div className={styles.modalBackground} onClick={handleModalClick}>
      <div className={styles.modalContent}>
        <div className={styles.modalClose} onClick={onClose}><Image src={close} alt='close' /></div>
        <div className={styles.leftSide}>
          <h1 className={styles.modalTitle}>Dziękujemy za przesłanie formularza!</h1>
          <p className={styles.modalText}>
            Cieszymy się, że zdecydowali się Państwo na kontakt z nami. Nasz przedstawiciel skontaktuje się z Państwem w ciągu 24 godzin w celu omówienia szczegółów.
          </p>
          <button className={styles.closeButton} onClick={onClose}>Wróć do strony</button>
        </div>
        <div className={styles.rightSide}>
          <Image src={Kaloryfer} alt='kaloryfer' />
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
