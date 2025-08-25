import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice.js';
import Contact from '../Contact/Contact.jsx';
import styles from './ContactList.module.css';

export default function ContactList() {
  const items = useSelector(selectFilteredContacts);
  if (!items.length) return <p className={styles.empty}>Kayıt yok.</p>;
  return (
    <ul className={styles.list}>
      {items.map((c) => (
        <li key={c.id} className={styles.item}>
          <Contact contact={c} />
        </li>
      ))}
    </ul>
  );
}
