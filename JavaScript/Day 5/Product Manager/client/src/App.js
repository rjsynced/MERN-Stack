import './App.css';
import React, {useState, useEffect} from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import { Routes, Route } from 'react-router-dom'
import ProductDetail from './views/ProductDetail';
import axios from 'axios'

function App() {
  const[products, setProducts]=useState([{}])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products')
            .then(res => setProducts(res.data))
            .catch(err=> console.log(err))
    }, [])

  const handleSubmit = (product) => {
    setProducts([...products, product])
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={[ <ProductForm handleSubmit = {handleSubmit}/>, <ProductList products={products}/>]}/>
        <Route path="/:_id" element={[<ProductDetail />]}/>
      </Routes>
    </div>
  );
}

export default App;
