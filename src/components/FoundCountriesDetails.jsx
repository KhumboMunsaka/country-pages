import { useCountries } from "../contexts/CountryApi";
import styles from "../styles/FoundCountriesDetails.module.css";

function FoundCountriesDetails() {
  const { sortedCountries } = useCountries();
  //We use the spread operator to avoid mutating the OG array

  return (
    <div className={styles.countriesFound}>
      <p>Showing {sortedCountries.length} countries</p>
    </div>
  );
}

export default FoundCountriesDetails;
