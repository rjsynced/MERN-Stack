import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const LukeApiForm = () => {
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        option: 'people',
        id: ''
});

    const onChangeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        navigate(`/${formState.option}/${formState.id}`);
    }

    return (
        <div>
            <form onSubmit={onHandleSubmit}>
                <label>Search For: </label>
                <select name='option' value={formState.option}  onChange={ onChangeHandler }>
                    <option value='people'>People</option>
                    <option value='planets'>Planets</option>
                </select>
                <label>ID: </label>
                <input name='id' value={formState.id} type='number' onChange={ onChangeHandler } />
                <button>Search</button>
            </form>
        </div>
    )
}

export default LukeApiForm