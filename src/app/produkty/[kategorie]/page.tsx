'use client';

import Link from "next/link";
import styles from "./kategorie.module.scss";
import { getData } from "@/app/api/Produkty";
import Series from "@/components/series/Series";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";


export default async function Subkategories({ params }: { params: { kategorie: string } }) {

  const fetchData = await getData();
  const filteredCategories = fetchData.filter((category :any) => category.parent == params.kategorie);
  const otherfilteredCategories = fetchData.filter((category:any) => category.id === parseInt(params.kategorie));

  const names = fetchData.find((category :any) => category.id == params.kategorie)?.name;


  return (
    <>
      <section>
        <Breadcrumbs name={names} breadcrumbs1="" breadcrumbs2="" kategoria="" />
        {names}
      </section>

      <section className={styles.sectionProduct}>
         {filteredCategories.length > 0 && (
          <>
            {filteredCategories.map((category: any) => (
              <Link href={`/Produkty/${params.kategorie}/${category.id}`} key={category.id}>
                <div className={styles.productsWrapper}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={category.image.src}
                      fill
                      alt='ss'
                    />
                  </div>
                  <p className="p15six">{category.name}</p>
                </div>
              </Link>
            ))}
          </>
        )}
  
        {otherfilteredCategories.length > 0 && (
          <>
            {otherfilteredCategories.map((category:any) => (
              <Link href={`/Produkty/${params.kategorie}/${category.id}`} key={category.id}>
                <div className={styles.productsWrapper}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={category.image.src}
                      fill
                      alt="sss"
                    />
                  </div>
                  <p className="p15six">{category.name}</p>
                </div>
              </Link>
            ))}
          </>
        )}
        
      </section>

      <Series />
    </>
  );
}

 