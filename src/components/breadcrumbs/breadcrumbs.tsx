import React from 'react';
import Link from 'next/link';
import Next from '../../../public/static/breadcrumbs/Next';
import styles from './breadcrumbs.module.scss';

function Breadcrumbs({ name, breadcrumbs1, breadcrumbs2, kategoria }: { name: string, breadcrumbs1: string, breadcrumbs2: string, kategoria: string }) {
  return (
    <div className={styles.locations}>
      <p className={`p13 ${styles.color}`}>
        <Link className={styles.color} href="/">
          Strona Główna
        </Link>
      </p>
      <span className={styles.breadcrumb}>
        <Next />
      </span>
      <p className={`p13 ${styles.color}`}>
        <Link className={styles.color} href="/Produkty">
          Produkty
        </Link>
      </p>

      {name && (
        <>
          <span className={styles.breadcrumb}>
            <Next />
          </span>
          <p className={`p13 ${styles.color}`}>
            <Link className={styles.color} href="/Produkty">
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
          <Link href={`/Produkty/${kategoria}`} className={styles.color}>
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
            <Link className={styles.color} href="/#">
              {breadcrumbs2}
            </Link>
          </p>
        </>
      )}
    </div>
  );
}

export default Breadcrumbs;
