import styles from './HamburgerMenu.module.scss';

function HamburgerMenu({ isOpen, toggleBurger }) {
  return (
    <div className={`${styles.hamburgerMenu}`} onClick={toggleBurger}>
      <div className={`${styles.burgerlines}  ${isOpen ? styles.isOpen : ''}`}>
        <div className={`${styles.line} ${styles.top} `}></div>
        <div className={`${styles.line} ${styles.mid} `}></div>
        <div className={`${styles.line} ${styles.bot} `}></div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
