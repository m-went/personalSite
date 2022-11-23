import styles from './Navbar.module.scss';

function Navbar(props) {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>AboutMe</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div></div>
    </nav>
  );
}

export default Navbar;
