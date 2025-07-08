import styles from "../styles/SearchBar.module.css";
import { useCountries } from "../contexts/CountryApi";

function SearchBar() {
  const { handleSearch } = useCountries();

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search by Name,Region..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
