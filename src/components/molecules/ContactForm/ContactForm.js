import styles from './ContactForm.module.scss';
import axios from 'axios';
import { useState } from 'react';
import Error from '../../atoms/Error/Error';
import useForm from '../../../hooks/useForm';
import SuccessInfo from '../../atoms/SuccessInfo/SuccessInfo';

function ContactForm(props) {
  const emptyForm = { email: '', name: '', message: '' };
  const { mail, validationMessages, handleInputChange, resetInputs, validateForm } = useForm(emptyForm);
  const [isSendError, setIsSendError] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const showSuccessMessage = () => {
    setIsMessageSent(true);
    setTimeout(() => {
      setIsMessageSent(false);
    }, 10000);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm(mail);
    if (isFormValid) {
      try {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        await axios.post('https://formsubmit.co/ajax/wentmichal@gmail.com', {
          name: mail.name,
          email: mail.email,
          message: mail.message,
        });
        showSuccessMessage();
      } catch (e) {
        setIsSendError(true);
      }
      resetInputs();
    }
  };

  return (
    <form onSubmit={sendEmail} className={styles.contactForm} noValidate>
      <label htmlFor="email">Your email:</label>
      <input type="email" name="email" id="email" value={mail.email} onChange={handleInputChange} required />
      {validationMessages.emailError ? (
        <div className={`${styles.errorMessage}`}>
          <div className={`${styles.errorInfo}`}>
            <p className={`${styles.validationError}`}>{`${validationMessages.emailError}`}</p>
          </div>
          <div className={`${styles.exclamationIcon}`}>
            <div className={`${styles.exclamation}`}></div>
            <div className={`${styles.exclamationDot}`}></div>
          </div>
        </div>
      ) : null}
      <label htmlFor="name">Your name:</label>
      <input type="text" name="name" id="name" value={mail.name} onChange={handleInputChange} />
      <label htmlFor="message">Message:</label>
      <textarea
        name="message"
        id="message"
        cols="50"
        rows="15"
        value={mail.message}
        onChange={handleInputChange}
        required
      />
      {validationMessages.messageError ? (
        <div className={`${styles.errorMessage}`}>
          <div className={`${styles.errorInfo}`}>
            <p className={`${styles.validationError}`}>{`${validationMessages.messageError}`}</p>
          </div>
          <div className={`${styles.exclamationIcon}`}>
            <div className={`${styles.exclamation}`}></div>
            <div className={`${styles.exclamationDot}`}></div>
          </div>
        </div>
      ) : null}
      <button className={`${styles.formButton}`} type="submit">
        <span>Send me a message</span>
      </button>
      {isSendError ? <Error /> : null}
      {isMessageSent ? <SuccessInfo /> : null}
    </form>
  );
}

export default ContactForm;
