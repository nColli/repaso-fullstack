import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from './services/persons'
import Notification from "./components/Notification";

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')
  const [ message, setMessage ] = useState(null)
  const [ messageIsError, setMessageIsError ] = useState(false)
  const [ file, setFile ] = useState(null)

  const hook = () => {
    //console.log('effect');
    personService
      .getAll()
      .then(persons => {
        //console.log('promise fulfilled', persons);
        setPersons(persons)
      })
  }
  useEffect(hook, [])

  const getPersonWithNewName = () => persons.find( (p) => p.name === newName )

  const updatePersons = (person) => {
    const updatedPersonsList = persons.map( (p) => p.id !== person.id ? p : person )

    setPersons(updatedPersonsList)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const repeatPerson = getPersonWithNewName()

    if (undefined !== repeatPerson) {

      const message = `${repeatPerson.name} is already added to phonebook, replace the old number with a new one?`

      if ( window.confirm( message ) ) {
        const personUpdated = { ...repeatPerson, number: newNumber}

        personService
          .update(personUpdated)
          .then( (p) => {
            updatePersons(p)

            setMessage(`Updated ${p.name}`)
            setTimeout(() => {
              setMessage(null)
            }, 5000)

          } )
          .catch(error => {
            setMessageIsError(true)
            setMessage(`Information of ${personUpdated.name} has already been removed from server`)

            setTimeout(() => {
              setMessage(null)
              setMessageIsError(false)
            }, 5000)
          })
      }

    } else {
      
      const nameObject = {
        name: newName,
        number: newNumber
      }
      
      personService
        .create(nameObject)
        .then( (p) => {
          setPersons(persons.concat(p)) 

          setMessage(`Added ${p.name}`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)

        } )
    }

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => setNewName(event.target.value)

  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleSearchChange = (event) => setNewSearch(event.target.value)

  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
        .remove(person.id)
        .then((personToDel) => setPersons( persons.filter( (p) => p.id !== personToDel.id) ) )
    }
  } 

  const handleChange = (event) => {
    const newFile = event.target.files[0]
    
    setFile(newFile)
    console.log('archivo almacenado', newFile);
  }

  const handleUpload = () => {
    const formData = new FormData()
    formData.append('file', file)
    
    axios.post('/api/upload', formData)
      .then(response => {
        console.log('archivo enviado con exito');
        alert('archivo enviado')
      })
      .catch((error) => {
        console.log('error al enviar el archivo', error);
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message} messageIsError={messageIsError} />

      <input type="file" onChange={handleChange} />
      <br />
      <button onClick={handleUpload}>Subir</button>

      <Filter 
        newSearch={newSearch} 
        handleSearchChange={handleSearchChange} 
      />

      <h3>add a new</h3>

      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons 
        persons={persons} 
        newSearch={newSearch}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App