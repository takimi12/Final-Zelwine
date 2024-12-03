import React from 'react';
import Logo from './components/Logo';
import styles from './Footer.module.scss';
import { getGlobalsDataOption } from '@/app/api/Global';
import Link from 'next/link';
import { Category, Social, SocialItem } from '../../types/footer';

export async function Footer({ categories }: { categories: Category[] }) {
  const data = await getGlobalsDataOption();
  const filteredSociale = data.sociale;

  const filteredCategories =
    categories &&
    categories.filter((category) => category.title !== 'Produkty');

  const categoriesWithChildren = categories.filter(
    (category) => category.children.length > 0,
  );

  const children = categoriesWithChildren[0].children;

  return (
    <footer className={styles.footer}>
      <div className={styles.up}>
        <Logo />
        <div className={styles.column}>
          <div className={styles.footerColumn}>
            <div className={styles.topHeading}>
              <p className={`body-small ${styles.bodySmall}`}>Kategorie</p>
            </div>
            <ul className={styles.list}>
              {categories.map((category, index) => {
                if (category.children.length > 0) {
                  return (
                    <React.Fragment key={index}>
                      {category.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <Link href={`/products/${child.product_id}`}>
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </React.Fragment>
                  );
                }

                return null;
              })}
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <div className={styles.topHeading}>
              <p className={`body-small ${styles.bodySmall}`}>Serie</p>
            </div>
            <ul className={styles.list}>
              {children.map((child) => (
                <li key={child.product_id} className={styles.categoryItem}>
                  {child.children.length > 0 && (
                    <>
                      {child.children.map((subchild) => (
                        <Link
                          key={subchild.product_id} 
                          href={`/products/${child.product_id}/${subchild.product_id}`}
                        >
                          {subchild.title}
                        </Link>
                      ))}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <div className={styles.topHeading}>
              <p className={`body-small ${styles.bodySmall}`}>Menu</p>
            </div>
            <ul className={styles.list}>
              {filteredCategories.map((category) => (
                <li key={category.product_id}>
                  <Link href={`/${category.slug}`}>{category.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <div className={styles.topHeading}>
              <p className={`body-small ${styles.bodySmall}`}>Social Media</p>
            </div>
            <ul className={styles.list}>
              {filteredSociale.map((item: SocialItem, index: number) => (
                <li key={index}>
                  <Link
                    href={`/${item.social.title}`}
                    rel='noopener noreferrer'
                  >
                    {item.social.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomFooter}>
        <div className='copyright'>
          <p className={`body-small ${styles.bodySmall2}`}>Żeliwne 2023</p>
        </div>
        <div className={styles.paper}>
          <p className={`body-small ${styles.bodySmall2}`}>
            <Link href={`/polityka-prywatnosci`}>Polityka prywatności </Link>
          </p>
          <p className={`body-small ${styles.bodySmall2}`}>
            {' '}
            <Link href={`/cookies`}>Polityka cookies</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
