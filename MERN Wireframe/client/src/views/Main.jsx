import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ItemList from '../components/ItemList';
import axios from 'axios'

const Main = () => {
    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/items')
            .then(res => {
                setItems(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [items]);

    const removeFromDom = (itemId) => {
        setItems(items.filter((item) => item._id != itemId));
    };

    const createItem = (item) => {
        axios
            .post('http://127.0.0.1:8000/api/items', item)
            .then(
                console.log(item),
                setItems(items => [...items, item]),
                setLoaded(false)
            )
            .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            <div className='header'>
            <h1>Thrifty Shop</h1>
            <Link className='btn btn-primary' to="items/new">Add a new Item</Link>
            </div>
            {loaded && <ItemList items={items} removeFromDom={removeFromDom}/>}
            
        </div>
    )
}

export default Main;