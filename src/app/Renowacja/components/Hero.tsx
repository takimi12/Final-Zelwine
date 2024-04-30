import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import Link from "next/link";


const Hero = ({ acf }: { acf: any }) => {
  const { hero } = acf;

  return (
    <>
      <section className={styles.renovationPage}>
        <div className={styles.renovationColumWrapper}>
          <div className={styles.renovationPageText}>
            <div className={styles.innerWrapper}>
              <h1 className="h1big">{hero.title}</h1>
              <div className={styles.renovationPageParagraph}>
                <p className="p15">{hero.paragraph}</p>
              </div>
                <button type="button" className="button-text-big">
                {hero.button.title}
                </button>
            </div>
          </div>
        </div>
        <div className={styles.renovationColumWrapper}>
            <Image
            fill
                src={hero.image.url}
                alt="popraw"
                className={styles.renovationImage}
                
            />
        </div>
      </section>
    </>
  );
};

export default Hero ;