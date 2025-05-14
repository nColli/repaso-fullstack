require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const Note = require('./models/note')

//Custom middleware
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method);
  console.log('Path:', request.path);
  console.log('Body:', request.body);
  console.log('---');
  next()
}

app.use(express.static('dist'))
app.use(express.json())
app.use(requestLogger)
app.use(cors())


app.get('/', (request, response) => {
    response.send('<h1>Hello world</h1>')
})

app.post('/api/hooks', (request, response) => {
  console.log('hook body', request.body);
  
  response.status(200).end()
})

app.get('/api/notes', (request, response) => {
    Note
        .find({})
        .then(note => {
            response.json(note)
        })
})

app.get('/api/notes/:id', (request, response, next) => {
    Note.findById(request.params.id)
        .then((note) => {
            console.log('note from database',note);
            if (note) {
              response.json(note)
            } else {
              response.status(404).end()
            }
        })
        .catch(error => next(error))
})

app.delete('/api/notes/:id', (request, response, next) => {
    Note.findByIdAndDelete(request.params.id)
      .then(result => {
        response.status(204).end()
      })
      .catch(error => next(error))
})

app.post('/api/notes', (request, response, next) => {
    const body = request.body
    
    const note = new Note({
        content: body.content,
        important: body.important || false
    })

    note.save()
      .then(savedNote => { response.json(savedNote) })
      .catch(error => next(error))
})

app.put('/api/notes/:id', (request, response, next) => {
  /*
    const body = request.body
    const id = request.params.id

    const note = {
      content: body.content,
      important: body.important
    }

    Note.findByIdAndUpdate(id, note, { new: true })
      .then(updatedNote => {
        response.json(updatedNote)
      })
      .catch(error => next(error))*/
    const id = request.params.id
    const { content, important } = request.body

    Note.findByIdAndUpdate(
      id, 
      { content, important },
      { new: true, runValidators: true, context: 'query' }
    )
      .then(updatedNote => {
        response.json(updatedNote)
      })
      .catch(error => next(error))
})


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

//Handle request for non-existent routes
const unknownEndpoint = (request, response) => {
  response.status(404).send( { error: 'Unknown endpoint' } )
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.log(error.message);
  
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).send({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)