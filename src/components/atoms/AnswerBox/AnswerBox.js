import styles from './AnswerBox.module.scss';
import Arrow from '../Arrow/Arrow';

function AnswerBox({ answer, scrollAnswer, isScrolledDown }) {
  return (
    <div className={`${styles.textBoxVerticalVersion}`}>
      <div className={`${styles.textContainer}`}>
        <p className={`${styles.text}`}>{answer}</p>
        <Arrow location="answerBox" answer={answer} isScrolledDown={isScrolledDown} scrollAnswer={scrollAnswer} />
      </div>
    </div>
  );
}

export default AnswerBox;
