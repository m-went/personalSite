import styles from './Contact.module.scss';
import ContactForm from '../../molecules/ContactForm/ContactForm';

function Contact(props) {
  return (
    <section id="contact" className={`${styles.contact}`}>
      <h1>Contact me</h1>
      <ContactForm />
    </section>
  );
}

export default Contact;
