

import { getData } from '../api/Produkty';
import styles from './Produkty.module.scss';
import Link from 'next/link';
// import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';

export default async function  Products() {
    // const data = await getData();


    // const filteredCategories = data.filter(category => category.parent === 0 && category.name !== "Bez kategorii");







  // const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  // let segments = currentPath.split('/').filter(segment => segment !== '');
  // let lastSegment = segments[segments.length - 1];

  return (
    <>
      <section className={styles.breadcrumbs}>
        <h4> Produkty </h4>
      </section>
      {filteredCategories.map(category => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <p>{category.description}</p>
          {/* Dodaj więcej danych kategorii tutaj */}
        </div>
      ))}
    </>
  );
};

