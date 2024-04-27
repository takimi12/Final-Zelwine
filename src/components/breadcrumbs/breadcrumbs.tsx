import React from 'react';
import Link from 'next/link';
import Next from '../../../public/static/components/ArrowNext';
import styles from './breadcrumbs.module.scss';
import { ReactSVG } from 'react-svg';
import Image from 'next/image';

function Breadcrumbs({name}) {


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
                <Link className={styles.color}  href="/produkty">
                  Produkty
                </Link>
              </p>
              <span className={styles.breadcrumb}>
              <Next />
              </span>

              <p className={`p13 ${styles.color}`}>
                <Link className={styles.color}  href="/produkty">
             {name}
                </Link>
              </p>

      
      </div>
   
  );
}

export default Breadcrumbs;