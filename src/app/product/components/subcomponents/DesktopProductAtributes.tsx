import styles from '../DesktopSection.module.scss';
import { Attribute } from '../../../types/desktopSection';

export const ProductAttributes = ({ attributes }: { attributes: Attribute[] }) => (
  <div className={styles.height}>
    {attributes.map((attribute) => (
      <div key={attribute.id}>
        <p className='body-small'>{attribute.name}:</p>
        <div className={styles.wrapperHeight}>
          {attribute.options.map((option) => (
            <div className={styles.availableHeight} key={option}>
              <p className='body'>{option}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
