import styles from './Home.module.scss';
import photo from '../../../assets/imgs/Red.jpg';
import AnimatedText from '../../atoms/AnimatedText/AnimatedText';
import Arrow from '../../atoms/Arrow/Arrow';

function Home(props) {
  return (
    <section className={`${styles.home}`}>
      <div className={`${styles.photoContainer}`}>{<img src={photo} alt="It's me, Mar...Michał!" />}</div>
      <AnimatedText />
      <ul className={`${styles.myInfo}`}>
        <li>Aspiring junior front end developer...</li>
        <li>Hardworking and passionate about learning new things...</li>
        <li>...and looking for job!</li>
      </ul>
      <Arrow />
      <div id="about-me" className={`${styles.endPageGradient}`} />
    </section>
  );
}

export default Home;
