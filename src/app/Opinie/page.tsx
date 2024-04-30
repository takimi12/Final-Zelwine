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
            <Image
            width={100}
            height={100}
            src={`${data.acf.header_stars.url}`}
            alt="popraw"/>
            <p className="p13brown">Średnia ocena: <span>{data.acf.under_stars}</span></p>
            
          </div>


        <div className={styles.mainWrapper}>
        {data?.acf?.opinions?.map((opinion:any) => (
            <div key={opinion.number_of_stars} className={styles.wrapperOpinion}>
              <div className={styles.wrapperOpinionLeft}>
                 <p> {opinion.number_of_stars}</p>
                <h4>{opinion.title}</h4>
                <p className={`${styles.middle} p15`}> {opinion.paragraph}</p>
                <p className="p13"> {opinion.signature}<span className="span13"> {opinion.country}</span></p>


              </div>
              <div className={styles.wrapperOpinionRight}>
              <Image src={opinion.image.url} 
              fill
              alt="popraw"
              />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

