import styles from './UserIcon.module.scss';

function UserIcon({ user }) {
  return <div className={`${user === 'guest' ? styles.guestIcon : ''} ${styles.Icon}`}></div>;
}

export default UserIcon;
