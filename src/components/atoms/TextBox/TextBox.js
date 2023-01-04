import styles from './TextBox.module.scss';

function TextBox({ user }) {
  let dialog;

  if (user !== 'guest') {
    dialog = (
      <div className={`${styles.textBoxVerticalVersion}`}>
        <p className={`${styles.text}`}>
          Some text lorem ipsum askidn askidbn kadbn kads ijausd habds ja bnbhjas ahsbd jh abyhsd a jhsbdjahbds jahbsd
          ja jahbd jhb d
        </p>
      </div>
    );
  } else {
    dialog = (
      <div className={`${styles.questions}`}>
        <div className={`${styles.question}`}>
          <p className={`${styles.questionText}`}>NNNNNNNNNNNNNNNNNNNNNNNNNNNN</p>
        </div>
        <div className={`${styles.question} ${styles.questionBot}`}>
          <p className={`${styles.questionText} ${styles.questionTextBot}`}>NNNNNNNNNNNNNNNNNNNNNNNNNNNN</p>
        </div>
      </div>
    );
  }
  return dialog;
}

export default TextBox;
