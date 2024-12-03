import React from 'react';
import styles from '../DesktopSection.module.scss';
import { MetaData } from '../../../types/desktopSection';

interface ProductTitleProps {
  metaData: MetaData[];
}

export const ProductTitle: React.FC<ProductTitleProps> = ({ metaData }) => {
  const getAddonValue = (metaData: MetaData[]): string => {
    const addonMeta = metaData.find((meta) => meta.key === 'addon');
    return addonMeta ? addonMeta.value : 'Brak informacji o addonie';
  };

  const getMetaValue = (metaData: MetaData[], key: string): string => {
    const metaItem = metaData.find((meta) => meta.key === key);
    return metaItem ? metaItem.value : '';
  };

  return (
    <div className={styles.rightTitle}>
      <h1>{getMetaValue(metaData, 'tytul_na_strone_produktu')}</h1>
      <h6 className={styles.h6}>{getAddonValue(metaData)}</h6>
    </div>
  );
};
