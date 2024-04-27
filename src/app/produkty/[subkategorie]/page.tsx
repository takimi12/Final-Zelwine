
import Link from "next/link";
import styles from "./Subkategorie.module.scss";
import { getData } from "@/app/api/Produkty";
import Series from "@/components/series/Series";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";


export default async function Subkategories({ params }: { params: { subkategorie: string } }) {

  const fetchData = await getData();
  const filteredCategories = fetchData.filter(category => category.parent == params.subkategorie);
  const otherfilteredCategories = fetchData.filter(category => category.id === parseInt(params.subkategorie));

  const name = fetchData.find(category => category.id == params.subkategorie)?.name;

  return (
    <>
      <section>
        <Breadcrumbs name={name} />
        {name}
      </section>

      <section className={styles.sectionProduct}>
        {filteredCategories.length > 0 && (
          <>
            {filteredCategories.map(category => (
              <Link href={`/product/${category.id}`} key={category.id}>
                <div className={styles.productsWrapper}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={category.image.src}
                      fill
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
            {otherfilteredCategories.map(category => (
              <Link href={`/product/${category.id}`} key={category.id}>
                <div className={styles.productsWrapper}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={category.image.src}
                      fill
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

 