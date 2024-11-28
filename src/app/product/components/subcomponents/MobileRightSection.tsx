'use client';

import React from 'react';
import Link from 'next/link';
import Telephone from '../../../../../public/static/ProductPage/Telephone.jsx';
import Car from '../../../../../public/static/ProductPage/Car.jsx';
import Post from '../../../../../public/static/ProductPage/Post.jsx';

import styles from '../MobileSection.module.scss';
import { MetaData, Attribute } from '../../../types/mobileSection';

interface RightSectionProps {
  metaData: MetaData[];
  attributes: Attribute[];
  id: string | number;
}

const RightSection: React.FC<RightSectionProps> = ({ metaData, attributes, id }) => {
  const getMetaValue = (metaData: MetaData[], key: string): string => {
    const metaItem = metaData.find((meta) => meta.key === key);
    return metaItem ? metaItem.value : '';
  };

  const getAddonValue = (metaData: MetaData[]): string => {
    const addonMeta = metaData.find((meta) => meta.key === 'addon');
    return addonMeta ? addonMeta.value : 'Brak informacji o addonie';
  };

  return (
    <div className={styles.rightSection}>
      <div className={styles.sticky} key={id}>
        <div className={styles.rightTitle}>
          <h1>{getMetaValue(metaData, 'tytul_na_strone_produktu')}</h1>
          <p className='p15-six'>{getAddonValue(metaData)}</p>
        </div>

        <div className={styles.shortDesc}>
          <p>{getMetaValue(metaData, 'short_description')}</p>
        </div>

        <div className={styles.height}>
          {attributes &&
            attributes.map((attribute) => (
              <div key={attribute.id}>
                <p>{attribute.name}:</p>
                <div className={styles.wrapperHeight}>
                  {attribute.options.map((option) => (
                    <div className={styles.availableHeight} key={option}>
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <h3>{getMetaValue(metaData, 'dopis_przy_cenie')}</h3>

        <div className={styles.buttonWrapper}>
          <Link className={`Button ${styles.button}`} href='/Kontakt'>
            <button type='button' data-button='true'>
              <span className=''>Skontaktuj się</span>
            </button>
          </Link>
        </div>

        <div className={styles.time}>
          <Car />
          <p className='p15'>Dostawa: 6 - 8 tygodni</p>
        </div>

        <div className={styles.wrapperDelivery}>
          <div className={styles.delivery}>
            <Telephone />
            <p className='p15'>123123123</p>
          </div>
          <div className={styles.delivery}>
            <Post />
            <p className='p15'>test@test.pl</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
