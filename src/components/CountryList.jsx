import { Link } from "react-router-dom";
import { useCountries } from "../contexts/CountryApi";
import "../styles/CountryList.css";

function CountryList() {
  const { sortedCountries } = useCountries();
  // const sortedCountries = [...countries]
  //   .sort((a, b) => b.population - a.population)
  //   .slice(0, 10);
  // console.log(sortedCountries);
  return (
    <div className="containerList">
      <div className="header">
        <span>Flag</span>
        <span>Name</span>
        <span>Population</span>
        <span>Area (km²)</span>
      </div>

      {sortedCountries.map((sortedCountry, key) => (
        <Link to={`/country/${sortedCountry.cca2}`} key={sortedCountries.cca2}>
          <div className="row" key={sortedCountry.name.common}>
            <span>
              <img
                src={sortedCountry.flags.png}
                alt={sortedCountry.flags.alt}
              />
            </span>
            <span>{sortedCountry.name.common}</span>
            <span>{sortedCountry.population.toLocaleString()}</span>
            <span>{sortedCountry.area.toLocaleString()}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CountryList;
