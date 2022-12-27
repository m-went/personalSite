import styles from './ComicDialog.module.scss';
import DialogBox from '../../molecules/DialogBox/DialogBox';

function ComicDialog(props) {
  return (
    <div className={`${styles.comicDialog}`}>
      <DialogBox />
    </div>
  );
}

export default ComicDialog;
