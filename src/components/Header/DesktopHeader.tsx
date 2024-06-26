'use client';
import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import Logo from '../../../public/static/Header/Logo.jsx';
import SecondLogo from '../../../public/static/Header/SecondLogo.jsx';
import { useRouter } from 'next/navigation';
import Kaloryfer from '../../../public/static/Header/Kaloryfer.jsx';
import ProduktyDropdown from "../../../public/static/Header/ProdyktyArrow.jsx";
import Image from 'next/image';

const Header = ({ categories }: { categories: Array<any> }) => {
  const [isScrolled, setIsScrolled] = useState(false);




  useEffect(() => {
    const handleScroll = () => {
      const scrolled = typeof window !== 'undefined' && window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const [elementMenu, setElementMenu] = useState(null);
  const [elementMenu1, setElementMenu1] = useState(null);
  const [elementMenu2, setElementMenu2] = useState(null);
  const [logoImage, setLogoImage] = useState(0);

  useEffect(() => {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const segments = currentPath.split('/').filter(segment => segment !== '');
    if (segments.includes('products') && segments.length == 3) {
      setLogoImage(0);
    }



    if (segments.includes('Renowacja') || segments.includes('Opinie') || segments.includes('Kontakt') || segments.includes('product')  ||  (segments.includes('products') && segments.length == 1) ||
    (segments.includes('products') && segments.length == 2)) {
      setLogoImage(275);
    }
  
  }, [typeof window !== 'undefined' && window.location.pathname]);

  const filteredCategories = categories && categories.filter(category => category.title !== 'Kontakt');
  const kontaktCategory = categories && categories.find(category => category.title === 'Kontakt');
  const router = useRouter();

  let headerParentClasses = ` ${isScrolled ? styles.scroll : ''}`;
  let kontaktmainClass = ` ${isScrolled ? styles.contact1 : styles.contact}`;

  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const segments = currentPath.split('/').filter(segment => segment !== '');


  const [headerclass, setHeaderclass] = useState(0);
  const [secondheader, setSecondHeader] = useState(0);
  
  useEffect(() => {
    if (
      segments.includes('Renowacja') ||
      segments.includes('Opinie') ||
      segments.includes('Kontakt') ||
      segments.includes('product') ||
      (segments.includes('products') && segments.length == 1) ||
      (segments.includes('products') && segments.length == 2)
    ) {
      setSecondHeader(1);
    }
  }, []);

  const MouseEnterElementMenu = (product_id: any) => {
    setElementMenu(product_id);
    setElementMenu1(product_id);
    setElementMenu2(null);
    setHeaderclass(1);
  };

  const MouseLeave = () => {
    setElementMenu(null);
    setElementMenu1(null);
    setElementMenu2(null);
    setHeaderclass(0);
  };

  const MouseEnterElementMenu1 = (product_id:any) => {
    setElementMenu1(product_id);
    setElementMenu2(null);
  };

  const MouseEnterElementMenu2 = (product_id:any) => {
    setElementMenu2(product_id);
  };



  return (
    <>
      <header onMouseLeave={MouseLeave} className={`${secondheader === 0 ? styles.headerParent : styles.headerParent1} ${elementMenu == 275 ? styles.activeHeader : headerParentClasses}`}>
        <div className={(isScrolled ? styles.mainWrapper : styles.mainWrapperScroll)}>
          {logoImage || isScrolled || elementMenu == 275 ? (
            <Link href="/" aria-label="strona glowna">
              <div onMouseEnter={() => setElementMenu(null)}>
                <SecondLogo />
              </div>
            </Link>
          ) : (
            <div>
              <Link href="/" aria-label="strona glowna">
              <Logo />
              </Link>
            </div>
          )}
          <div className={styles.header}>
            <ul className={styles.menu}>
            {filteredCategories &&
  filteredCategories.map(category => (
    <li className={styles.anchorParent} key={category.title}>
      <Link
        className={`${(isScrolled || elementMenu == 275) ? styles.second : '' } body `}
        onMouseEnter={() => MouseEnterElementMenu(category.product_id)}
        href={`/${category.slug}`}
        aria-label="strona glowna"
      >
        {category.title}
       
      </Link>
      {(category.product_id == 275) && <ProduktyDropdown />}
    </li>
  ))}
            </ul>

            {kontaktCategory && (
              <div className={` ${styles.menu} `}>
                <Link href={kontaktCategory.title} className={`${isScrolled || elementMenu == 275 ? styles.second : ''} body ${kontaktmainClass}` } aria-label="strona glowna">
                  <button>
                  Skontaktuj się z nami
                  </button>
                </Link>


                
              </div>
            )}
          </div>
          {elementMenu == 275 && (
            <div className={`${styles.secondLevel} ${elementMenu == 275 ? styles.active : styles.secondLevel}`}>
              <div className={styles.secondLevelbelow}>
                {filteredCategories &&
                  filteredCategories.map(category => (
                    <div key={category.title}>
                      {category.children && (
                        <div className={styles.parentSecondLevel}>
                          {category.children.map((subCategory:any) => (
                            <div key={subCategory.title}>
                              <Link href={`/products/${subCategory.product_id}`} aria-label="strona glowna">
                                <p
                                  className={`${subCategory.product_id} body`}
                                  onMouseEnter={() => MouseEnterElementMenu1(subCategory.product_id)}
                                >
                                  {subCategory.title}
                                </p>
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                <div></div>
              </div>
              <div className={styles.thirdLevelWrapper}>
                {filteredCategories &&
                  filteredCategories.map(category => (
                    <div key={category.title}>
                      {category.children && (
                        <div>
                          {category.children.map((subCategory:any) => (
                            <div key={subCategory.title}>
                              {subCategory.children && (
                                <div
                                  className={`${styles.thirdLevel} ${
                                    elementMenu1 === subCategory.product_id ? styles.active2 : ''
                                  }`}
                                >
                                  {subCategory.children.map((thirdLevelCategory:any) => (
                                    <div key={thirdLevelCategory.id}>
                                      <Link
                                        href={`/products/${subCategory.product_id}/${thirdLevelCategory.product_id}`}
                                      aria-label="strona glowna"
                                      
                                      >
                                        <p
                                          onMouseEnter={() => MouseEnterElementMenu2(thirdLevelCategory.product_id)}
                                          className={`${styles.unactive} body` }
                                        >
                                          {thirdLevelCategory.title}
                                        </p>
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
              <div className={styles.headerMenu}>
                {elementMenu2 === null ? (
                  <div>
                    <Kaloryfer />
                  </div>
                ) : (
                  <>
                    {filteredCategories &&
                      filteredCategories.map(category => (
                        <li key={category.title}>
                          {category.children && (
                            <ul>
                              {category.children.map((subCategory:any) => (
                                <li key={subCategory.title}>
                                  {subCategory.children && (
                                    <ul>
                                      {subCategory.children.map((thirdLevelCategory:any) => (
                                        <li
                                          key={thirdLevelCategory.id}
                                          className={`${styles.headerImageli} ${
                                            elementMenu2 === thirdLevelCategory.product_id
                                              ? styles.activeImage
                                              : styles.unActiveImage
                                          }`}
                                        >
                                          <Image
                                            className={styles.headerImage}
                                            src={thirdLevelCategory.thumbnail}
                                            alt={`Category: ${thirdLevelCategory.title}`}
                                            width={499}
                                            height={400}

                                          />
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;