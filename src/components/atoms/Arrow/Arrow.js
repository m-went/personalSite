import { ReactComponent as ScrollArrow } from '../../../assets/icons/arrow.svg';
import styles from './Arrow.module.scss';

function Arrow({ location, answer, isScrolledDown, scrollAnswer }) {
  const scrollMainPage = (e) => {
    window.scroll({
      top: window.innerHeight - 50,
      left: 0,
      behavior: 'smooth',
    });
  };

  //Set scrollFunction to move window if it's arrow at the end of main page or scroll answerBox content if it's Arrow in answerBox
  let scrollFunction;
  if (scrollAnswer) {
    scrollFunction = scrollAnswer;
  } else {
    scrollFunction = scrollMainPage;
  }
  let scrollArrow;
  //Show scrollArrow only if answerBox isn't empty
  if (answer !== '') {
    scrollArrow = (
      <>
        <ScrollArrow className={`${isScrolledDown ? styles.arrowUp : ''} ${styles.arrow}`} />
        <div className={`${styles.circle}`} style={{ animationDelay: '0s' }} />
        <div className={`${styles.circle}`} style={{ animationDelay: '1s' }} />
        <div className={`${styles.circle}`} style={{ animationDelay: '2s' }} />
      </>
    );
  }
  return (
    <div
      onClick={scrollFunction}
      className={`${location === 'answerBox' ? styles.arrowAnswerContainer : ''} ${styles.arrowContainer}`}
    >
      {scrollArrow}
    </div>
  );
}

export default Arrow;
