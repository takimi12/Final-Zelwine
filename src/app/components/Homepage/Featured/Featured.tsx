import React from 'react';
import styles from './Featured.module.scss';
import Link from 'next/link';

import { FeaturedProps } from '../../../types/featured';

const Featured: React.FC<FeaturedProps> = ({ data }) => {
  const sectionStyle = {
    backgroundImage: `url(${data.background.url})`,
    backgroundSize: 'cover',
  };

  return (
    <section className={styles.featured} style={sectionStyle}>
      <div className={styles.textCenterSetting}>
        <div className={styles.wrapper}>
          <p className={`${styles.text} display1`}>{data.title}</p>
          <div>
            <Link
              href={data.link.url}
              className={`Button`}
              target={data.link.target}
            >
              {data.link.title}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
