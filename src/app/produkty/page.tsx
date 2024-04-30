

import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';
import { getData } from '../api/Produkty';
import styles from './Produkty.module.scss';
import Link from 'next/link';
import Image from 'next/image';


export default async function Products({ params }: any) {


  
  const fetchData = await getData();
  const filteredCategories = fetchData.filter((category: any) => category.parent === 0 && category.name !== "Bez kategorii");


  
  return (
    <>

<section className={styles.breadcrumbs}>
<Breadcrumbs name="" breadcrumbs1="" breadcrumbs2="" kategoria="" />
        <h4> Produkty </h4>
      </section>
  <section className={styles.sectionProduct}>
        {filteredCategories.map((category:any) => (
          <div className={styles.productsWrapper} key={category.id}>
            <Link href={`/Produkty/${category.id}`}>
              {category.image && category.image.src && (
                <Image src={category.image.src} alt={category.image.alt} className={styles.categoryImage} />
              )}
              <p className='p15six'>{category.name}</p>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

