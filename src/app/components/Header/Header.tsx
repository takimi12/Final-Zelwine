'use client';
import { useEffect, useState } from 'react';
import DefaultHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import { Category } from '../../types/header';

const Header = ({ categories }: { categories: Category[] }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 901);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {isMobile ? (
        <MobileHeader categories={categories} />
      ) : (
        <DefaultHeader categories={categories} />
      )}
    </>
  );
};

export default Header;
