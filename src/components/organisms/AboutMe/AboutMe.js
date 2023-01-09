import styles from './AboutMe.module.scss';
import photo from '../../../assets/imgs/CV-zdjecie.jpg';
import { useEffect, useState } from 'react';
import AnimatedText from '../../atoms/AnimatedText/AnimatedText';

function AboutMe(props) {
  const [scrollY, setScrollY] = useState(0);
  const [isInfoShown, setInfoShown] = useState(false);
  const [isAnimationSkipped, setIsAnimationSkipped] = useState(false);

  function logit() {
    setScrollY(window.scrollY);
    if (scrollY > 400) {
      setInfoShown(true);
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', logit);
    };
  });
  const aboutMeParagraphText = `Hello! As You probably know, my name is Michał. I'm from Poland and actually living in Rumia, near Tricity. I hope, that now i'm a nice pretender to become junior front-end developer and You're reading this means, that my dream can come true. I started learning web development in september 2021 and came a long way to learn what I know now, but i also know that my knowlege is like a raindrop in the sea. Fortunatelly I also learn a lot about myself and can guarantee, that I'll keep learning to become better and better. So, that's about my learning history, time for more personall stuff ;) I completed economy studies at Gdańsk University, found beautiful and smart wive and after a few years as fire protection technician decided, that I want more opportunities to learn new thing and started learning programming. Also I have to admit, that I'm a big fan of boardgames and maybe a little fan of dad jokes :D`;

  let textToShow;
  if (isAnimationSkipped) {
    textToShow = <p>{aboutMeParagraphText}</p>;
  } else {
    textToShow = <AnimatedText sequence={[`${aboutMeParagraphText}`, 2000]} wrapper="p" speed={65} />;
  }

  return (
    <section className={`${styles.aboutMe}`} id="abc">
      <h2 className={`${styles.aboutTitle}`}>A few words about me...</h2>
      <div className={`${styles.aboutFrame}`}>
        <div className={`${styles.aboutTextAnimated}`}>
          <div className={`${styles.photoContainer}`}>
            <img className={`${styles.aboutPhotoMobile}`} src={photo} alt="Yup, it's still me" />
          </div>
          {isInfoShown ? textToShow : null}
          <button onClick={() => setIsAnimationSkipped(true)} className={`${styles.skipButton}`}>
            <span>Skip animation</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
