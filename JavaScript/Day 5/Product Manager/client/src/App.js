import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './views/Main';
import ViewDetails from './views/ProductDetails';
import ProductUpdate from './views/ProductUpdate';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route element={<Main/>} path="/" />
          <Route element={<ViewDetails/>} path="/products/:id" />
          <Route element={<ProductUpdate />} path="/products/:id/edit" />
        </Routes>
    </div>
  );
}

export default App;
