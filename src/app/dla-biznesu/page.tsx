import { Data } from '../types/biznes';
import Image from 'next/image';
import styles from './Biznes.module.scss';
import { getDataBusinessPage } from '../api/Biznes';
import background from '../../../public/static/Biznes/Header-section.jpg';
import Link from 'next/link';

export default async function Business() {
  const data: Data = await getDataBusinessPage();

  return (
    <>
      <section className={styles.background}>
        <Image src={background} fill alt='popraw' />
      </section>

      <section className={styles.forBusiness}>
        <div className={styles.forBusinessTitleText}>
          <h3 className={styles.mainHeading}>{data.acf.heading}</h3>
          <p className={`big-text ${styles.mainParagraph}`}>
            {data.acf.under_heading}
          </p>
        </div>
      </section>

      <section className={styles.businesContentWrapper}>
        {data.acf.asymetric.map((item) => (
          <div className={styles.contentWrapper} key={item.photo.ID}>
            <div className={styles.imageContent}>
              <Image
                className={styles.image}
                src={item.photo.url}
                alt={item.title}
                fill
              />
            </div>
            <div className={styles.textContent}>
              <div className={styles.textContentInner}>
                <h4 className={styles.textContentHeading}>{item.title}</h4>
                <p className={`body ${styles.textContentParagraph}`}>
                  {item.paragraph}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className={styles.contentCta}>
        <div className={styles.textWrapper}>
          <div>
            <h2>Masz dodatkowe pytania?</h2>
          </div>
          <div className={styles.smallText}>
            <p>
              Napisz lub zadzwoń do nas - chętnie porozmawiamy o tym jak możemy
              pomóc rozwijać Twój biznes.
            </p>
          </div>
          <button className='Button' type='button' data-button='true'>
            <Link href='/kontakt'>
              <span>Skontaktuj się z nami</span>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
