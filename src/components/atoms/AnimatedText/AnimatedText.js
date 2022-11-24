import styles from './AnimatedText.module.scss';
import { TypeAnimation } from 'react-type-animation';

function AnimatedText(props) {
  return (
    <div>
      <TypeAnimation
        sequence={['Hi! I am Michał!', 2000, 'Cześć! Jestem Michał!', 2000]}
        speed={15}
        deletionSpeed={25}
        wrapper="h1"
        repeat={Infinity}
        cursor={false}
        className={`${styles.cursor}`}
      />
    </div>
  );
}

export default AnimatedText;
