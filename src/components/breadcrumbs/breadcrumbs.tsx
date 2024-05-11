'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Next from '../../../public/static/breadcrumbs/Next';
import styles from './breadcrumbs.module.scss';

function Breadcrumbs({ name, breadcrumbs1, breadcrumbs2, kategoria }: { name: string, breadcrumbs1: string, breadcrumbs2: string, kategoria: string }) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (

    <div className={styles.locations}>
      <p className={` ${styles.color}`}>
        <Link className={`body-small${styles.color}`} href="/">
          Strona Główna
        </Link>
      </p>
      <span className={styles.breadcrumb}>
        <Next />
      </span>
      <p className={`p13 ${styles.color}`}>
        <Link className={`body-small${styles.color}`} href="/products">
          Produkty
        </Link>
      </p>

      {name && (
        <>
          <span className={styles.breadcrumb}>
            <Next />
          </span>
          <p className={`p13 ${styles.color}`}>
            <Link className={`body-small${styles.color}`} href="/products">
              {name}
            </Link>
          </p>
        </>
      )}
      {breadcrumbs1 && (
        <>
          <span className={styles.breadcrumb}>
            <Next />
          </span>
          <p className={`p13 ${styles.color}`}>
          <Link href={`/products/${kategoria}`} className={`body-small${styles.color}`}>
              {breadcrumbs1}
            </Link>
          </p>
        </>
      )}
      {breadcrumbs2 && (
        <>
          <span className={styles.breadcrumb}>
            <Next />
          </span>
          <p className={`p13 ${styles.color}`}>
            <Link className={`body-small${styles.color}`} href="/#">
              {breadcrumbs2}
            </Link>
          </p>
        </>
      )}
    </div>

  );
}

export default Breadcrumbs;
