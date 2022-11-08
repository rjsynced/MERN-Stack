import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const ItemList = (props) => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/items")
            .then((res) => setItems(res.data));
    }, []);

    const removeFromDom = (itemId) => {
        setItems(items.filter((items) => items._id != itemId));
    };

    return (
        <div className='container'>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Item Image</th>
                        <th scope='col'>Product</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.sort(function (a,b) {
                        if (a.brand < b.brand) {
                            return -1;
                        }
                        if (a.brand > b.brand) {
                            return 1;
                        }
                        return 0;
                    }).map((items, index) => {
                        return (
                            <tr key={index}>
                                <td><img src={items.imgUrl} alt="pic" /></td>
                                <td>{items.brand} {items.type}</td>
                                <td>${items.price}</td>
                                <td>
                                    <>
                                        <Link className='btn btn-success' to={`/items/${items._id}`} key={index}>View Item</Link><span>     </span>
                                    </>
                                    <Link className='btn btn-warning' to={`/items/${items._id}/edit`} key={index}>Update Item</Link><span>     </span>
                                    <DeleteButton itemId={items._id} successCallback={() => removeFromDom(items._id)} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ItemList