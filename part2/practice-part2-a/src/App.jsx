import Note from './components/Note'

const App = ({ notes }) => {

  const result = notes.map(note => note.id) //return array of objects [ {0: 1}, {1: 2}, {2: 3} ]
  console.log(result);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App