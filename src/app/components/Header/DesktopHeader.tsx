'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Header.module.scss';
import ProduktyDropdown from '../../../../public/static/Header/ProduktyArrow.jsx';
import SecondLogo from '../../../../public/static/Header/SecondLogo.jsx';
import FirstLogo from '../../../../public/static/Header/Logo.jsx';
import Kaloryfer from '../../../../public/static/Header/Radiator.jsx';
import Image from 'next/image';
import { Category, HeaderProps } from '../../types/dekstopHeader';

const DesktopHeader: React.FC<HeaderProps> = ({ categories }) => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [activeChildCategoryId, setActiveChildCategoryId] = useState<
    string | null
  >(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [isProductsHovered, setIsProductsHovered] = useState(false);

  const filteredCategories =
    categories && categories.filter((category) => category.title !== 'Kontakt');
  const kontaktCategory =
    categories && categories.find((category) => category.title === 'Kontakt');

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  const MouseEnterElementMenu = (product_id: string) => {
    setActiveCategoryId(product_id);
    setActiveChildCategoryId(product_id);
    setActiveImage(null);
    setIsProductsHovered(product_id === '275');
  };

  const MouseEnterChildMenu = (child_product_id: string) => {
    setActiveChildCategoryId(child_product_id);
  };

  const handleMouseEnterGrandChild = (thumbnail: string) => {
    setActiveImage(thumbnail);
  };

  const handleMouseLeaveFourthLevel = () => {
    setActiveImage(null);
  };

  const handleMouseEnterLogo = () => {
    setActiveCategoryId(null);
    setActiveChildCategoryId(null);
    setActiveImage(null);
    setIsProductsHovered(false);
  };

  const handleMouseLeaveSubmenu = () => {
    setActiveCategoryId(null);
    setIsProductsHovered(false);
  };

  const handleHeaderMouseLeave = () => {
    setIsProductsHovered(false);
  };

  const isMainPage = pathname === '/';
  const isProductsCategorySubcategory =
    pathname?.startsWith('/products/') && pathname.split('/').length === 4;
  const isBiznes = pathname === '/dla-biznesu';

  const isNumericPath = (pathname: string, basePath: string) => {
    const regex = new RegExp(`^${basePath}/\\d+$`);
    return regex.test(pathname);
  };
  const isWhiteBackground =
    pathname === '/kontakt' ||
    pathname === '/opinie-klientow' ||
    pathname === '/renowacja-grzejnikow' ||
    pathname === '/products' ||
    pathname === '/polityka-prywatnosci' ||
    isNumericPath(pathname, '/products') ||
    isNumericPath(pathname, '/product');

  const showOnlySecondLogo =
    pathname === '/kontakt' ||
    pathname === '/opinie-klientow' ||
    pathname === '/renowacja-grzejnikow' ||
    pathname === '/polityka-prywatnosci' ||
    isNumericPath(pathname, '/product') ||
    isNumericPath(pathname, '/products') ||
    pathname === '/products';

  const headerClass =
    isWhiteBackground ||
    (scrolled && (isMainPage || isProductsCategorySubcategory || isBiznes)) ||
    (isProductsHovered &&
      (isMainPage || isProductsCategorySubcategory || isBiznes))
      ? styles['header-scrolled']
      : styles['header-transparent'];

  const shouldShowSecondLogo =
    showOnlySecondLogo ||
    ((scrolled || isProductsHovered) &&
      (isMainPage || isProductsCategorySubcategory || isBiznes));

  const handleLinkClick = () => {
    setActiveCategoryId(null);
    setActiveChildCategoryId(null);
    setActiveImage(null);
    setIsProductsHovered(false);
  };

  return (
    <header
      className={`${styles.header} ${headerClass}`}
      onMouseLeave={handleHeaderMouseLeave}
    >
      <nav>
        <div className={styles.leftSide}>
          <Link
            href='/'
            className={`${styles.logo} `}
            onMouseEnter={() => handleMouseEnterLogo()}
          >
            {shouldShowSecondLogo ? <SecondLogo /> : <FirstLogo />}
          </Link>
          <ul className={styles.menu}>
            {filteredCategories &&
              filteredCategories.map((category) => (
                <li className={styles.anchorParent} key={category.title}>
                  <Link
                    onMouseEnter={() =>
                      MouseEnterElementMenu(category.product_id)
                    }
                    href={`/${category.slug}`}
                    aria-label='strona glowna'
                    className={styles.anchorParent}
                  >
                    {category.title}
                  </Link>
                  {Number(category.product_id) === 275 && <ProduktyDropdown />}
                </li>
              ))}
          </ul>
        </div>
        <div className={styles.rightSide}>
          {kontaktCategory && (
            <div className={` ${styles.kontakt} `}>
              <Link href={`/kontakt`} aria-label='strona glowna'>
                <button className={styles.button}>Skontaktuj się z nami</button>
              </Link>
            </div>
          )}
        </div>
      </nav>
      {filteredCategories.map(
        (category) =>
          activeCategoryId === category.product_id &&
          category.children.length > 0 && (
            <div
              className={styles.wrapperSubmenu}
              key={category.product_id}
              onMouseLeave={handleMouseLeaveSubmenu}
            >
              <div
                className={` ${styles.secondLevel}`}
                onMouseEnter={handleMouseLeaveFourthLevel}
              >
                {category.children.map((child) => (
                  <div
                    key={child.product_id}
                    className={`  ${styles.secondLevelSubwrapper}`}
                    onMouseEnter={() => MouseEnterChildMenu(child.product_id)}
                  >
                    <Link
                      href={`/products/${child.product_id}`}
                      onClick={handleLinkClick}
                    >
                      {child.title}
                    </Link>
                  </div>
                ))}
              </div>
              <div className={` ${styles.thirdLevel}`}>
                {category.children.map(
                  (child) =>
                    activeChildCategoryId === child.product_id &&
                    child.children.length > 0 && (
                      <>
                        {child.children.map((grandChild) => (
                          <Link
                            className={styles.thirdLevelItem}
                            key={grandChild.product_id}
                            href={`/products/${child.product_id}/${grandChild.product_id}`}
                            onMouseEnter={() =>
                              handleMouseEnterGrandChild(grandChild.thumbnail)
                            }
                            onClick={handleLinkClick}
                          >
                            {grandChild.title}
                          </Link>
                        ))}
                      </>
                    ),
                )}
              </div>
              <div
                className={`${styles.fourthLevel}`}
                onMouseLeave={handleMouseLeaveFourthLevel}
              >
                {activeImage ? (
                  <Image
                    width={300}
                    height={241}
                    src={activeImage}
                    alt='Selected'
                  />
                ) : (
                  <Kaloryfer />
                )}
              </div>
            </div>
          ),
      )}
    </header>
  );
};

export default DesktopHeader;
