
import Image from 'next/image';
import styles from './Advantages.module.scss'
import {getProductsAds} from '../../api/Advantages';

export default async function Advantages ({params}: any) {



const response = await getProductsAds(params);




    return (
        <section className={styles.series}>
        {response && (
<>

                {response.acf.Series && (
                    <div className={styles.parent}>
                        <div className={styles.leftSection}>
                        <p className='p138'>{response.acf.Series.small_title}</p>
                        <h1 className={styles.mainHeading}>{response.acf.Series.big_title}</h1>
                        <p className='p15'>{response.acf.Series.description}</p>
                    </div>
                    <div className={styles.rightSection}>
                        {response.acf.Series.image && (
                            <Image
                                className={styles.image}
                                src={response.acf.Series.image.url}
                                alt={response.acf.Series.image.alt}
                            fill
                            />
                        )}
                        </div>
                    </div>
                )}
</>
        )}
    </section>
    );
};


