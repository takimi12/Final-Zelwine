import { ContactData, ContactItem } from '../types/kontakt'; 
import Image from 'next/image';
import Form from './components/Form';
import styles from './Kontakt.module.scss';
import { getDataContactPage } from '../api/Kontakt';

export default async function Contact() {
  const data: ContactData = await getDataContactPage();
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
                    <div className='Image'>
                      <Image
                        src={contact.icon.sizes.thumbnail}
                        alt='contact icon'
                        width={25}
                        height={25}
                      />
                    </div>
                    <div className='details'>
                      <h6 className={styles.ContactParagraphDetails}>
                        {contact.bold}
                      </h6>
                      <p className='body-small'>{contact.grey}</p>
                    </div>
                  </div>
                ))}
                <p className={`body-small ${styles.companyAdress}`}>
                  {acf.bottom_grey}
                </p>
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
