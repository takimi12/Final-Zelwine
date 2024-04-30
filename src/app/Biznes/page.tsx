import Image from "next/image";
import styles from "./Biznes.module.scss";
import { getData } from "../api/Biznes";
import background from "../../../public/static/Biznes/Header-section.jpg";


export default async function  Business() {
    const data = await getData();


  return (
    <>
<section className={styles.background}>
  <Image
  src={background}
    fill
    alt="popraw"
  />
</section>

      <section className={styles.forBusiness}>
        <div className={styles.forBusinessTitleText}>
          <h3 className={styles.mainHeading}>{data.acf.heading}</h3>
          <p className={`big-text ${styles.mainParagraph}`}>{data.acf.under_heading}</p>
        </div>
      </section>

      <section className={styles.businesContentWrapper}>
        {data.acf?.asymetric.map((item:any) => (
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
                <p className={`p-15 ${styles.textContentParagraph}`}>{item.paragraph}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}


