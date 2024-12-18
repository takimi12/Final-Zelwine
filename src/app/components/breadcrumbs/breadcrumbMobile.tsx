import React from 'react';
import Link from 'next/link';
import Prev from '../../../../public/static/components/ArrowPrev';
import styles from './breadcrumbMobile.module.scss';

interface BreadcrumbsProps {
  breadcrumbs1?: string;
  breadscrumb2?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  breadcrumbs1,
  breadscrumb2,
}) => {
  return (
    <div className={styles.locations}>
      <Prev />
      {breadcrumbs1 ? (
        <Link href={`/products/${breadscrumb2}`}>{breadcrumbs1}</Link>
      ) : (
        <Link href='/products'>Produkty</Link>
      )}
    </div>
  );
};

export default Breadcrumbs;
