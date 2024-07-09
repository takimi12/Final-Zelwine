import Image from "next/image";
import Form from "./components/Form";
import styles from "./Kontakt.module.scss";
import { getData } from "../api/Kontakt";

// Typy dla kontaktów
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
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: {
    _acf_changed: boolean;
    _seopress_robots_primary_cat: string;
    _seopress_titles_title: string;
    _seopress_titles_desc: string;
    _seopress_robots_index: string;
    inline_featured_image: boolean;
    footnotes: string;
  };
  acf: ContactsData;
  _links: {
    self: {
      [key: string]: any;
    }[];
    collection: {
      [key: string]: any;
    }[];
    about: {
      [key: string]: any;
    }[];
    author: {
      [key: string]: any;
    }[];
    replies: {
      [key: string]: any;
    }[];
    'version-history': {
      [key: string]: any;
    }[];
    'predecessor-version': {
      [key: string]: any;
    }[];
    'wp:attachment': {
      [key: string]: any;
    }[];
    curies: {
      [key: string]: any;
    }[];
  };
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
