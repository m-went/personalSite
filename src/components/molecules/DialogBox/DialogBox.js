import UserIcon from '../../atoms/UserIcon/UserIcon';
import TextBox from '../../atoms/TextBox/TextBox';
import styles from './DialogBox.module.scss';
import QandA from '../../../assets/data/questionsAndAnswers';
import { useState } from 'react';

// [q1[1.1,1.2], q2[2.1,2.2]]

function DialogBox(props) {
  const [actualQuestions, setActualQuestions] = useState(QandA);
  const [actualAnswer, setActualAnswer] = useState('');
  const [goBackText, setGoBackText] = useState('Exit');
  const [clickedQuestions, setClickedQuestions] = useState([]);

  const isEveryChildIsClicked = (questions) => {
    const totalNumOfChildQuestions = questions.length;
    let clickedChildQuestions = 0;
    for (let question of questions) {
      if (clickedQuestions.includes(question)) {
        clickedChildQuestions += 1;
      }
    }
    if (clickedChildQuestions === totalNumOfChildQuestions) {
      return true;
    } else {
      return false;
    }
  };

  const isClicked = (question) => {
    //Check if there are child questions
    if (question.nextQuestions) {
      //If there are, check if all of them were clicked
      const isEveryChildClicked = isEveryChildIsClicked(question.nextQuestions);
      //If every child question was clicked add parent question to clickedQuestions array or return actual array if it already includes this question
      if (isEveryChildClicked) {
        setClickedQuestions((st) => {
          if (!clickedQuestions.includes(question)) {
            return [...st, question];
          } else {
            return [...st];
          }
        });
      }
    } else {
      //If there are not child questions add questions to clickedQuestions array
      setClickedQuestions((st) => {
        if (!clickedQuestions.includes(question)) {
          return [...st, question];
        } else {
          return [...st];
        }
      });
    }
  };

  const choseQuestion = (question) => {
    isClicked(question);
    if (question.nextQuestions) {
      setActualQuestions(question.nextQuestions);
      setGoBackText('Go Back');
    }
    setActualAnswer(question.answer);
  };

  const goBack = () => {
    if (actualQuestions[0].id === 1) {
      console.log('top level');
    } else {
      setTimeout(() => {
        const higherLevelQuestions = QandA;
        isClicked(higherLevelQuestions[0]);
        isClicked(higherLevelQuestions[1]);
        setActualQuestions(higherLevelQuestions);
        setGoBackText('Exit');
      }, 100);
    }
    setActualAnswer('');
  };
  return (
    <div>
      <div className={`${styles.guest}`}>
        <TextBox
          user="guest"
          questionBot={actualQuestions[0]}
          questionTop={actualQuestions[1]}
          choseQuestion={choseQuestion}
          clickedQuestions={clickedQuestions}
        />
        <UserIcon user="guest" />
        <button onClick={goBack} className={`${styles.backButton}`}>
          <span>{goBackText}</span>
        </button>
      </div>
      <UserIcon />
      <TextBox answer={actualAnswer} />
    </div>
  );
}

export default DialogBox;
