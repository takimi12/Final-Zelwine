import Image from "next/image";
import styles from "./Opinie.module.scss";
import { getData } from "../api/Opinie";



export default async function Opinie() {
    
    const data = await getData();
  


  return (
    <>
      <section className={styles.opinions}>
          <div className={styles.mainHeading}>
            <h3> {data.acf.header}</h3>
            <img 
            width={100}
            height={100}
            src={`${data.acf.header_stars.url}`}/>
            <p className="p13brown">Średnia ocena: <span>{data.acf.under_stars}</span></p>
            
          </div>


        <div className={styles.mainWrapper}>
        {data?.acf?.opinions?.map((opinion) => (
            <div key={opinion.number_of_stars} className={styles.wrapperOpinion}>
              <div className={styles.wrapperOpinionLeft}>
                 <p> {opinion.number_of_stars}</p>
                <h6>{opinion.title}</h6>
                <p className={`${styles.middle} p15`}> {opinion.paragraph}</p>
                <p className="p13"> {opinion.signature}<span className="span13"> {opinion.country}</span></p>


              </div>
              <div className={styles.wrapperOpinionRight}>
              <img src={opinion.image.url}  />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
