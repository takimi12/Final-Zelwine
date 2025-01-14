import Link from 'next/link';
import styles from './DesktopContactButton.module.scss';

export const ContactButton = () => (
  <div className={styles.buttonWrapper}>
    <Link href='/Kontakt'>
      <button className={`Button ${styles.Button}`} type='button'>
        <span>Skontaktuj się</span>
      </button>
    </Link>
  </div>
);
