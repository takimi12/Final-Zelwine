'use client';

import React from 'react';
import styles from './MobileSection.module.scss';

import LeftSection from './subcomponents/MobileLeftSection';
import RightSection from './subcomponents/MobileRightSection';
import { ResponseMobile, ResponseModal } from '../../types/mobileSection';

const ProductPageSingle = ({
  responsemobile,
  responseModal,
}: {
  responsemobile: ResponseMobile;
  responseModal: ResponseModal;
}) => {
  return (
    <section className={` ${styles.productSectionMobile}`}>
      {responsemobile && (
        <>
          <LeftSection images={responsemobile.images} />
          <RightSection
            metaData={responsemobile.meta_data}
            attributes={responsemobile.attributes}
            id={responsemobile.id}
          />
        </>
      )}
    </section>
  );
};

export default ProductPageSingle;
