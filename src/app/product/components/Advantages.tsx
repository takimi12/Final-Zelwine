import Image from 'next/image';
import styles from './Advantages.module.scss';
import { getProductsAds } from '../../api/Advantages';

type AdvantagesProps = {
  parameter: string;
};

export default async function Advantages({ parameter }: AdvantagesProps) {
  const response = await getProductsAds(parameter);

  return (
    <section className={styles.series}>
      {response && (
        <>
          {response.acf.Series && (
            <div className={styles.parent}>
              <div className={styles.leftSection}>
                <p className={`EyebrowHeader ${styles.EyebrowHeader}`}>
                  {response.acf.Series.small_title}
                </p>
                <h1 className={` display1 ${styles.mainHeading}`}>
                  {response.acf.Series.big_title}
                </h1>
                <p className='body'>{response.acf.Series.description}</p>
              </div>
              <div className={styles.rightSection}>
                {response.acf.Series.image && (
                  <Image
                    className={styles.image}
                    src={response.acf.Series.image.url}
                    alt={response.acf.Series.image.alt}
                    fill
                  />
                )}
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}
