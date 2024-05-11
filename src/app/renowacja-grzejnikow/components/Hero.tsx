import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import Link from "next/link";


const Hero = ({ acf }: { acf: any }) => {
  const { hero } = acf;

  return (
    <>
      <section className={styles.renovationPage}>
      <div className={`${styles.renovationColumWrapper} ${styles.renovationColumnWrapper2}`}>
          <div className={styles.renovationPageText}>
            <div className={styles.innerWrapper}>
              <h1 className="display1">{hero.title}</h1>
              <div className={styles.renovationPageParagraph}>
                <p className="body">{hero.paragraph}</p>
              </div>
              <div>
              <Link className={`Button`} href="#form">
                <button type="button" className="button-text-big">
                {hero.button.title}
                </button>
                </Link>
              </div>


            </div>
          </div>
        </div>
        <div className={`${styles.renovationColumWrapper} ${styles.renovationColumnWrapper1}`}>
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