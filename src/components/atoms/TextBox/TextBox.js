import styles from './TextBox.module.scss';

function TextBox(props) {
  return (
    <div className={`${styles.textBox}`}>
      <p className={`${styles.text}`}>
        Some text lorem ipsum askidn askidbn kadbn kads ijausd habds ja bnbhjas ahsbd jh abyhsd a jhsbdjahbds jahbsd ja
        jahbd jhb d
      </p>
    </div>
  );
}

export default TextBox;
