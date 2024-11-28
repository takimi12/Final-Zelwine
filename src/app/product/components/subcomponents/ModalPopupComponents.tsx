import React from 'react';
import styles from '../Modal.module.scss';

interface PopupModalProps {
  activeComponent: string | null;
  closeModal: () => void;
  renderComponent: () => JSX.Element | null;
}

export const PopupModal: React.FC<PopupModalProps> = ({ activeComponent, closeModal, renderComponent }) => (
  <div className={`${styles.popUp} ${activeComponent ? styles.active : ''}`}>
    <div
      className={`${styles.left} ${activeComponent ? styles.activeLeft : ''}`}
      onClick={closeModal}
    ></div>
    <div className={`${styles.popUp} ${activeComponent ? styles.active : ''}`}>
      {renderComponent()}
    </div>
  </div>
);

