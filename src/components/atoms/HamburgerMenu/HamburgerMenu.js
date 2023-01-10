import styles from './HamburgerMenu.module.scss';

function HamburgerMenu({ isOpen, toggleBurger }) {
  const mobileNavbar = (
    <nav className={`${styles.mobileNavbar}`}>
      <ul className={`${styles.mobileNavList}`}>
        <div className={`${styles.mobileNavComicStyle}`}>
          <a className={`${styles.mobileNavSection}`} href="#root">
            <li>Home</li>
          </a>
        </div>
        <div className={`${styles.mobileNavComicStyle}`}>
          <a className={`${styles.mobileNavSection}`} href="#about-me">
            <li>About me</li>
          </a>
        </div>
        <div className={`${styles.mobileNavComicStyle}`}>
          <a className={`${styles.mobileNavSection}`} href="#skills">
            <li>Skills</li>
          </a>
        </div>
        <div className={`${styles.mobileNavComicStyle}`}>
          <a className={`${styles.mobileNavSection}`} href="#projects">
            <li>Projects</li>
          </a>
        </div>
        <div className={`${styles.mobileNavComicStyle}`}>
          <a className={`${styles.mobileNavSection}`} href="#contact">
            <li>Contact</li>
          </a>
        </div>
      </ul>
    </nav>
  );
  return (
    <div className={`${styles.hamburgerMenu}`} onClick={toggleBurger}>
      <div className={`${styles.burgerlines}  ${isOpen ? styles.isOpen : ''}`}>
        <div className={`${styles.line} ${styles.top} `}></div>
        <div className={`${styles.line} ${styles.mid} `}></div>
        <div className={`${styles.line} ${styles.bot} `}></div>
      </div>
      {isOpen ? mobileNavbar : null}
    </div>
  );
}

export default HamburgerMenu;
