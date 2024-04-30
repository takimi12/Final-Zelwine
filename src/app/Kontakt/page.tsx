
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Form from "../../components/Form/form";
import styles from "./Kontakt.module.scss";
import { getData } from "../api/Kontakt";

export default async function  Contact() {

    const data = await getData();
    const { acf  } = data;


  

  return (
    <>
      <section className={styles.contact}>
        <div className={styles.contactDetails}>
          <div className={styles.contactDetailsWrapper}>
            {data && (
              <>
                <h2>{data.title.rendered}</h2>

                {data.acf.contacts.map((contact:any, index:any) => (
                  <div className={styles.contactDetailsSmall} key={index}>
                    <div className="Image">
                      <Image
                        src={contact.icon.sizes.thumbnail}
                        alt="contact icon"
                        width={25}
                        height={25}
                      />
                    </div>
                    <div className="details">
                      <h6 className={styles.ContactParagraphDetails}>{contact.bold}</h6>
                      <p>{contact.grey}</p>
                    </div>
                  </div>
                ))}

                <p className={styles.companyAdress}>{data.acf.bottom_grey}</p>
              </>
            )}
          </div>
        </div>
        <div className={styles.contactSection}>
          <Form formProp={1} />
        </div>
      </section>
    </>
  );
};

