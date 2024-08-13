'use client';
import { useEffect, useState } from 'react';
import DefaultHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
interface Category {
  title: string;
  url: string;
  slug: string;
  product_id: string;
  thumbnail: string;
  children: Category[];
}

const Header = ({ categories }: { categories: Category[] }) => {
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
