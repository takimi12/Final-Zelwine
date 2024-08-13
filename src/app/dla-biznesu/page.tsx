import Image from "next/image";
import styles from "./Biznes.module.scss";
import { getData } from "../api/Biznes";
import background from "../../../public/static/Biznes/Header-section.jpg";
import Link from "next/link";

// Define types directly in this file
interface Guid {
  rendered: string;
}

interface Title {
  rendered: string;
}

interface Excerpt {
  rendered: string;
  protected: boolean;
}

interface Meta {
  _acf_changed: boolean;
  _seopress_robots_primary_cat: string;
  _seopress_titles_title: string;
  _seopress_titles_desc: string;
  _seopress_robots_index: string;
  inline_featured_image: boolean;
  footnotes: string;
}

interface ImageWithText {
  small_title: string;
  title: string;
  description: string;
  link: string;
  image: boolean;
}

interface AsymetricItem {
  photo: {
    ID: number;
    url: string;
  };
  title: string;
  paragraph: string;
}

interface Acf {
  heading: string;
  under_heading: string;
  asymetric: AsymetricItem[];
  hero: boolean;
  most: boolean;
  products_cat: boolean;
  inspirations: boolean;
  box: boolean;
  image_with_text: ImageWithText;
  header: string;
  under_stars: string;
  opinion: boolean;
  our_partners: boolean;
  last_block_homepage: {
    background: boolean;
    title: string;
    link: string;
  };
}

interface Data {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Title;
  content: Excerpt;
  excerpt: Excerpt;
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: Meta;
  acf: Acf;
}

export default async function Business() {
  const data: Data = await getData();

  return (
    <>
      <section className={styles.background}>
        <Image src={background} fill alt="popraw" />
      </section>

      <section className={styles.forBusiness}>
        <div className={styles.forBusinessTitleText}>
          <h3 className={styles.mainHeading}>{data.acf.heading}</h3>
          <p className={`big-text ${styles.mainParagraph}`}>{data.acf.under_heading}</p>
        </div>
      </section>

      <section className={styles.businesContentWrapper}>
        {data.acf.asymetric.map((item) => (
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
                <p className={`body ${styles.textContentParagraph}`}>{item.paragraph}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
      
      <div className={styles.contentCta}>
        <div className={styles.textWrapper}>
          <div>
            <h2>Masz dodatkowe pytania?</h2>
          </div>
          <div className={styles.smallText}>
            <p>Napisz lub zadzwoń do nas - chętnie porozmawiamy o tym jak możemy pomóc rozwijać Twój biznes.</p>
          </div>
          <button className="Button" type="button" data-button="true">
            <Link href="/kontakt">
              <span>Skontaktuj się z nami</span>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
