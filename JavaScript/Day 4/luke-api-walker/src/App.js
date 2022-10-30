import './App.css';
import { Route, Routes } from 'react-router-dom'
import LukeApiForm from './components/LukeApiForm';
import People from './components/People';
import Planets from './components/Planets';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <LukeApiForm />
      <main>
        <Routes>
          <Route path="/people/:id" element={ <People />} />
          <Route path="/planets/:id" element={ <Planets />} />
          <Route path="/Error" element={ <Error /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
