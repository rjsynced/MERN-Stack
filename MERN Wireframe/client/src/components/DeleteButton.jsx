import React from 'react'
import axios from "axios";

function DeleteButton(props) {

    const { itemId, successCallback } = props;

    const deleteItem = (e) => {
        axios.delete(`http://127.0.0.1:8000/api/items/${itemId}/delete`)
            // .then(res => console.log(res))
            .then(res => {successCallback();})
            .catch(err => console.log(err))
    }
    return (
            <button onClick={deleteItem} type="button" className="btn btn-danger">Checkout Item</button>
    )
}

export default DeleteButton