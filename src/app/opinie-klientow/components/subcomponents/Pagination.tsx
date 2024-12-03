import styles from '../Opinie.module.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, onPrev, onNext }) => (
  <div className={styles.pagination}>
    <button onClick={onPrev} className={styles.prev} disabled={currentPage === 1}>
      {'<'}
    </button>
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index + 1}
        onClick={() => onPageChange(index + 1)}
        className={currentPage === index + 1 ? styles.active : ''}
      >
        {index + 1}
      </button>
    ))}
    <button onClick={onNext} className={styles.next} disabled={currentPage === totalPages}>
      {'>'}
    </button>
  </div>
);

