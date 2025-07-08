import { useState } from "react";
import { useCountries } from "../contexts/CountryApi";
import styles from "../styles/RegionSorter.module.css";

function RegionSorter() {
  const { handleRegion } = useCountries();
  const [activeRegion, setActiveRegion] = useState(null);

  const regions = [
    "Americas",
    "Antarctic",
    "Africa",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const handleClick = (region) => {
    setActiveRegion(region);
    handleRegion(region);
  };
  return (
    <div className={styles.container}>
      <p className={styles.label}>Region</p>
      <div className={styles.regions}>
        {regions.map((region) => (
          <span
            key={region}
            onClick={() => handleClick(region)}
            className={activeRegion === region ? styles.active : ""}
          >
            {region}
          </span>
        ))}
      </div>
    </div>
  );
}

export default RegionSorter;
