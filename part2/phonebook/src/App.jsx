import { useState, useEffect } from "react";
import axios from 'axios'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

  const hook = () => {
    console.log('effect');
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        console.log('promise fulfilled', response.data);
        setPersons(response.data)
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
        id: persons.length + 1,
        name: newName,
        number: newNumber
      }

      setPersons(persons.concat(nameObject))
    }

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => setNewName(event.target.value)

  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleSearchChange = (event) => setNewSearch(event.target.value)

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
      />
    </div>
  )
}

export default App