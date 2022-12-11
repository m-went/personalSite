import styles from './HamburgerMenu.module.scss';

function HamburgerMenu({ isOpen, toggleBurger }) {
  const mobileNavbar = (
    <nav className={`${styles.mobileNavbar}`}>
      <ul className={`${styles.mobileNavList}`}>
        <a className={`${styles.mobileNavSection}`} href="#home">
          <li>Home</li>
        </a>
        <a className={`${styles.mobileNavSection}`} href="#about-me">
          <li>About me</li>
        </a>
        <a className={`${styles.mobileNavSection}`} href="#skills">
          <li>Skills</li>
        </a>
        <a className={`${styles.mobileNavSection}`} href="#projects">
          <li>Projects</li>
        </a>
        <a className={`${styles.mobileNavSection}`} href="#contact">
          <li>Contact</li>
        </a>
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
