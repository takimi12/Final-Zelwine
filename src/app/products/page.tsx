import React from 'react';
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';
import { getDataProducts } from '../api/Produkty';
import styles from './Produkty.module.scss';
import Link from 'next/link';
import Image from 'next/image';


interface Image {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  src: string;
  name: string;
  alt: string;
}

interface Links {
  self: Array<{ href: string }>;
  collection: Array<{ href: string }>;
  up?: Array<{ href: string }>;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  display: string;
  image: Image | null;
  menu_order: number;
  count: number;
  slug_parent: string;
  _links: Links;
}

export default async function Products() {
  const fetchData: Category[] = await getDataProducts();

  const filteredCategories = fetchData.filter((category) => category.parent === 0 && category.name !== "Bez kategorii");

  return (
    <>
      <section className={styles.breadcrumbs}>
        <Breadcrumbs name="" breadcrumbs1="" breadcrumbs2="" kategoria="" whiteArrow={false}/>
      </section>
      <section className={styles.sectionProduct}>
        <div className={styles.title}>
          <h4> Produkty </h4>
        </div>
        <div className={styles.products}>
          {filteredCategories.map((category) => (
            <div className={styles.productsWrapper} key={category.id}>
              <Link href={`/products/${category.id}`}>
                {category.image && category.image.src && (
                  <Image
                    src={category.image.src}
                    alt={category.image.alt}
                    className={styles.categoryImage}
                    width={440}
                    height={330}
                  />
                )}
                <h6>{category.name}</h6>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
