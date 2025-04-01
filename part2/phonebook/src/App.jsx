import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

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

      <Persons persons={persons} newSearch={newSearch}/>
    </div>
  )
}

export default App