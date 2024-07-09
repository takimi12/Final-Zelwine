
import React from "react";
import styles from "./Featured.module.scss";
import Link from "next/link";

const Featured = ({ data }: { data: any }) => {


  const sectionStyle = {
    backgroundImage: `url(${data.background.url})`,
    backgroundSize: 'cover',
  };


  return (
    <section className={styles.featured} style={sectionStyle}>
      <div className={styles.textCenterSetting}>
        <div className={styles.wrapper}>
        <p className={`${styles.text} display1`}>{data.title}</p>
        <div>
 <Link className={`Button`} href={data.link.url}>       
  <button className={styles.button}>
        
            {data.link.title}

        
        </button>
        </Link>
        </div>
        </div>



      </div>
    </section>
  );
};

export default Featured;