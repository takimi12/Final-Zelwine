
import styles from "./subkategorie.module.scss";
import Image from "next/image";
import Link from "next/link";
import { getData } from "@/app/api/Subkategorie";
import {getDataProducts} from "@/app/api/Produkty";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Series from "@/components/series/Series";

export default async function Subkategories({ params }: { params: { kategorie: string; subkategorie: string } }) {
  const fetchData = await getData();

  const dataSeries = await getDataProducts();



  const filtereddataSeries = dataSeries.filter((category :any) => {
    return category.parent == 16 || category.parent == 17 || category.parent == 34;
});




  const filteredCategories = fetchData.filter((product: any) => {
    const isIronRadiators = product.categories.some((category :any) => category.id == params.subkategorie);
    return isIronRadiators;
  });

  const breadcrumbs2 = fetchData
    .filter((product: any) => product.categories.some((category:any) => category.id == params.subkategorie))
    .map((category :any) => category.categories[0].name).slice(0, 1);
      
  const breadcrumbs1 = fetchData
    .filter((product :any) => product.categories.some((category :any) => category.id == params.subkategorie))
    .map((category:any) => category.categories[1].name).slice(0, 1);

  const mapped = filteredCategories.map((category :any) => {
    const imagesLength = category.images.length;
    return {
      name: category.name,
      id: category.id,
      images: category.images.slice(imagesLength - 2, imagesLength)
    };
  });

  return (
    <>
      <Breadcrumbs name='' breadcrumbs1={breadcrumbs1} breadcrumbs2={breadcrumbs2} kategoria={params.kategorie} />
      
      <section className={styles.sectionProduct}>
      {mapped && mapped.map((mappedCategory :any) => (
        <div className={styles.settingWidth} key={mappedCategory.id}>
          <Link 
            href={`/product/${mappedCategory.id}`}
            key={mappedCategory.name}
          >
            <div className={styles.categoryContainer}>
              <div className={styles.categoryImage}>
                <Image src={mappedCategory.images[0].src} alt={mappedCategory.images[0].alt} width={300} height={300} />
              </div>
              <div className={` ${styles.overlay}`}>
                <Image src={mappedCategory.images[1].src} alt={mappedCategory.images[1].alt} width={300} height={300} />
              </div>
              <p className="p15six">{mappedCategory.name}</p>         
            </div>
          </Link>
        </div>
      ))}
      </section>

        <Series filtereddataSeries={filtereddataSeries}  />

    </>
  );
};
