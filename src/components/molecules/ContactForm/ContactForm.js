import styles from './ContactForm.module.scss';
import axios from 'axios';
import { useState } from 'react';
import Error from '../../atoms/Error/Error';

import useForm from '../../../hooks/useForm';

function ContactForm(props) {
  const emptyForm = { email: '', name: '', message: '' };
  const { mail, validationMessages, handleInputChange, resetInputs, validateForm } = useForm(emptyForm);
  const [isSendError, setIsSendError] = useState(false);

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
      {validationMessages.emailError ? <h3>{`${validationMessages.emailError}`}</h3> : null}
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
      {validationMessages.messageError ? <h3>{`${validationMessages.messageError}`}</h3> : null}
      <button className={`${styles.formButton}`} type="submit">
        Send me a message
      </button>
      {isSendError ? <Error /> : null}
    </form>
  );
}

export default ContactForm;
