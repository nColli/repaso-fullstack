import axios from 'axios'
const baseUrl = "http://localhost:3001/persons"

const getAll = () => (
    axios
        .get(baseUrl)
        .then(response => response.data)
)

const create = newPerson => (
    axios
        .post(baseUrl, newPerson)
        .then(response => response.data)
)
/* Versión 1:
const remove = id => {
    const url = `${baseUrl}/${id}`
    const request = axios.delete(url)
    console.log(request)

    const data = request.then((req) => req.data)
    
    return data
}*/
//Versión 2 - optimizada
const remove = id => (
    axios
        .delete(`${baseUrl}/${id}`)
        .then((request) => request.data)
)

export default { getAll, create, remove }