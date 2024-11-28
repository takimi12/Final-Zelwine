import styles from '../DesktopSection.module.scss';
import Car from '../../../../../public/static/ProductPage/Car.jsx';
import Telephone from '../../../../../public/static/ProductPage/Telephone.jsx';
import Post from '../../../../../public/static/ProductPage/Post.jsx';

export const DeliveryInfo = () => (
  <>
  <div className={styles.wrapperDelivery}>
    <div className={styles.time}>
      <Car />
      <p className='body-small'>Dostawa: 6 - 8 tygodni</p>
    </div>
  </div>
  <div className={styles.wrapperDelivery}>
  <div className={styles.delivery}>
      <Telephone />
      <p className='body'>123123123</p>
    </div>
    <div className={styles.delivery}>
      <Post />
      <p className='body'>test@test.pl</p>
    </div>
    </div>
  </>
);
