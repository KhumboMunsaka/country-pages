import { useCountries } from "../contexts/CountryApi";
import styles from "../styles/SortingTab.module.css";

function SortingTab() {
  const { handleSortChange } = useCountries();
  return (
    <div className={styles.sortingContainer}>
      <p>Sort By</p>
      <select
        className={styles.dropdown}
        onChange={(e) => handleSortChange(e.target.value)}
      >
        <option>Population</option>
        <option>Name</option>
        <option>Area</option>
      </select>
    </div>
  );
}

export default SortingTab;
