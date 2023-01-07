import styles from './AnimatedText.module.scss';
import { TypeAnimation } from 'react-type-animation';

function AnimatedText({ sequence, wrapper, speed }) {
  return (
    <div>
      <TypeAnimation
        sequence={sequence}
        speed={speed}
        deletionSpeed={25}
        wrapper={wrapper}
        repeat={Infinity}
        cursor={false}
        className={`${styles.cursor}`}
      />
    </div>
  );
}

export default AnimatedText;
