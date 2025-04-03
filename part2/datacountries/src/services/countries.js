import axios from 'axios'

axios.defaults.timeout = 30000
axios.defaults.timeoutErrorMessage='timeout'

const getAll = () => (
    axios
          .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
          .then(request => request.data)
          .catch(error => console.log('timeout'))
)

export default {getAll}