import { useState } from 'react'

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
}

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]  

  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(anecdotes.map(() => 0)) //inicializo los votos de cada anecdota en 0, el indice indica el nro de anecdota
  console.log(votes);

  const randomNumber = () => getRandomInt(0, anecdotes.length - 1)

  const handleNextAnecdote = () => {
    setSelected(randomNumber())
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    
    setVotes(copy)
  }

  console.log('rendering...',selected);

  const mostVoted = () => {
    let indexMostVoted = 0  

    for (let i = 1; i < votes.length; i++) {
      if (votes[i] > votes[indexMostVoted]) {
        indexMostVoted = i
      }
    }
    
    console.log('index most voted',indexMostVoted);

    return indexMostVoted
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button text='next anecdote' handleClick={handleNextAnecdote} />
      <Button text='vote' handleClick={handleVote} />

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVoted()]}</p>
      <p>has {votes[mostVoted()]} votes</p>
    </div>
  )
}

export default App