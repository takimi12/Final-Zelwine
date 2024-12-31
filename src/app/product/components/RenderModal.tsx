import { ModalData } from '../../types/popupEnd';
import styles from './PopupEnd.module.scss';
import Image from 'next/image';

export const RenderModal = ({modalData}:{modalData: ModalData}): React.ReactNode => {
    return (
      <div className='modal'>
        <div className={styles.modalContent}>
          <h3>{modalData.title}</h3>
          <p className={styles.paragraph}>{modalData.description}</p>
          <div className={styles.productGrid}>
            {modalData.produkt.map((product) => (
              <div key={product.ID} className={styles.itemWrapper}>
                <div className={styles.productItem}>
                  <Image
                    src={product.featured_image_url}
                    alt={product.post_title}
                    width={130}
                    height={120}
                  />
                </div>
                <h6 className={styles.title}>{product.post_title}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
