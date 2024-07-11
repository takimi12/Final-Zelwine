import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import Link from "next/link";

interface ImageSize {
}

interface ImageData {
  ID: number;
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  link: string;
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  status: string;
  uploaded_to: number;
  date: string;
  modified: string;
  menu_order: number;
  mime_type: string;
  type: string;
  subtype: string;
  icon: string;
  width: number;
  height: number;
  sizes: ImageSize;
}

interface ButtonData {
  title: string;
  url: string;
  target: string;
}

interface HeroData {
  image: ImageData;
  title: string;
  paragraph: string;
  button: ButtonData;
}


interface ProcessStep {

}

interface Benefit {

}

interface ACFData {
  hero: HeroData;
  simple_steps: {
    heading: string;
  
  };
  process: {
    title: string;
    process_steps: ProcessStep[];
  };
  benefits: {
    benefits_heading: string;
    benefits_repeater: Benefit[];
  };
}

const Hero: React.FC<{ acf: ACFData }> = ({ acf }) => {
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
            alt={hero.image.alt || "Renovation Image"}
            className={styles.renovationImage}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;