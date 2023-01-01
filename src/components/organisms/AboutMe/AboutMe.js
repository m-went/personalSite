import styles from './AboutMe.module.scss';
import photo from '../../../assets/imgs/CV-zdjecie.jpg';
import { useEffect, useState } from 'react';

function AboutMe(props) {
  const [scrollY, setScrollY] = useState(0);
  const [isInfoShown, setInfoShown] = useState(false);

  function logit() {
    setScrollY(window.scrollY);
    if (scrollY > 400) {
      setInfoShown(true);
    }
  }

  useEffect(() => {
    console.log(isInfoShown);
    function watchScroll() {
      window.addEventListener('scroll', logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', logit);
    };
  });

  return (
    <section className={`${styles.aboutMe}`} id="abc">
      <h2 className={`${styles.aboutTitle}`}>A few words about me...</h2>
      <div className={`${styles.aboutMainInfo}`}>
        <div className={`${isInfoShown ? styles.showFromLeft : ''} ${styles.imgWrapper} `}>
          <img className={`${styles.aboutPhoto}`} src={photo} alt="Yup, it's still me" />
          <div className={`${styles.aboutOutsideColor2}`}></div>
        </div>
        <div className={`${isInfoShown ? styles.showFromRight : ''} ${styles.textWrapper} `}>
          <p className={`${styles.aboutText}`}>
            Hello! As You probably know, my name is Michał. I'm from Poland and actually living in Rumia, near Tricity.
            I hope, that now i'm a nice pretender to become junior front-end developer and You're reading this means,
            that my dream can come true. I started learning web development in september 2021 and came a long way to
            learn what I know now, but i also know that my knowlege is like a raindrop in the sea. Fortunatelly I also
            learn a lot about myself and can guarantee, that I'll keep learning to become better and better. So, that's
            about my learning history, time for more personall stuff &#59;&#41; I completed economy studies at Gdańsk
            University, found beautiful and smart wive and after a few years as fire protection technician decided, that
            I want more opportunities to learn new thing and started learning programming. Also I have to admit, that
            I'm a big fan of boardgames and maybe a little fan of dad jokes :D
          </p>
          <div className={`${styles.aboutOutsideColor}`}></div>
        </div>
      </div>
      <div className={`${styles.angle}`} />
    </section>
  );
}

export default AboutMe;
