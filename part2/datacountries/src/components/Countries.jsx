import Country from './Country'

const Countries = ({search, countries, countryToShow, handleClickShowCountry}) => {

    if (search === '') {
        return null
    }

    const filteredCountries = countries.filter((c) => c.name.common.toLowerCase().includes(search))
    
    if (filteredCountries.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }

    if (filteredCountries.length === 1) {
        return (
            <Country country={filteredCountries[0]} />
        )
    }

    if (countryToShow != null) {
        const country = filteredCountries.find((c) => c.name.common === countryToShow)

        return (
            <Country country={country}  />
        )
    }

    return (
        <div>
            {filteredCountries.map((c) => (
                <p key={c.name.common}>{c.name.common} <button value={c.name.common} onClick={handleClickShowCountry}>Show</button></p>
            ))}
        </div>
    )
}

export default Countries