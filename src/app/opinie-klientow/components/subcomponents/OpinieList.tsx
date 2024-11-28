import Image from 'next/image';
import styles from '../Opinie.module.scss';

interface Opinion {
  number_of_stars: string;
  title: string;
  paragraph: string;
  signature: string;
  country: string;
  image: { url: string };
}

interface OpinieListProps {
  opinions: Opinion[];
}

export const OpinieList: React.FC<OpinieListProps> = ({ opinions }) => (
  <div className={styles.mainWrapper}>
    {opinions.map((opinion, index) => (
      <div key={index} className={styles.wrapperOpinion}>
        <div className={styles.wrapperOpinionLeft}>
          <p>{opinion.number_of_stars}</p>
          <h6>{opinion.title}</h6>
          <p className={`${styles.middle} body`}>{opinion.paragraph}</p>
          <p className='body-small'>
            {opinion.signature}
            <span className={`body-small ${styles.eyespan}`}>{opinion.country}</span>
          </p>
        </div>
        <div className={styles.wrapperOpinionRight}>
          <Image src={opinion.image.url} fill alt='opinion' />
        </div>
      </div>
    ))}
  </div>
);

