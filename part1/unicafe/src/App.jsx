import { useState } from 'react'

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value}) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  )
}


const Statistics = ({good, neutral, bad}) => {
  const getLenght = () => {
    return good + neutral + bad
  }
  const length = getLenght()

  if (length == 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  const getAverage = () => {
    return (good - bad) / length
    
  }

  const getPositive = () => {  
    return ((good) / length * 100 ) + ' %'
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='average' value={getAverage()} />
        <StatisticLine text='positive' value={getPositive()} />
      </table>
    </div>
  )
}

const App = () => {
  // clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {setGood(good + 1)}
  const handleNeutral = () => {setNeutral(neutral + 1)}
  const handleBad = () => {setBad(bad + 1)}

  console.log('rendering...', good, neutral, bad);

  

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={'good'} onClick={handleGood} />
      <Button text={'neutral'} onClick={handleNeutral} />
      <Button text={'bad'} onClick={handleBad} />

      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App