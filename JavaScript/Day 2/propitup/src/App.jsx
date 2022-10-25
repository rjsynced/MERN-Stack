import './App.css'
import PersonCard from './Components/classComponent/PersonCard'

function App() {
  return (
    <div className="App">
    <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
    <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
    <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Red"}/>
    <PersonCard firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Green"}/>
    </div>
  )
}

export default App
