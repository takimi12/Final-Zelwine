'use client'
import React, { useState, useEffect } from 'react';
import styles from './MobileHeader.module.scss';
import Link from 'next/link';
import Logo from '../../../public/static/Header/Logo';
import WhiteHamburger from '../../../public/static/Header/WhiteHamburger';
import SecondLogo from '../../../public/static/Header/SecondLogo';
import Close from '../../../public/static/Header/Close';
import ArrowSmall from '../../../public/static/Header/ArrowSmall';
import ArrowBack from '../../../public/static/Header/backArrows';

interface SubCategory {
  title: string;
  url: string;
  slug: string;
  product_id: string;
  thumbnail: string;
  children: Category[];
}

interface Category {
  title: string;
  url: string;
  slug: string;
  product_id: string;
  thumbnail: string;
  children: SubCategory[];
}

interface Props {
  categories: Category[];
}

const MobileHeader: React.FC<Props> = ({ categories }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ThirdLevel, setIsThirdLevel] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 100);
  };

  const handleHamburgerClick = () => {
    document.body.classList.add('no-scroll');
    setIsMenuOpen(true);
    document.documentElement.style.overflow = 'hidden';
  };

  const handleHamburgerClickClose = () => {
    document.body.classList.remove('no-scroll');
    setIsMenuOpen(false);
    document.documentElement.style.overflow = 'auto';
  };

  const handleProduktyClick = () => {
    setIsThirdLevel(true);
  };

  const handleProduktyClose = () => {
    setIsThirdLevel(false);
  };

  const handleAllClose = () => {
    setIsMenuOpen(false);
    setIsThirdLevel(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('no-scroll');
      document.documentElement.style.overflow = 'auto';
    };
  }, []);

  const filteredCategories = categories && categories.filter(category => category.title);

  let headerParentClasses = `${styles.mobileHeader} ${scrolled ? styles.scroll : ''}`;

  const currentPath = window.location.pathname;
  let segments = currentPath.split('/').filter(segment => segment !== '');
  if (segments.includes('Renowacja') || segments.includes('Opinie') || segments.includes('Kontakt') || segments.includes('product') || segments.includes('products')) {
    headerParentClasses = `${styles.mobileHeader1} `;
  }

  if (segments.includes('products') && segments.length === 3 || segments.includes('Biznes')) {
    headerParentClasses = `${styles.mobileHeader} `;
  }

  return (
    <>
      <div className={`${headerParentClasses} ${scrolled ? styles.scroll : ''}`}>
        <div className={styles.inner}>
          <div className={styles.icons}>
            <Link href='/' aria-label="strona glowna">
              <Logo className={` ${scrolled ? styles.secondColor : ''}`} />
            </Link>
            <WhiteHamburger
              className={` ${scrolled ? styles.secondColor : ''}`}
              onClick={handleHamburgerClick}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.slideHeader} ${isMenuOpen ? styles.active : ''}`}>
        <div className={styles.leftSection} onClick={handleHamburgerClickClose}></div>
        <div className={styles.rightSection}>
          <div className={styles.top}>
            <SecondLogo />
            <Close onClick={handleHamburgerClickClose} />
          </div>
          <div className={styles.bottom}>
            <div>
              <p className={`p11 ${styles.bottomMenu}`}>Menu</p>
            </div>
            <div className={styles.firstLevel}>
              {filteredCategories &&
                filteredCategories.map(category =>
                  category.product_id === '275' ? (
                    <div className={styles.categoryMenu} key={category.title} onClick={handleProduktyClick}>
                      <h3 className={styles.heading3} onClick={handleHamburgerClickClose}>
                        {category.title}
                      </h3>
                      <ArrowSmall />
                    </div>
                  ) : (
                    <div className={styles.categoryMenu} key={category.title}>
                      <Link href={`/${category.slug}`}>
                        <h3 onClick={handleHamburgerClickClose}>{category.title}</h3>
                      </Link>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.slideHeader1} ${ThirdLevel ? styles.active2 : ''}`}>
        <div className={styles.leftSection} onClick={handleAllClose}></div>
        <div className={styles.rightSection}>
          <div className={styles.top}>
            <SecondLogo />
            <Close onClick={handleAllClose} />
          </div>
          <div className={styles.bottom}>
            <div className={styles.back1}>
              <ArrowBack onClick={handleProduktyClose} />
              <p onClick={handleProduktyClose} className='p17'>Powrót</p>
            </div>
            <div>
              <p className={`p11`}>Produkty</p>
            </div>
            <div>
              {filteredCategories && filteredCategories.map(category =>
                category.children && (
                  <div key={category.title} className={styles.parentSecondLevel}>
                    {category.children.map(subCategory => (
                      <div className={styles.categoryMenu} key={subCategory.title}>
                        <Link href={`/products/${subCategory.product_id}`}>
                          <h3 onClick={handleAllClose}>{subCategory.title}</h3>
                        </Link>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
