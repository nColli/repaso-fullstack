import { useState } from "react";

const Persons = ({persons, newSearch}) => {
  const newSearchLowString = newSearch.toLowerCase()

  const personsToShow = persons.filter( (x) => x.name.toLowerCase().includes(newSearchLowString) )

  return (
    <div>
      {personsToShow.map( (person) => <p key={person.id}>{person.name} {person.number}</p> )}
    </div>
  )
}

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

  //no utilizo includes xq obj son distintos aunque tengan mismas caracteristicas
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
      <div>
        filter shown with <input value={newSearch} onChange={handleSearchChange}/>
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} newSearch={newSearch}/>
    </div>
  )
}

export default App