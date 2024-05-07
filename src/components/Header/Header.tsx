'use client';
import { useEffect, useState } from 'react';
import DefaultHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = ({categories}: {categories: any[]}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 901);
    };

    handleResize(); // Dodane, aby określić początkową wartość isMobile po załadowaniu strony

    window.addEventListener('resize', handleResize);

    // Clean-up function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>

    {isMobile ? <MobileHeader categories={categories} /> : <DefaultHeader categories={categories} />}

    </>
  );
};

export default Header;
