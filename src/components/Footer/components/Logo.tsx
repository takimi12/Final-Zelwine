import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.scss"
import Logot from "../../../../public/static/Footer/Logo"


const Logo = () => {
    return (

          <div className={styles.footerLogoParent}>
        <div className={styles.footerLogoInner}>
          <Link href="/#" aria-label="Popraw">
          <Logot />
            </Link>
            </div>
         </div>

    );
  };
  
  export default Logo;
  