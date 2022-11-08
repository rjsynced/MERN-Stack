import React, {useState} from 'react'
import {NavLink, useNavigate} from 'react-router-dom';
import axios from 'axios';

const PlayerForm = (props) => {
    const {playerList, setPlayerList, stat, setStat, name, setName, position, setPosition} = props;
    const navigate = useNavigate();
    
    
    const [errors, setErrors] = useState([]);
    const handleAdd = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players/addplayer', {
            playerName: name,
            preferredPosition: position,
            playerStatus: stat
        })
        .then((res)=> {
            setPlayerList([...playerList, res.data])
            navigate('/players/list')
        })
        .catch((err)=> {
            //add validation
            console.log(err)
            setErrors(err.response.data.errors)
            console.log(err.response.data.errors)
            
        })
    }


    return (
        <div>
            <div className='border border-dark w-75 mx-auto p-3'>
                <h3>
                    <NavLink to = '/players/list' className= 'marginAdjust'>List</NavLink>
                    |
                    <NavLink to = '/players/addplayer' className= 'marginAdjust'>Add Player</NavLink>
                </h3>

                <h3 className='addPlayerMargin'>Add Player</h3>
                <form onSubmit = {handleAdd} className=' w-25 mx-auto'>
                    <div className='form-group mb-4'>

                        <label>Player Name: </label>
                        

                        <input  className = 'form-control' type='text' value = {name} onChange = {(e)=>{
                            setName(e.target.value)
                        }}></input>
                        {
                            errors.playerName ? <p>{errors.playerName.message}</p>: null
                        }
                        
                    </div>
                    <div className='form-group mb-4'>

                        <label>Preferred Position: </label>
                        <input className = 'form-control' type='text' value = {position} onChange = {(e)=> {
                            setPosition(e.target.value)
                        }}></input>
                    </div>
                    <button className='w-25 btn btn-success'>Add</button>
                </form>
            </div>
        </div>
    );
}

export default PlayerForm;