import styles from './Navbar.module.scss';
import HamburgerMenu from '../../atoms/HamburgerMenu/HamburgerMenu';
import { useState } from 'react';

function Navbar(props) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setIsBurgerOpen((b) => !b);
  };

  return (
    <>
      <HamburgerMenu toggleBurger={toggleBurger} isOpen={isBurgerOpen} />
      <nav className={`${styles.navbar}`}>
        <ul className={`${styles.navList}`}>
          <a className={`${styles.navSection}`} href="#root">
            <li>Home</li>
          </a>
          <a className={`${styles.navSection}`} href="#about-me">
            <li>About me</li>
          </a>
          <a className={`${styles.navSection}`} href="#skills">
            <li>Skills</li>
          </a>
          <a className={`${styles.navSection}`} href="#projects">
            <li>Projects</li>
          </a>
          <a className={`${styles.navSection}`} href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
