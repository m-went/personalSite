import styles from './ComicDialog.module.scss';
import DialogBox from '../../molecules/DialogBox/DialogBox';
import UserIcon from '../../atoms/UserIcon/UserIcon';
import { useState } from 'react';

function ComicDialog(props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isGreetingOpen, setIsGreetingOpen] = useState(true);
  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  if (isDialogOpen) {
    return <DialogBox closeDialog={closeDialog} />;
  } else {
    return (
      <div className={`${styles.comicDialogOpener}`}>
        {isGreetingOpen ? (
          <div className={`${styles.dialogGreetings}`}>
            <p className={`${styles.text}`}>
              Hi! If You click on my photo, You'll be able to get answers for some questions!
            </p>
            <button
              className={`${styles.greetingButton}`}
              onClick={() => {
                setIsGreetingOpen(false);
              }}
            >
              <span>Ok, got it!</span>
            </button>
          </div>
        ) : null}
        <div onClick={() => setIsDialogOpen(true)}>
          <UserIcon purpose={'dialogOpener'} />
        </div>
      </div>
    );
  }
}

export default ComicDialog;
