import axios from 'axios'
const baseUrl = "http://localhost:3001/api/notes"

const getAll = () => {
    const request = axios.get(baseUrl)

    const nonExisting = {
        id: 10000,
        content: 'This note is not saved to server',
        important: true,
    }

    return request.then(response => response.data.concat(nonExisting))
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data) 
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

/*
El módulo devuelve un objeto que tiene tres funciones 
(getAll, create y update) como
propiedades que se ocupan de las notas. 
Las funciones devuelven directamente las promesas devueltas por los métodos axios.
*/
/*
export default {
    getAll: getAll,
    create: create,
    update: update
}*/
//Version mas limpia (valor y clave del obj es el mismo)
export default { getAll, create, update }

/* ejemplo - quiero crear objeto con igual nombre de clave - valor
const name = 'juan'
const age = 30

const person = { name, age } 
       ====
const person = {
    name: name,
    age: age
}
*/