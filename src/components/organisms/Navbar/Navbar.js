import styles from './Navbar.module.scss';

function Navbar(props) {
  return (
    <nav className={`${styles.navbar}`}>
      <ul className={`${styles.navList}`}>
        <a className={`${styles.navSection}`} href="#home">
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
      <div></div>
    </nav>
  );
}

export default Navbar;
