import styles from './UserIcon.module.scss';
import photo from '../../../assets/imgs/Red.jpg';

function UserIcon({ user }) {
  if (user === 'guest') {
    return <div className={`${styles.guestIcon} ${styles.Icon}`}></div>;
  } else {
    return <div className={` ${styles.MichalIcon}`}>{<img src={photo} alt="Person You're talking to" />}</div>;
  }
}

export default UserIcon;
