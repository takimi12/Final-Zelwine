import styles from "./subkategorie.module.scss";
import Image from "next/image";
import Link from "next/link";
import { getData } from "@/app/api/Subkategorie";
import { getDataProducts } from "@/app/api/Produkty";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import BreadcrumbsMobile from "../../../../components/breadcrumbs/breadcrumbMobile";
import Series from "@/components/series/Series";
import Background from "../../../../../public/static/Products/grzejnik-zeliwny-aurora-header-section.png"

interface ImageData {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  src: string;
  name: string;
  alt: string;
}

interface CategoryData {
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

}

export default async function Subkategories({ params }: { params: { kategorie: string; subkategorie: string } }) {
  const fetchData = await getData();
  const dataSeries: CategoryData[] = await getDataProducts();

  const filtereddataSeries = dataSeries.filter((category: CategoryData) => {
    return category.parent == 16 || category.parent == 17 || category.parent == 34;
  });




  interface Product {
    categories: { id: number; name: string }[];
    name: string;
    id: number;
    images: ImageData[];
    slug: string;
  }

  const filteredCategories = fetchData.filter((product: Product) => {
    const isIronRadiators = product.categories.some((category) => category.id == parseInt(params.subkategorie));
    return isIronRadiators;
  });

  const breadcrumbs2 = fetchData
    .filter((product: Product) => product.categories.some((category) => category.id == parseInt(params.subkategorie)))
    .map((category: Product) => category.categories[0].name)
    .slice(0, 1);

  const breadcrumbs1 = fetchData
    .filter((product: Product) => product.categories.some((category) => category.id == parseInt(params.subkategorie)))
    .map((category: Product) => category.categories[1].name)
    .slice(0, 1);

  interface MappedCategory {
    name: string;
    id: number;
    images: ImageData[];
    slug: string;
  }

  const mapped: MappedCategory[] = filteredCategories.map((category: Product) => {
    const imagesLength = category.images.length;
    return {
      name: category.name,
      id: category.id,
      images: category.images.slice(imagesLength - 2, imagesLength),
      slug: category.slug
    };
  }).filter((category:String) => {
    return !Object.values(category).some(value => 
      typeof value === 'string' && value.includes("(Kopia)")
    );
  });
  
  let whiteArrow = true;


  return (
    <>

<section className={styles.breadcrumbs} style={{ backgroundImage: `url(${Background.src})` }}>
    <div className={styles.breadcrumbDesktop}>
      <Breadcrumbs name='' breadcrumbs1={breadcrumbs1} breadcrumbs2={breadcrumbs2} kategoria={params.kategorie} whiteArrow={whiteArrow}/>
      <h3>{breadcrumbs2}</h3>
    </div>
    <div className={styles.breadcrumbMobile}>
      <BreadcrumbsMobile breadcrumbs1={breadcrumbs1} breadscrumb2={params.kategorie} />
    </div>
  </section>
     

      <section className={styles.sectionProduct}>
        {mapped
          .filter((mappedCategory: MappedCategory) => mappedCategory.images.length > 0 && mappedCategory.name !== '')
          .map(({ id, name, images }: MappedCategory) => (
            <div className={styles.settingWidth} key={id}>
              <Link href={`/product/${id}`} key={id}>
                <div className={styles.categoryContainer}>
                  <div className={styles.categoryImage}>
                    <Image src={images[0]?.src} alt={images[0]?.alt} width={300} height={300} />
                  </div>
                  <div className={styles.overlay}>
                    <Image src={images[1]?.src} alt={images[1]?.alt} width={300} height={300} />
                  </div>
                  <h6>{name}</h6>
                </div>
              </Link>
            </div>
          ))}
      </section>

      <Series series="" series1="" filtereddataSeries={filtereddataSeries} />
    </>
  );
}