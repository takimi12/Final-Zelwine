
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';
import { getData } from '../api/Produkty';
import styles from './Produkty.module.scss';
import Link from 'next/link';
import { headers } from 'next/headers';

// import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';



export default async function  Products({params}) {



  console.log(params, 'params')

  
  const fetchData = await getData();
  const filteredCategories = fetchData.filter(category => category.parent === 0 && category.name !== "Bez kategorii");


  
  return (
    <>

<section className={styles.breadcrumbs}>
        <Breadcrumbs  />
        <h4> Produkty </h4>
      </section>
  <section className={styles.sectionProduct}>
        {filteredCategories.map(category => (
          <div className={styles.productsWrapper} key={category.id}>
            <Link href={`/produkty/${category.id}`}>
              {category.image && category.image.src && (
                <img src={category.image.src} alt={category.image.alt} className={styles.categoryImage} />
              )}
              <p className='p15six'>{category.name}</p>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

