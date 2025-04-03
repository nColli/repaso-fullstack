import Country from './Country'

const Countries = ({search, countries}) => {
    //filtrar paises, si tengo mas de 10 mostrar cartel que sea mas especifico, si filtro es nulo, no muestro nada xq todavia no puso nada

    if (search === '') {
        return null
    }

    const filteredCountries = countries.filter((c) => c.name.common.toLowerCase().includes(search))
    
    console.log(filteredCountries.length);
    
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

    return (
        <div>
            {filteredCountries.map((c) => (
                <p>{c.name.common}</p>
            ))}
        </div>
    )
}

export default Countries