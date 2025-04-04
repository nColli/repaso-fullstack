import Weather from "./Weather"

const Country = ({country}) => {

    const countryData = {
        name: country.name.common,
        capital: country.capital[0],
        area: country.area,
        languages: Object.values(country.languages),
        flag: country.flag,
        lat: country.capitalInfo.latlng[0],
        lng: country.capitalInfo.latlng[1]
    }

    const sizeFlag = {
        fontSize: 200
    }

    return (
        <div>
            <h1>{countryData.name}</h1>
            <p>Capital {countryData.capital}</p>
            <p>Area {countryData.area}</p>
            <h2>Languages</h2>
            <ul>
                {countryData.languages.map(
                    (lang) => 
                        <li key={lang}>{lang}</li>
                )}
            </ul>
            <div style={sizeFlag}> {countryData.flag} </div>
            <Weather 
                capital={countryData.capital}
                lat={countryData.lat}
                lng={countryData.lng}
            />
        </div>
    )
}

export default Country