import React from "react";
import styles from "./Hero.module.scss";
import Link from "next/link";

const Hero = ({ data }: { data: any[] }) => {

  if (!data || !data || data.length === 0) {
    return null;
  }

  // Dynamiczne style
  const heroStyle = {
    backgroundImage: `url("${data[0].image.url}")`,
    // Dodaj inne style według potrzeb
  };

  return (
    <>
      {data.map((heroItem, index) => (
        <section key={index} className={styles.hero} style={heroStyle}>
          <div className={styles.textCenter}>
            <div className={styles.textCenterSetting}>
              <span className="eyebrowheader">{heroItem.small_title}</span>
              <h1 className={styles.displaySecond}>{heroItem.title}</h1>
              <Link href={heroItem.link.url}>
              <button
                className="button h6-500"              >
                {heroItem.link.title}
              </button>
              </Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Hero;