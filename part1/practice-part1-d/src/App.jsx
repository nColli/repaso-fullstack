import { useState } from "react"

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const History = (props) => {
  let text = ''
  if ( props.allClicks.length === 0 ) {
    text = 'The app is used by pressing the buttons'
  } else {
    text = props.allClicks.join(' ')
  }

  return (
    <h3>{text}</h3>
  )
}

const App = () => {
  const [ left, setLeft ] = useState(0)
  const [ right, setRight ] = useState(0)
  const [ allClicks, setAllClicks ] = useState([]) 
  const [ total, setTotal ] = useState(0)

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
    setAllClicks(allClicks.concat('L')) //concat no muta el array allClciks, devuelve una copia con el elem agregado
    //como el estado de los componentes no se debe modificar directamente, no uso push
    
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    //setTotal(left + right) <- no funciona xq la actualización del estado es asincrona, se renderiza en algun momento antes de que el componnete se renderecide de nuevo
    setTotal(updatedLeft + right)
  }

  const handleRight = () => {
    console.log('handling right...');
    setAllClicks(allClicks.concat('R'))

    const updatedRight = right + 1
    setRight(updatedRight)
    //setTotal(right + left)
    setTotal(updatedRight + left)
  }
  
  return (
    <div>
      <h3>{left}</h3>
      <Button text='left' onClick={handleLeft} />
      <Button text='right' onClick={handleRight} />
      <h3>{right}</h3>
      <History allClicks={allClicks} />
      <h2>Total: {total}</h2>
    </div>
  )
}

export default App