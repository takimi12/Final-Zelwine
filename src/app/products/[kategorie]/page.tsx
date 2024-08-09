import Link from "next/link";
import styles from "./kategorie.module.scss";
import { getDataProducts } from "@/app/api/Produkty";
import Series from "@/components/series/Series";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import BreadcrumbsMobile from "../../../components/breadcrumbs/breadcrumbMobile"
import { getDataSeries } from "@/app/api/Series";

interface ImageData {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  src: string;
  name: string ;
  alt: string;
}

interface LinkData {
  self: string[];
  collection: string[];
  up?: string[];
}

interface Category {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  display: string;
  image: ImageData | null;
  menu_order: number;
  count: number;
  slug_parent: string;
  _links: LinkData;
}

interface Params {
  params: {
    kategorie: string;
  };
}

export default async function Subkategories({ params }: Params) {

  const fetchData: Category[] = await getDataProducts();

  const filteredCategories = fetchData.filter((category) => category.parent == parseInt(params.kategorie));
  const excludedIds = [16, 17, 34];
  const otherfilteredCategories = fetchData.filter((category) => {
      return category.id == parseInt(params.kategorie) && !excludedIds.includes(category.id);
  });

  const names = fetchData.find((category) => category.id == parseInt(params.kategorie))?.name;

  const series1 = await getDataSeries();

  return (
    <>
      <section className={styles.breadcrumb}>
        <div className={styles.breadcrumbDesktop}>
          <Breadcrumbs name={names} breadcrumbs1="" breadcrumbs2="" kategoria="" whiteArrow={false} />
        </div>
        <div className={styles.breadcrumbMobile}>
          <BreadcrumbsMobile breadcrumbs1="" />
        </div>
      </section>
      

      <section className={styles.sectionProduct}>
        <div className={styles.title}>
          <h4>{names}</h4>
        </div>

        <div className={styles.products}>
          {filteredCategories.length > 0 && (
            <>
              {filteredCategories.map((category) => (
                <Link className={styles.anchor} href={`/products/${params.kategorie}/${category.id}`} key={category.id}>
                  <div className={styles.productsWrapper}>
                    {category.image && (
                      <Image
                        src={category.image.src}
                        width={670}
                        height={502}
                        alt={category.image.alt || 'Product Image'}
                        className={styles.imageDesktop}
                      />
                    )}
                  </div>
                  <h6>{category.name}</h6>
                </Link>
              ))}
            </>
          )}

          {otherfilteredCategories.length > 0 && (
            <>
              {otherfilteredCategories.map((category) => (
                <Link className={styles.anchor} href={`/products/${params.kategorie}/${category.id}`} key={category.id}>
                  <div className={styles.productsWrapper}>
                    {category.image && (
                      <Image
                        src={category.image.src}
                        width={670}
                        height={502}
                        alt={category.image.alt || 'Product Image'}
                        className={styles.imageDesktop}
                      />
                    )}
                    <h6>{category.name}</h6>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </section>

      <Series series1={series1}  filtereddataSeries="" series=""/>
    </>
  );
}
