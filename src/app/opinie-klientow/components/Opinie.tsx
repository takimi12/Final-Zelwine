'use client';

import { useState } from 'react';
import { OpinieProps } from '../../types/pagination';
import {OpinieHeader} from './subcomponents/OpinieHeader';
import {OpinieList} from './subcomponents/OpinieList';
import {Pagination } from './subcomponents/Pagination';
import styles from './Opinie.module.scss';

const postsPerPage = 2;

const Opinie: React.FC<OpinieProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.acf.opinions.length / postsPerPage);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getCurrentPosts = () => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return data.acf.opinions.slice(indexOfFirstPost, indexOfLastPost);
  };

  return (
    <section className={styles.opinions}>
      <OpinieHeader
        header={data.acf.header}
        headerStarsUrl={data.acf.header_stars.url}
        underStars={data.acf.under_stars}
      />
      <OpinieList opinions={getCurrentPosts()} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handleClick}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};

export default Opinie;
