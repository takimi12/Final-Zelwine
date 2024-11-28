import React from 'react';
import styles from '../DataTechnical.module.scss';
import { ModalArrow } from '../../../../../public/static/ProductPage/ModalArrow';

interface TechnicalDataGroupProps {
  technicalDataGroup: {
    title: string;
    values: { label: string; value: string }[];
  };
  openSection: string | null;
  toggleSection: (title: string) => void;
}

export const TechnicalDataGroup: React.FC<TechnicalDataGroupProps> = ({
  technicalDataGroup,
  openSection,
  toggleSection,
}) => {
  return (
    <div
      className={`${styles.listItem} ${openSection === technicalDataGroup.title ? styles.active : ''}`}
    >
      <div className={styles.technicalDataGroup}>
        <h6
          onClick={() => toggleSection(technicalDataGroup.title)}
          className={styles.groupTitle}
        >
          {technicalDataGroup.title}
          <span
            className={`${styles.arrow} ${openSection === technicalDataGroup.title ? styles.rotated : ''}`}
          >
            <ModalArrow />
          </span>
        </h6>
      </div>
      {openSection === technicalDataGroup.title && (
        <ul className={styles.groupData}>
          {technicalDataGroup.values.map((item, itemIndex) => (
            <li key={itemIndex}>
              <span className={styles.leftSpan}>
                {item.label}
              </span>
              <span className={styles.rightSpan}>
                {item.value}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


