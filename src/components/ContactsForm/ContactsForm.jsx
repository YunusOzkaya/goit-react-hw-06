import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../../redux/contactsSlice.js';
import styles from './ContactsForm.module.css';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmit = (e) => {
    e.preventDefault();
    const exists = contacts.some(
      (c) => c.name.trim().toLowerCase() === name.trim().toLowerCase()
    );
    if (exists) {
      alert('Bu isim zaten kayıtlı.');
      return;
    }
    if (!name.trim() || !number.trim()) return;
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
