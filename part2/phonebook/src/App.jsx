import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

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

  const isNameIncluded = () => !(undefined === persons.find( (x) => x.name === newName ))

  const addPerson = (event) => {
    event.preventDefault()

    if (isNameIncluded()) {
      alert(`${newName} is already added to phonebook`)
    } else {
      
      const nameObject = {
        name: newName,
        number: newNumber
      }
      
      personService
        .create(nameObject)
        .then( (p) => setPersons(persons.concat(p)) )
    }

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => setNewName(event.target.value)

  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleSearchChange = (event) => setNewSearch(event.target.value)

  const handleDelete = (person) => {
    if (window.confirm(`Detete ${person.name} ?`)) {
      personService
        .remove(person.id)
        .then((personToDel) => setPersons( persons.filter( (p) => p.id !== personToDel.id) ) )
    }
  } 

  return (
    <div>
      <h2>Phonebook</h2>

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