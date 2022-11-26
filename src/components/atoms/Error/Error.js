import styles from './Error.module.scss';

function Error({ message = 'Something went wrong, please try again later.' }) {
  return (
    <div className={`${styles.error}`}>
      <h1 className={`${styles.errorHeader}`}> Oh no! </h1>
      <p>{message}</p>
    </div>
  );
}

export default Error;
