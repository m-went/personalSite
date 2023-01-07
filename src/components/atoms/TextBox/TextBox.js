import styles from './TextBox.module.scss';
import QuestionBox from '../QuestionBox/QuestionBox';
import AnswerBox from '../AnswerBox/AnswerBox';

function TextBox({ user, questionTop, questionBot, answer, choseQuestion, clickedQuestions }) {
  let dialog;
  if (user === 'guest') {
    dialog = (
      <QuestionBox
        questionBot={questionBot}
        questionTop={questionTop}
        choseQuestion={choseQuestion}
        clickedQuestions={clickedQuestions}
      />
    );
  } else {
    dialog = <AnswerBox answer={answer} />;
  }
  return dialog;
}

export default TextBox;
