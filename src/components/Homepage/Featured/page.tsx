import React from "react";
import styles from "./Featured.module.scss";
import Link from "next/link";

interface FeaturedData {
  background: {
    ID: number;
    id: number;
    title: string;
    filename: string;
    filesize: number;
    url: string;
    link: string;
    alt: string;
    width: number;
    height: number;
   
  };
  title: string;
  link: {
    title: string;
    url: string;
    target: string;
  };
}

interface FeaturedProps {
  data: FeaturedData;
}

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
            <Link href={data.link.url} className={`Button`} target={data.link.target}>
                {data.link.title}
              
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
