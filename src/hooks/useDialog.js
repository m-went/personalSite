import { useState } from 'react';

function useDialog(questionsArray = []) {
  const [actualQuestions, setActualQuestions] = useState(questionsArray);
  const [clickedQuestions, setClickedQuestions] = useState([]);
  const [actualAnswer, setActualAnswer] = useState('');
  const [goBackText, setGoBackText] = useState('Exit');
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const addQuestionToClicked = (question) => {
    //Check if there are child questions
    if (question.nextQuestions) {
      //If there are, check if all of them were clicked
      const isEveryChildClicked = isEveryChildQuestionClicked(question.nextQuestions);
      //If every child question was clicked add question to array
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
      //If there are not child questions add question to array
      setClickedQuestions((st) => {
        if (!clickedQuestions.includes(question)) {
          return [...st, question];
        } else {
          return [...st];
        }
      });
    }
  };

  const isEveryChildQuestionClicked = (childQuestionsArray) => {
    const totalNumOfChildQuestions = childQuestionsArray.length;
    let clickedChildQuestions = 0;

    for (let question of childQuestionsArray) {
      if (clickedQuestions.includes(question)) {
        clickedChildQuestions += 1;
      }
    }
    return clickedChildQuestions === totalNumOfChildQuestions;
  };

  //returning to previous questions or closing entire dialog
  const goBack = () => {
    //exit dialog if there is no parent questions to return to
    if (actualQuestions[0].id[3] === '0') {
      //There will be function to close dialog
      console.log('top level - close');
    } else {
      //Show parent questions and check if both of their children are clicked
      setTimeout(() => {
        const higherLevelQuestions = questionsArray;
        //check if higherLevel questions should be in clicked array
        addQuestionToClicked(higherLevelQuestions[0]);
        addQuestionToClicked(higherLevelQuestions[1]);
        setActualQuestions(higherLevelQuestions);
        setGoBackText('Exit');
      }, 100);
    }
    //Clear answerBox
    setActualAnswer('');
    //Set answerArrow to proper position
    setIsScrolledDown(false);
  };

  const choseQuestion = (question) => {
    addQuestionToClicked(question);
    if (question.nextQuestions) {
      //If there are next questions show them
      setActualQuestions(question.nextQuestions);
      setGoBackText('Go Back');
    }
    //Show answer to chosen question
    setActualAnswer(question.answer);
    //Set answet arrow in top position
    resetAnswerPosition();
    setIsScrolledDown(false);
  };

  const resetAnswerPosition = () => {
    window.document.childNodes[1].children[1].children[1].children[0].children[8].children[0].children[2].children[0].children[0].scrollTop = 0;
  };

  const answerBoxArrowScroll = () => {
    if (isScrolledDown) {
      resetAnswerPosition();
      setIsScrolledDown(false);
    } else {
      window.document.childNodes[1].children[1].children[1].children[0].children[8].children[0].children[2].children[0].children[0].scrollTop = 100;
      setIsScrolledDown(true);
    }
  };

  return {
    actualQuestions,
    actualAnswer,
    clickedQuestions,
    goBackText,
    goBack,
    isScrolledDown,
    answerBoxArrowScroll,
    choseQuestion,
  };
}

export default useDialog;
