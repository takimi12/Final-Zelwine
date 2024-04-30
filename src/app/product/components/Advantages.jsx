import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Advantages.module.scss'

const Advantages = ({ lastSegment }) => {
    const [products, setProducts] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!lastSegment) {
                    return;
                }

                const response = await fetch(`https://grzejniki2.ergotree.pl/wp-json/wp/v2/product/${lastSegment}`, {
                    method: 'GET',
                });
                const result = await response.json();
                setProducts(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [lastSegment]);

    return (
        <section className={styles.series}>
            {products && (
<>

                    {products.acf.Series && (
                        <div className={styles.parent}>
                            <div className={styles.leftSection}>
                            <p className='p138'>{products.acf.Series.small_title}</p>
                            <h1 className={styles.mainHeading}>{products.acf.Series.big_title}</h1>
                            <p className='p15'>{products.acf.Series.description}</p>
                        </div>
                        <div className={styles.rightSection}>
                            {products.acf.Series.image && (
                                <Image
                                    className={styles.image}
                                    src={products.acf.Series.image.url}
                                    alt={products.acf.Series.image.alt}
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

export default Advantages;
