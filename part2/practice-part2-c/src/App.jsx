import { useState, useEffect } from 'react';
import axios from 'axios'
import Note from './components/Note'

const App = () => {
  const [ notes, setNotes ] = useState([])
  const [ newNote, setNewNote ] = useState('')
  const [ showAll, setShowAll ] = useState(true)

  const hook = () => {
    console.log('effect');

    axios
      .get("http://localhost:3001/notes")
      .then(response => {
        console.log('promise fulfilled');
        setNotes(response.data)
      })
  }

  useEffect(hook, []) //hook es el efecto, [] indica que solo se ejecute el efecto junto con el primer render
  //x default el efecto siempre se ejecuta despues de cada renderizado completo, en este caso solo 1 vez

  console.log('render', notes.length, 'notes');
  

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1
    }

    setNotes(notes.concat(noteObject)) //concat crea una nueva copia de la matriz con el elem agregado al final
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter( (note) => note.important )
  

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange} 
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App