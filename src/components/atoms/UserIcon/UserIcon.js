import styles from './UserIcon.module.scss';
import photo from '../../../assets/imgs/Red.jpg';

function UserIcon({ purpose }) {
  if (purpose === 'guestQuestions') {
    return <div className={`${styles.guestIcon} ${styles.Icon}`}></div>;
  } else if (purpose === 'dialogOpener') {
    return (
      <div className={`${styles.MichalIcon}`} style={{ top: '0', left: '0', marginLeft: 'auto' }}>
        {<img src={photo} alt="Person You're talking to" />}
      </div>
    );
  } else {
    return <div className={`${styles.MichalIcon}`}>{<img src={photo} alt="Person You're talking to" />}</div>;
  }
}

export default UserIcon;
