import React from "react";
import Image from "next/image";
import styles from "./RenovationProces.module.scss";

const RenovationProces = ({ proces }: { proces: any }) => {


  return (
    <>
      <section className={styles.renovationPageInfo}>
        <h3 className={styles.heading}>{proces.title}</h3>
        <div className={styles.colWrapper}>
            {proces.process_steps.map((step: any, index: number) => (
            <div className={styles.col6} key={index}>
              <div className={styles.foto}>
                <Image className={styles.photoSection} 
                src={step.process_image.url} 
                alt="popraw"
               width={325}
               height={251}
                />
                <Image className={styles.photoSectionMobile} 
                src={step.process_image.url} 
                alt="popraw"
              width={358}
              height={268}

                />
              </div>
              <div className={styles.text}>
                <div className={styles.innerText}>
                  <p className="p138" >{step.step}</p>
                  <h4>{step.step_title}</h4>
                  <p className="p15" >{step.step_text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RenovationProces;