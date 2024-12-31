import Image from 'next/image';
import styles from '../DesktopSection.module.scss';
import { Image as ImageType } from '../../../types/desktopSection';

export const ProductImages = ({ images }: { images: ImageType[] }) => (
  <div className={styles.leftSection}>
    {images &&
      images.map((image, index, array) =>
        index < array.length - 2 ? (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={200}
            height={500}
            objectFit='cover'
          />
        ) : null,
      )}
    {images && (
      <div className={styles.lastSecond}>
        {images.slice(-2).map((image, index) => (
          <Image
            key={images.length - 2 + index}
            src={image.src}
            alt={image.alt}
            width={200}
            height={200}
          />
        ))}
      </div>
    )}
  </div>
);