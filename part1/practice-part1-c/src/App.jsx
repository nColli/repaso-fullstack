import { useState } from "react"

const Display = ({text}) => <h1>{text}</h1>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)

  const setToZero = () => setCounter(0)

  const decreaseByOne = () => setCounter(counter - 1)

  return (
    <div>
      <Display text={counter} />

      <Button 
        onClick={increaseByOne}
        text={'plus'}
      />

      <Button 
        onClick={setToZero}
        text={'zero'}
      />

      <Button 
        onClick={decreaseByOne}
        text={'minus'}
      />
    </div>
  )
}

export default App