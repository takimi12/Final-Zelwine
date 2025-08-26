import React from 'react';
import styles from '../PopupEnd.module.scss';

interface ButtonModalProps {
  onClick: () => void;
  isActive: boolean;
  label: string;
}

export const ButtonModal: React.FC<ButtonModalProps> = ({
  onClick,
  isActive,
  label,
}) => {
  return (
    <button
      className={`${styles.buttonModal} ${isActive ? styles.activeButton : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
