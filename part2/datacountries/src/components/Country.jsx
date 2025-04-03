const Country = ({country}) => {
    console.log(country);

    const name = country.name.common
    const capital = country.capital[0]
    const area = country.area
    const languagesObject = country.languages
    const languages = Object.values(languagesObject) //Array🇱
    const flag = country.flag

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
        </div>
    )
}

export default Country