import UserIcon from '../../atoms/UserIcon/UserIcon';
import styles from './DialogBox.module.scss';
import QandA from '../../../assets/data/questionsAndAnswers';
import QuestionBox from '../../atoms/QuestionBox/QuestionBox';
import AnswerBox from '../../atoms/AnswerBox/AnswerBox';
import useDialog from '../../../hooks/useDialog';

function DialogBox({ closeDialog }) {
  const {
    actualQuestions,
    actualAnswer,
    clickedQuestions,
    goBackText,
    goBack,
    isScrolledDown,
    answerBoxArrowScroll,
    choseQuestion,
    isTopLevelQuestion,
  } = useDialog(QandA);

  const handleBackAndExit = () => {
    if (isTopLevelQuestion) {
      closeDialog();
    } else {
      goBack();
    }
  };

  return (
    <div className={`${styles.dialogBox}`}>
      <div className={`${styles.guest}`}>
        <QuestionBox
          questionBot={actualQuestions[0]}
          questionTop={actualQuestions[1]}
          choseQuestion={choseQuestion}
          clickedQuestions={clickedQuestions}
        />
        <UserIcon purpose="guestQuestions" />
        <button onClick={handleBackAndExit} className={`${styles.backButton}`}>
          <span>{goBackText}</span>
        </button>
      </div>
      <UserIcon />
      <AnswerBox answer={actualAnswer} isScrolledDown={isScrolledDown} scrollAnswer={answerBoxArrowScroll} />
    </div>
  );
}

export default DialogBox;
