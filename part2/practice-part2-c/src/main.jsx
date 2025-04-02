import React from 'react'
import ReactDOM from 'react-dom/client'
//import axios from 'axios'

import App from './App'

/*
axios
  .get("http://localhost:3001/notes")
  .then(response => {
    const notes = response.data
    console.log(response.data);

    //renderizo react una vez que tengo las notas
    ReactDOM.createRoot(document.getElementById('root')).render(
      <App notes={notes} />
    )
  })
*/

ReactDOM.createRoot(document.getElementById('root')).render(<App />)