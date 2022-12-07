import styles from './SuccessInfo.module.scss';

function SuccessInfo(props) {
  return (
    <div className={`${styles.success}`}>
      <h3 className={`${styles.successHeader}`}>Message sent!</h3>
    </div>
  );
}

export default SuccessInfo;
