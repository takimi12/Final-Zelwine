import React, { MouseEventHandler } from 'react';
import styles from './Form.module.scss';

interface ButtonProps {
  type: 'submit' | 'button';
  isLoading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  isLoading = false,
  onClick,
  className = '',
  children,
}) => {
  return (
    <button
      type={type}
      className={`Button ${className} ${styles.choseFile} ${isLoading ? styles.disabledButton : ''}`}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading && <span className={styles.spinner}></span>}
      <span className={styles.customFileInputButton}>
        <span className={styles.positionButton}>{children}</span>
      </span>
    </button>
  );
};
