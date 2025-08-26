import React from 'react';
import Image from 'next/image';
import styles from './RenovationProces.module.scss';

import { RenovationProcesProps } from '../../types/renovationProces';

const RenovationProces = ({ proces }: RenovationProcesProps) => {
  return (
    <>
      <section className={styles.renovationPageInfo}>
        <h4 className={styles.heading}>{proces.title}</h4>
        <div className={styles.colWrapper}>
          {proces.process_steps.map((step, index) => (
            <div className={styles.col6} key={index}>
              <div className={styles.foto}>
                <Image
                  className={styles.photoSection}
                  src={step.process_image.url}
                  alt='Process step image'
                  width={325}
                  height={251}
                />
                <Image
                  className={styles.photoSectionMobile}
                  src={step.process_image.url}
                  alt='Process step image'
                  width={358}
                  height={268}
                />
              </div>
              <div className={styles.text}>
                <div className={styles.innerText}>
                  <p className={`EyebrowHeader ${styles.EyebrowHeader}`}>
                    {step.step}
                  </p>
                  <h5>{step.step_title}</h5>
                  <p className='body'>{step.step_text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RenovationProces;
