'use client';

import React from 'react';
import Image from 'next/image';
import styles from './ConnectionType.module.scss';
import Close from '../../../../public/static/ProductPage/close.svg';
import { ConnectionTypeProps } from '../../types/connectionTypes';

export default function ConnectionType({
  responseModal,
  closeModal,
}: ConnectionTypeProps) {
  return (
    <div className={styles.mainwrapper}>
      <div className={styles.wykonczenia}>
        <div className={styles.topText}>
          <h3 className={styles.guaranteeTitle}>Rodzaje połączeń</h3>
          <button onClick={closeModal}>
            <Image src={Close} alt='close' />
          </button>
        </div>
        <div className={styles.innerWrapper}>
          {responseModal.acf.connection_types.map((connection, index) => (
            <div key={index}>
              <Image
                src={connection.image.url}
                alt={connection.image.title}
                width={connection.image.width}
                height={connection.image.height}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
