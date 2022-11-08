import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './views/Main';
import NewItem from './views/NewItem';
import ViewItem from './views/ViewItem';
import UpdateItem from './views/UpdateItem';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path="/" />
        <Route element={<NewItem />} path="/items/new" />
        <Route element={<ViewItem />} path="/items/:id" />
        <Route element={<UpdateItem />} path="/items/:id/edit" />
      </Routes>
    </div>
  );
}

export default App;