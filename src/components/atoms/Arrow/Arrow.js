import { ReactComponent as ScrollArrow } from '../../../assets/icons/arrow.svg';
import styles from './Arrow.module.scss';
import { useState } from 'react';

function Arrow({ location, answer }) {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const scrollFunction = (e) => {
    if (location === 'main') {
      window.scroll({
        top: window.innerHeight - 50,
        left: 0,
        behavior: 'smooth',
      });
    } else {
      if (isScrolledDown) {
        e.nativeEvent.path[2].firstChild.scrollTop = 0;
        setIsScrolledDown(false);
      } else {
        e.nativeEvent.path[2].firstChild.scrollTop = 100;
        setIsScrolledDown(true);
      }
    }
  };
  let scrollArrow;
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
