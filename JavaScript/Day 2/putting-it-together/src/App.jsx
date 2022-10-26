import './App.css'
import BirthdayCard from './Components/BirthdayCard'

function App() {
  return (
    <div className="App">
      <BirthdayCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
      <BirthdayCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
    </div>
  )
}

export default App
