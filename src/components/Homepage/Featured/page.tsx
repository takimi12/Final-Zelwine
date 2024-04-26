import React from "react";
import styles from "./Featured.module.scss";
import Link from "next/link";

const Featured = ({ data }) => {


  const sectionStyle = {
    backgroundImage: `url(${data.background.url})`,
    backgroundSize: 'cover',
  };

  return (
    <section className={styles.featured} style={sectionStyle}>
      <div className={styles.textCenterSetting}>
        <h1 className={`${styles.text} h1big`}>{data.title}</h1>
 <Link href={data.link.url}>        <button className={styles.button}>
        
            {data.link.title}
        
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Featured;