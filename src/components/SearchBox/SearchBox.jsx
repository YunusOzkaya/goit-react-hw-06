import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice.js';
import styles from './SearchBox.module.css';

export default function SearchBox() {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  return (
    <input
      className={styles.input}
      placeholder="Ara..."
      value={value}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
    />
  );
}
