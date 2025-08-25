import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice.js';
import styles from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <span className={styles.name}>{contact.name}</span>
        <span className={styles.number}>{contact.number}</span>
      </div>
      <button className={styles.del} onClick={onDelete}>
        Sil
      </button>
    </div>
  );
}
