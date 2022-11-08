import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './views/Main';
import UpdateAuthors from './views/UpdateAuthor';
import ViewAuthors from './views/ViewAuthors';
import NewAuthor from './views/NewAuthor';
import NoAuthors from './views/NoAuthors';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route element={<Main/>} path="/" />
          <Route element={<NewAuthor />} path="/authors/new" />
          <Route element={<NoAuthors/>} path="/error" />
          <Route element={<ViewAuthors />} path="/authors/:id" />
          <Route element={<UpdateAuthors />} path="/authors/:id/edit" />
        </Routes>
    </div>
  );
}

export default App;
