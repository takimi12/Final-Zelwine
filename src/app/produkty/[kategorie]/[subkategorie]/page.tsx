

import styles from "./subkategorie.module.scss";
import Image from "next/image";
import Link from "next/link";
import { getData } from "@/app/api/Subkategorie";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";

export default async function Subkategories({ params }: { params: { kategorie: string; subkategorie: string } }) {


    const fetchData = await getData();

    const filteredCategories = fetchData.filter((product: any) => {
      const isIronRadiators = product.categories.some((category :any) => category.id == params.subkategorie);
      return isIronRadiators;
    });

    const breadcrumbs2 = fetchData
      .filter((product: any) => product.categories.some((category:any) => category.id == params.subkategorie))
      .map((category :any) => category.categories[0].name).slice(0, 1)
      
      const breadcrumbs1 = fetchData
      .filter((product :any) => product.categories.some((category :any) => category.id == params.subkategorie))
      .map((category:any) => category.categories[1].name).slice(0, 1)




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
    <Breadcrumbs name={params.kategorie} breadcrumbs1={breadcrumbs1} breadcrumbs2={breadcrumbs2} kategoria={params.kategorie} />
      {mapped && mapped.map((mappedCategory :any) => (
    <div className={styles.settingWidth} key={mappedCategory.id}>
  <Link 
    href={`/product/${mappedCategory.id}`}
    key={mappedCategory.name}
  >
    <div>
    {mappedCategory.images.map((image:any, index:any) => (
  <div className={styles.categoryImage} key={image.id}>
    {index === 0 && (
      <div className={styles.active}>
        <Image src={image.src} alt={image.alt} width={300} height={300} />
      </div>
    )}
    {index !== 0 && (
      <div className={styles.none}>
        <Image src={image.src} alt={image.alt} width={300} height={300} />
      </div>
    )}
  </div>
))}
       <p className="p15six">{mappedCategory.name}</p>         
    </div>
  </Link>
  </div>
))}

    </>
  );
};

