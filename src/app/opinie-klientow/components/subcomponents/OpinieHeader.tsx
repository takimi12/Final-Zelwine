import Image from 'next/image';
import styles from '../Opinie.module.scss';

interface OpinieHeaderProps {
  header: string;
  headerStarsUrl: string;
  underStars: string;
}

export const OpinieHeader: React.FC<OpinieHeaderProps> = ({ header, headerStarsUrl, underStars }) => (
  <div className={styles.mainHeading}>
    <h3>{header}</h3>
    <Image width={100} height={100} src={headerStarsUrl} alt='stars' />
    <p className={`EyebrowHeader ${styles.EyebrowHeader}`}>
      Średnia ocena: <span className={styles.span}>{underStars}</span>
    </p>
  </div>
);

