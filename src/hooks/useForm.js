import { useState } from 'react';

function useForm(initialVal = { email: '', name: '', message: '' }) {
  const emptyForm = { email: '', name: '', message: '' };
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [mail, setMail] = useState(emptyForm);

  const validationMessages = { emailError, messageError };

  const handleInputChange = (e) => {
    setMail({
      ...mail,
      [e.target.name]: e.target.value,
    });
  };

  const resetInputs = () => {
    setMail(emptyForm);
  };

  const validateForm = (formData) => {
    const isMailValid = validateMail(formData.email);
    const isMessageValid = validateMessage(formData.message);
    if (isMailValid && isMessageValid) {
      return true;
    } else {
      return false;
    }
  };

  const validateMail = (input) => {
    if (input.length) {
      const regex =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      const match = input.match(regex);
      if (match !== null && input === match[0]) {
        setEmailError('');
        return true;
      } else {
        setEmailError('Invalid email address');
        return false;
      }
    } else {
      setEmailError('Field required');
      return false;
    }
  };

  const validateMessage = (input) => {
    if (input.length) {
      setMessageError('');
      return true;
    } else {
      setMessageError('Field required');
      return false;
    }
  };

  return { mail, validationMessages, handleInputChange, resetInputs, validateForm };
}

export default useForm;
