import { ReactComponent as ArrowDown } from '../../../assets/icons/arrow-down.svg';
import styles from './Arrow.module.scss';

function Arrow(props) {
  return (
    <div
      onClick={() => {
        window.scroll({
          top: window.innerHeight - 50,
          left: 0,
          behavior: 'smooth',
        });
      }}
      className={`${styles.arrowContainer}`}
    >
      <ArrowDown className={`${styles.arrow}`} />
      <div className={`${styles.circle}`} style={{ animationDelay: '0s' }} />
      <div className={`${styles.circle}`} style={{ animationDelay: '1s' }} />
      <div className={`${styles.circle}`} style={{ animationDelay: '2s' }} />
    </div>
  );
}

export default Arrow;
