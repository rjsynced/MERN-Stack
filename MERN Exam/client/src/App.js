import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './views/Main';
import NewPirate from './views/NewPirate';
import PirateDetails from './views/PirateDetails';
import UpdatePirate from './views/UpdatePirate';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route element={<Main/>} path="/" />
          <Route element={<NewPirate />} path="/pirates/new" />
          <Route element={<PirateDetails />} path="pirates/:id" />
          <Route element={<UpdatePirate />} path="/pirates/:id/edit" />
        </Routes>
    </div>
  );
}

export default App;
