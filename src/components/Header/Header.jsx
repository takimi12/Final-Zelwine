'use client';
import React, { useState, useEffect } from 'react';
import DefaultHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://grzejniki2.ergotree.pl/wp-json/custom/v1/navigation', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('ck_333c63c1676df66d84322191922b725ba3dc7f1e:cs_85c7bc717de01741a71ad8dc9152986569b62cec')
          },
        });
        const result = await response.json();
        setCategories(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    handleResize(); // Dodane, aby określić początkową wartość isMobile po załadowaniu strony

    window.addEventListener('resize', handleResize);

    // Clean-up function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Pusta tablica oznacza, że useEffect zostanie uruchomiony tylko po zamontowaniu komponentu

  return (
    <>
      {isMobile ? <MobileHeader categories={categories} /> : <DefaultHeader categories={categories} />}
    </>
  );
};

export default Header;
