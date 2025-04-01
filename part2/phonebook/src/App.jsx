import { useState } from "react";

const Persons = ({persons}) => (
  <div>
    {persons.map( (person) => <p key={person.name}>{person.name}</p> )}
  </div>
)

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  /*
  const isNameIncluded = () => {
    const inc = persons.find((person) => person.name === newName)

    console.log('isNameIncluded', inc);

    return !(inc === undefined)
  }*/

  //no utilizo includes xq obj son distintos aunque tengan mismas caracteristicas
  const isNameIncluded = () => !(undefined === persons.find( (x) => x.name === newName ))

  const addName = (event) => {
    event.preventDefault()

    if (isNameIncluded()) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const nameObject = {
        name: newName
      }

      setPersons(persons.concat(nameObject))
    }

    setNewName('')
  }

  const handleNameChange = (event) => setNewName(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App