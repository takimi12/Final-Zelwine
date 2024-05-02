import React from 'react';
import Link from 'next/link';
import Next from '../../../public/static/components/ArrowNext';
import styles from './breadcrumbs.module.scss';
import { ReactSVG } from 'react-svg';
import Image from 'next/image';

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
        <Link className={styles.color} href="/produkty">
          Produkty
        </Link>
      </p>

      {/* Warunkowe renderowanie */}
      {name && (
        <>
          <span className={styles.breadcrumb}>
            <Next />
          </span>
          <p className={`p13 ${styles.color}`}>
            <Link className={styles.color} href="/produkty">
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
          <Link href={`/produkty/${kategoria}`} className={styles.color}>
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
