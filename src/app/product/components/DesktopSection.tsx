import React from 'react';
import styles from './DesktopSection.module.scss';
import {ProductImages} from './subcomponents/DesktopProductImage';
import {ProductTitle} from './subcomponents/DesktopProductTitle';
import {ProductAttributes} from './subcomponents/DesktopProductAtributes';
import {ContactButton} from './subcomponents/DesktopContactButton';
import {DeliveryInfo} from './subcomponents/DesktopDeliveryinfo';
import { getAllProducts } from '@/app/api/Produkt';
import { getDataHomepage } from '@/app/api/Homepage';
import { ProductPageSingleProps } from '../../types/desktopSection';
import { MetaData } from '../../types/desktopSection';


export default async function ProductPageSingle({
  res,
  responseModal,
}: ProductPageSingleProps) {
  const data = await getDataHomepage();
  const response = await getAllProducts(res);
  const getMetaValue = (metaData: MetaData[], key: string): string => {
    const metaItem = metaData.find((meta) => meta.key === key);
    return metaItem ? metaItem.value : '';
  };
  return (
    <section className={`${styles.productSection} ${styles.productSectionDesktop}`}>
      {response && (
        <>
          <ProductImages images={response.images} />
          <div className={styles.rightSection}>
            <div className={styles.sticky} key={response.id}>
              <ProductTitle metaData={response.meta_data} />
              <div className={styles.shortDesc}>
                <p className='body'>
                  {getMetaValue(response.meta_data, 'short_description')}
                </p>
              </div>
              <ProductAttributes attributes={response.attributes} />
              <h4>{getMetaValue(response.meta_data, 'dopis_przy_cenie')}</h4>
              <ContactButton />
              <DeliveryInfo />
            </div>
          </div>
        </>
      )}
    </section>
  );
}
