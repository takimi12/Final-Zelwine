import { getProducts } from '@/app/api/Produkt';
import Image from 'next/image';
import styles from './Produkt.module.scss';
import Link from "next/link";
import { getData } from "@/app/api/Homepage";

import Telephone from "../../../../public/static/ProductPage/telephonepage.jsx";
import Car from '../../../../public/static/ProductPage/Car.jsx';
import Post from '../../../../public/static/ProductPage/post.jsx';


interface Product {
  id: number;
  meta_data: MetaData[];
  attributes: Attribute[];
  images: Image[];
}

interface MetaData {
  key: string;
  value: string;
}

interface Attribute {
  id: number;
  name: string;
  options: string[];
}

interface Image {
  src: string;
  alt: string;
}



export default async function ProductPageSingle({res}: {res: string}) {





  const data = await getData();
  const { acf } = data;

  const response: Product = await getProducts(res);




  const getAddonValue = (metaData: MetaData[]): string => {
    const addonMeta = metaData.find(meta => meta.key === 'addon');
    return addonMeta ? addonMeta.value : 'Brak informacji o addonie';
  };


  const getMetaValue = (metaData: MetaData[], key: string): string => {
    const metaItem = metaData.find(meta => meta.key === key);
    return metaItem ? metaItem.value : '';
  };


  return (
    <>
<section className={`${styles.productSection} ${styles.productSectionDesktop}`}>

        {response && (
          <>
          
            <div className={styles.leftSection}>
              {response.images && response.images.map((image, index, array) => (
                index < array.length - 2 ? (
                  <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    width={200}
                    height={200}
                  />
                ) : null
              ))}
              {response.images && (
                <div className={`${styles.lastSecond}`}>
                  {response.images.slice(-2).map((image, index) => (
                    <Image
                      key={response.images.length - 2 + index}
                      src={image.src}
                      alt={image.alt}
                      width={200}
                      height={200}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className={styles.rightSection}>
              <div className={styles.sticky} key={response.id}>
                <div className={styles.rightTitle}>
                  <h1>{getMetaValue(response.meta_data, 'tytul_na_strone_produktu')}</h1>
                  <h6 className={styles.h6}>{getAddonValue(response.meta_data)}</h6>
                </div>
                <div className={styles.shortDesc}>
                  <p className='body'>{getMetaValue(response.meta_data, 'short_description')}</p>
                </div>

                <div className={styles.height}>
                  {response.attributes && response.attributes.map(attribute => (
                    <div key={attribute.id}>
                      <p className='body-small'>{attribute.name}:</p>
                      <div className={styles.wrapperHeight}>
                        {attribute.options.map(option => (
                          <div className={styles.availableHeight} key={option}>
                            <p className='body'>{option}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <h4 >{getMetaValue(response.meta_data, 'dopis_przy_cenie')}</h4>

                <div className={styles.buttonWrapper}>
                  <Link className={`Button`}href="/Kontakt" >
                    <button 
                                   className={` ${styles.Button}`}
                    type="button" data-button="true">
                      <span className="">Skontaktuj się</span>
                    </button>
                  </Link>

               

                </div>

                <div className={styles.time}>
                  <Car />
                  <p className="body-small">Dostawa: 6 - 8 tygodni</p>
                </div>

                <div className={styles.wrapperDelivery}>
                  <div className={styles.delivery}>
                    <Telephone />
                    <p className="body">123123123</p>
                  </div>
                  <div className={styles.delivery}>
                    <Post />
                    <p className="body">test@test.pl</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>

    </>
  );
};
