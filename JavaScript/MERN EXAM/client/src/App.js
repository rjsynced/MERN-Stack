import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './views/Main';
import NewMovie from './views/NewMovie';
import NewReview from './views/NewReview';
import ReviewDetails from './views/ReviewDetails';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route element={<Main/>} path="/" />
          <Route element={<NewMovie />} path="/movies/new" />
          <Route element={<NewReview />} path="/movies/:id/reviews/new" />
          <Route element={<ReviewDetails />} path="movies/reviews/:id" />
        </Routes>
    </div>
  );
}

export default App;