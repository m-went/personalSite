import UserIcon from '../../atoms/UserIcon/UserIcon';
import TextBox from '../../atoms/TextBox/TextBox';
import styles from './DialogBox.module.scss';
import QandA from '../../../assets/data/questionsAndAnswers';

function DialogBox(props) {
  return (
    <div>
      <div className={`${styles.guest}`}>
        <TextBox user="guest" />
        <UserIcon user="guest" />
      </div>
      <UserIcon />
      <TextBox />
    </div>
  );
}

export default DialogBox;
