import Image from "next/image";
import Form from "./components/Form";
import styles from "./Kontakt.module.scss";
import { getData } from "../api/Kontakt";

type ContactItem = {
  icon: {
    sizes: {
      thumbnail: string;
    };
  };
  bold: string;
  grey: string;
};

type ContactsData = {
  naglowek: string;
  contacts: ContactItem[];
  bottom_grey: string;
};

type ContactData = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  acf: ContactsData;
};

export default async function Contact() {
  const data: ContactData = await getData();
  const { acf } = data;

  let contact = 1;
  return (
    <>
      <section className={styles.contact}>
        <div className={styles.contactDetails}>
          <div className={styles.contactDetailsWrapper}>
            {data && (
              <>
                <div className={styles.mobileSet}>
                  <h2>{data.title.rendered}</h2>
                </div>
                {acf.contacts.map((contact: ContactItem, index: number) => (
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
                      <p className="body-small">{contact.grey}</p>
                    </div>
                  </div>
                ))}
                <p className={`body-small ${styles.companyAdress}`}>{acf.bottom_grey}</p>
              </>
            )}
          </div>
        </div>
        <div className={styles.contactSection}>
          <Form contact={contact} />
        </div>
      </section>
    </>
  );
}
