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
            <p className="body-small-bigger-second">Kategorie</p>
          </div>
          <ul className={styles.list}>
            {categories.map((category, index) => (
              <li key={index}><h6 className="h6-400-third">{category}</h6></li>
            ))}
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <div className={styles.topHeading}>
            <p className="body-small-bigger-second">Serie</p>
          </div>
          <ul className={styles.list}>
            {series.map((serie, index) => (
              <li key={index}><h6 className="h6-400-third">{serie}</h6></li>
            ))}
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <div className={styles.topHeading}>
            <p className="body-small-bigger-second">Menu</p>
          </div>
          <ul className={styles.list}>
            {menuItems.map((menuItem, index) => (
              <li key={index}><h6 className="h6-400-third">{menuItem}</h6></li>
            ))}
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <div className={styles.topHeading}>
            <p className="body-small-bigger-second">Social Media</p>
          </div>
          <ul className={styles.list}>
            {socialMedia.map((media, index) => (
              <li key={index}><h6 className="h6-400-third">{media}</h6></li>
            ))}
          </ul>
        </div>
        </div>
      </div>

      <div className={styles.bottomFooter}>
        <div className="copyright">
          <p className="body-small-smaller-second">
            Żeliwne 2023
          </p>
        </div>
        <div className={styles.paper}>
          <p className="body-small-smaller-second">Regulamin</p>
          <p className="body-small-smaller-second">Polityka prywatności</p>
          <p className="body-small-smaller-second">Polityka cookies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
