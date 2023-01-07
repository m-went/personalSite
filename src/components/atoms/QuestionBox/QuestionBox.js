import styles from './QuestionBox.module.scss';

function QuestionBox({ questionBot, questionTop, choseQuestion, clickedQuestions }) {
  return (
    <div>
      <div className={`${styles.questions}`}>
        <div className={`${styles.question}`} onClick={() => choseQuestion(questionTop)}>
          <p className={`${clickedQuestions.includes(questionTop) ? styles.oldQuestion : ''} ${styles.questionText}`}>
            {questionTop.question}
          </p>
        </div>
        <div className={`${styles.question} ${styles.questionBot}`} onClick={() => choseQuestion(questionBot)}>
          <p
            className={`${clickedQuestions.includes(questionBot) ? styles.oldQuestion : ''} ${styles.questionText} ${
              styles.questionTextBot
            }`}
          >
            {questionBot.question}
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuestionBox;
