import { useState, useEffect } from "react";
import weather from "../services/weather"

const Weather = ( { capital, lat, lng } ) => {
    const [ weatherData, setWeatherData ] = useState(null)
    
    useEffect(() => {
        weather
          .get(lat, lng)
          .then((data) => setWeatherData(data))
      }, [])

    if (!weatherData) {
        return null
    }

    const tempCelsius = weatherData.main.temp - 273.15
    const iconCode = weatherData.weather[0].icon 
    const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
    const weatherDescription = weatherData.weather[0].description
    const wind = weatherData.wind.speed
   
    return (
        <div>
            <h2>Weather in {capital} </h2>
            <p>Temperature {tempCelsius} Celsius </p>
            <img src={iconURL} alt={weatherDescription} />
            <p>Wind {wind} m/s </p>
        </div>
    )
}

export default Weather