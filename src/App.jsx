import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps.js';
import { selectLoading, selectError } from './redux/contactsSlice.js';
import ContactsForm from './components/ContactsForm/ContactsForm.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import styles from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Kişi Rehberi</h1>
      <ContactsForm />
      <SearchBox />
      {loading && <p>Yükleniyor...</p>}
      {error && <p className={styles.err}>Hata: {error}</p>}
      <ContactList />
    </div>
  );
}
