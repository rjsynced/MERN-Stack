import React from 'react'
import axios from "axios";

function DeleteButton(props) {

    const { pirateId, successCallback } = props;

    const deleteProduct = (e) => {
        axios.delete(`http://127.0.0.1:8000/api/pirates/${pirateId}/delete`)
            // .then(res => console.log(res))
            .then(res => {successCallback();})
            .catch(err => console.log(err))
    }
    return (
            <button onClick={deleteProduct}>Walk the Plank</button>
    )
}

export default DeleteButton