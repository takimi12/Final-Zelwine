import React from 'react';
import Image from 'next/image';
import Horizontal from '../../../../../public/static/ProductPage/horizontalArrow.svg';
import styles from '../Modal.module.scss';

interface PopupSectionProps {
  title: string;
  onClick: () => void;
  isVisible: boolean;
}

export const PopupSection: React.FC<PopupSectionProps> = ({ title, onClick, }) => (
  <div
    className={styles.parentInner}
    onClick={onClick}
  >
    <div>
      <h3 className={styles.popUpheading}>{title}</h3>
    </div>
    <div>
      <Image className={styles.boxImage} src={Horizontal} alt="hoverimage" />
    </div>
  </div>
);


