import React from "react";
import Logo from "./components/Logo";
import styles from "./Footer.module.scss";

const Footer = () => {

  const categories = ["Grzejniki łazienkowe", "Zawory", "Akcesoria", "Próbki wykończeń"];
  const series = ["Emmeline", "Vulcan", "Grace", "Mercury", "Rococo", "Neptune"];
  const menuItems = ["Opinie", "Renowacja", "Dla biznesu", "Kontakt"];
  const socialMedia = ["Facebook", "Instagram", "Pinterest"];

  return (
    <footer className={styles.footer}>
      <div className={styles.up}>
        <Logo />
        <div className={styles.column}>
        <div className={styles.footerColumn}>
          <div className={styles.topHeading}>
            <p className={`body-small ${styles.bodySmall}`}>Kategorie</p>
          </div>
          <ul className={styles.list}>
            {categories.map((category, index) => (
              <li key={index}><h3 className="body">{category}</h3></li>
            ))}
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <div className={styles.topHeading}>
            <p className={`body-small ${styles.bodySmall}`}>Serie</p>
          </div>
          <ul className={styles.list}>
            {series.map((serie, index) => (
              <li key={index}><h3 className="body">{serie}</h3></li>
            ))}
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <div className={styles.topHeading}>
            <p className={`body-small ${styles.bodySmall}`}>Menu</p>
          </div>
          <ul className={styles.list}>
            {menuItems.map((menuItem, index) => (
              <li key={index}><h3 className="body">{menuItem}</h3></li>
            ))}
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <div className={styles.topHeading}>
            <p className={`body-small ${styles.bodySmall}`}>Social Media</p>
          </div>
          <ul className={styles.list}>
            {socialMedia.map((media, index) => (
              <li key={index}><h3 className="body">{media}</h3></li>
            ))}
          </ul>
        </div>
        </div>
      </div>

      <div className={styles.bottomFooter}>
        <div className="copyright">
          <p className={`body-small ${styles.bodySmall2}`}>
            Żeliwne 2023
          </p>
        </div>
        <div className={styles.paper}>
          <p className={`body-small ${styles.bodySmall2}`}>Regulamin</p>
          <p className={`body-small ${styles.bodySmall2}`}>Polityka prywatności</p>
          <p className={`body-small ${styles.bodySmall2}`}>Polityka cookies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
