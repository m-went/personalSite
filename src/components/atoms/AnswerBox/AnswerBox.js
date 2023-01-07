import styles from './AnswerBox.module.scss';
import Arrow from '../Arrow/Arrow';

function AnswerBox({ answer }) {
  return (
    <div className={`${styles.textBoxVerticalVersion}`}>
      <div className={`${styles.textContainer}`}>
        <p className={`${styles.text}`}>{answer}</p>
        <Arrow location="answerBox" answer={answer} />
      </div>
    </div>
  );
}

export default AnswerBox;
