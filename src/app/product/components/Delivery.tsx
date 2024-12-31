import styles from './Delivery.module.scss';
import Image from 'next/image';
import Close from '../../../../public/static/ProductPage/close.svg';
import { DeliveryProps } from '../../types/delivery';

export default function Delivery({ responseModal, closeModal }: DeliveryProps) {
  const deliveryPack = responseModal?.acf?.delivery_pack;

  return (
    <section
      className={`${styles.productSection} ${styles.productSectionDesktop}`}
    >
      <div className={styles.mainwrapper}>
        <div className={styles.wykonczenia}>
          <div className={styles.topText}>
            <h3 className={styles.guaranteeTitle}>Dostawa</h3>
            <button onClick={closeModal}>
              <Image src={Close} alt='close' />
            </button>
          </div>
          {deliveryPack && (
            <div className={styles.deliveryPackContainer}>
              <div className={styles.bottomWrapper}>
                <div className={styles.left}>
                  {deliveryPack.list && deliveryPack.list.length > 0 && (
                    <>
                      <p className={styles.top}>{deliveryPack.description}</p>
                      <ul>
                        {deliveryPack.list.map((item, index) => (
                          <li key={index}>{item.line}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                <div className={styles.right}>
                  {deliveryPack.image && (
                    <Image
                      src={deliveryPack.image.url}
                      alt={deliveryPack.image.alt || 'Delivery image'}
                      width={deliveryPack.image.width}
                      height={deliveryPack.image.height}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
