import { createContext, useContext, useEffect, useState } from "react";
const BASE_URL =
  "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,maps,area,independent,unMember,cca2";
const CountryContext = createContext();

function CountryProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [selectedSort, setSelectedSort] = useState("population");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [region, setRegion] = useState();
  const [isIndependent, setIndependent] = useState(false);
  const [isMember, setIsMember] = useState(false);

  useEffect(function () {
    async function getCountries() {
      try {
        const res = await fetch(`${BASE_URL}`);
        if (!res.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data = await res.json();
        setCountries(data);
        setFilteredCountries(data);
      } catch (err) {
        throw new Error(err);
      }
    }
    getCountries();
  }, []);

  function handleSearch(receivedQuery) {
    setSearchQuery(() => receivedQuery);
    const filteredData = countries.filter((country) =>
      country.name.common.toLowerCase().includes(receivedQuery.toLowerCase())
    );
    setFilteredCountries(() => filteredData);
  }

  function handleRegion(receivedRegion) {
    if (!receivedRegion) return;
    if (receivedRegion === region) {
      setFilteredCountries(countries);
    } else {
      setRegion(receivedRegion);
      const filteredRegion = [...countries].filter((country) =>
        country.region.toLowerCase().includes(receivedRegion.toLowerCase())
      );
      setFilteredCountries(filteredRegion);
    }
  }
  function handleSortChange(sortby) {
    setSelectedSort(() => sortby.toLowerCase());
  }

  const sortedCountries = filteredCountries
    .filter(
      (country) =>
        //tenary operator
        (!isIndependent || country.independent) &&
        (!isMember || country.unMember)
    )
    .sort((a, b) => {
      if (selectedSort === "name") {
        return a.name.common.localeCompare(b.name.common);
      } else {
        return b[selectedSort] - a[selectedSort];
      }
    })
    .slice(0, 10);

  return (
    <CountryContext.Provider
      value={{
        sortedCountries,
        handleSortChange,
        handleSearch,
        handleRegion,
        isMember,
        isIndependent,
        setIsMember,
        setIndependent,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

function useCountries() {
  const context = useContext(CountryContext);
  if (context === undefined)
    throw new Error("The Context was used outside the scope");
  return context;
}
export { useCountries, CountryProvider };
