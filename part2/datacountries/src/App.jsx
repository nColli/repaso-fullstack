import { useState, useEffect } from "react";
import countries from "./services/countries";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

const App = () => {
  const [ search, setSearch ] = useState('')
  const [ allCountries, setAllCountries ] = useState(null)

  useEffect(() => {
    countries
      .getAll()
      .then(countries => setAllCountries(countries))
  }, [])

  if (!allCountries) {
    return null
  }

  const handleFilter = (event) => setSearch(event.target.value)

  return(
    <div>
      <Filter
        search={search}
        handleFilter={handleFilter}
      />

      <Countries 
        search={search}
        countries={allCountries}
      />
    </div>
  )
}

export default App