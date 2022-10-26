import {useState} from 'react'
import './App.css'
import BoxDisplay from './Components/BoxDisplay';
import BoxForm from './Components/BoxForm';

function App() {
  const [boxes, setBoxes] = useState([]);
  const addBox = (box) => {
    setBoxes([...boxes, box]);
  }
  const boxElements = boxes.map(box => <BoxDisplay color={ box.color }/>)
  console.log(boxes)
  return (
    <div className="App">
      <BoxForm handleSubmit={ addBox }/>
      { boxElements }
    </div>
  )
}

export default App
// list of objects that keep in state
// everytime 