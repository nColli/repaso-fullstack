import axios from 'axios'

const api_key = import.meta.env.VITE_SOME_KEY

const get = (lat, lng) => (
    axios
          .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}`)
          .then((response) => response.data)
          .catch(error => console.log('error'))
)

export default {get}