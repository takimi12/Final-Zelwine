import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './Form.module.scss';
import Plus from '../../../../public/static/components/Form/Renovation.svg';

interface PhotoUploadButtonProps {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  contact: number;
}

export const PhotoUploadButton: React.FC<PhotoUploadButtonProps> = ({
  onFileChange,
  onClick,
  contact,
}) => {
  if (contact === 1) return null;
  return (
    <>
      <p>Zdjęcia grzejników</p>
      <div id='photoButton' onClick={onClick} className={styles.choseFiles}>
        <button className={styles.customFileInputButton} type='button'>
          <div className={styles.positionButton}>
            <Image src={Plus} alt='popraw' width={10} height={10} />
            <span
              className={`${styles.customFileInputText} body-small-smaller-second`}
            >
              Dodaj zdjęcia
            </span>
          </div>
        </button>
        <input
          id='inputHidden'
          className={styles.inputHidden}
          type='file'
          multiple
          onChange={onFileChange}
        />
      </div>
    </>
  );
};
