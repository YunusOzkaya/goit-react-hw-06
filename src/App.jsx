import ContactsForm from './components/ContactsForm/ContactsForm.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>İletişim Kitabı</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
