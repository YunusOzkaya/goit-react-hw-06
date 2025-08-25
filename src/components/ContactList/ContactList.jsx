import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice.js';
import { selectNameFilter } from '../../redux/filtersSlice.js';
import Contact from '../Contact/Contact.jsx';
import styles from './ContactList.module.css';

function filterByName(items, q) {
  const s = q.trim().toLowerCase();
  if (!s) return items;
  return items.filter((c) => c.name.toLowerCase().includes(s));
}

export default function ContactList() {
  const items = useSelector(selectContacts);
  const q = useSelector(selectNameFilter);
  const shown = filterByName(items, q);

  if (!shown.length) {
    return <p className={styles.empty}>Kayıt yok.</p>;
  }

  return (
    <ul className={styles.list}>
      {shown.map((c) => (
        <li key={c.id} className={styles.item}>
          <Contact contact={c} />
        </li>
      ))}
    </ul>
  );
}
