import React from "react";
import styles from "./Hero.module.scss";
import Link from "next/link";

interface HeroItem {
  small_title: string;
  title: string;
  link: {
    title: string;
    url: string;
    target: string;
  };
  image: {
    ID: number;
    id: number;
    title: string;
    filename: string;
    filesize: number;
    url: string;
    link: string;
    alt: string;
    author: string;
  
  };
}

interface HeroProps {
  data: HeroItem[];
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  const heroStyle = {
    backgroundImage: `url("${data[0].image.url}")`,

  };

  return (
    <>
      {data.map((heroItem, index) => (
        <section key={index} className={styles.hero} style={heroStyle}>
          <div className={styles.textCenter}>
            <div className={styles.textCenterSetting}>
              <span className={`EyebrowHeader ${styles.EyebrowHeader}`}>
                {heroItem.small_title}
              </span>
              <h1 className={`display1 ${styles.displaySecond}`}>
                {heroItem.title}
              </h1>
              <Link href={heroItem.link.url} className={`Button`}>
                 
                  {heroItem.link.title}
       
              </Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Hero;
