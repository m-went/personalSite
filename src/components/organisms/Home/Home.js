import styles from './Home.module.scss';
import photo from '../../../assets/imgs/Red.jpg';
import AnimatedText from '../../atoms/AnimatedText/AnimatedText';

function Home(props) {
  return (
    <div className={`${styles.home}`}>
      <div className={`${styles.photoContainer}`}>{<img src={photo} alt="It's me, Mar...Michał!" />}</div>
      <AnimatedText />
      <ul>
        <li>Aspiring junior front end developer</li>
        <li>Hardworking and passionate about learning new things</li>
        <li>...and looking for job!</li>
      </ul>
    </div>
  );
}

export default Home;
