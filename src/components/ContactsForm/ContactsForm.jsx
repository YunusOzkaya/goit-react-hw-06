import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOps.js';
import { selectContacts } from '../../redux/contactsSlice.js';
import styles from './ContactsForm.module.css';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !number.trim()) return;
    const exists = items.some(
      (c) => c.name.trim().toLowerCase() === name.trim().toLowerCase()
    );
    if (exists) return alert('Bu isim zaten var.');
    dispatch(addContact({ name: name.trim(), number: number.trim() }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        className={styles.input}
        placeholder="İsim"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={styles.input}
        placeholder="Telefon"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button className={styles.btn} type="submit">
        Ekle
      </button>
    </form>
  );
}
