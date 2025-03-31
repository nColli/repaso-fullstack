import { useState } from "react"

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [ left, setLeft ] = useState(0)
  const [ right, setRight ] = useState(0)

  //guardado en forma de objeto
  /*
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  
  const handleLeftClick = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right
    }

    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1
    }

    setClicks(newClicks)
  }
  */
  const handleLeft = () => {
    console.log('handling left...');
    setLeft(left + 1)
  }

  const handleRight = () => {
    console.log('handling right...');
    setRight(right + 1)
  }
  
  return (
    <div>
      <h4>{left}</h4>
      <Button text='left' onClick={handleLeft} />
      <Button text='right' onClick={handleRight} />
      <h4>{right}</h4>
    </div>
  )
}

export default App