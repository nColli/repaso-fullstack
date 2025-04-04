import Weather from "./Weather"

const Country = ({country}) => {

    const name = country.name.common
    const capital = country.capital[0]
    const area = country.area
    const languagesObject = country.languages
    const languages = Object.values(languagesObject) //Array🇱
    const flag = country.flag
    const lat = country.capitalInfo.latlng[0]
    const lng = country.capitalInfo.latlng[1]

    console.log('lat',lat,'lng',lng);
    

    const sizeFlag = {
        fontSize: 200
    }

    return (
        <div>
            <h1>{name}</h1>
            <p>Capital {capital}</p>
            <p>Area {area}</p>
            <h2>Languages</h2>
            <ul>
                {languages.map(
                    (lang) => 
                        <li key={lang}>{lang}</li>
                )}
            </ul>
            <div style={sizeFlag}> {flag} </div>
            <Weather 
                capital={capital}
                lat={lat}
                lng={lng}
            />
        </div>
    )
}

export default Country