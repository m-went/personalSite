import styles from './Home.module.scss';
import photo from '../../../assets/imgs/Red.jpg';
import AnimatedText from '../../atoms/AnimatedText/AnimatedText';
import Arrow from '../../atoms/Arrow/Arrow';

function Home(props) {
  return (
    <section className={`${styles.home}`}>
      <div className={`${styles.photoContainer}`}>{<img src={photo} alt="It's me, Mario...Michał!" />}</div>
      <AnimatedText sequence={['Hi! I am Michał!', 2000, 'Cześć! Jestem Michał!', 2000]} wrapper="h1" speed={15} />
      <ul className={`${styles.myInfo}`}>
        <li>Aspiring junior front end developer...</li>
        <li>Hardworking and passionate about learning new things...</li>
        <li>...and looking for job!</li>
      </ul>
      <Arrow location="main" />
      <div id="about-me" className={`${styles.endPageGradient}`} />
    </section>
  );
}

export default Home;
