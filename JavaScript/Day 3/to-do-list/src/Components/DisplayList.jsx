import React, { useState } from 'react'

const DisplayList = (props) => {

    const deleteMsg = (e) => {
        props.deleteMsg(e)
    }

    const toggleMsg = (e) => {
        props.toggleMsg(e)
    }

    return (
        <div>
            <div>
                <p className={props.completed.toString()}>{props.msg}</p>
            </div>
            <div>
                <input type="checkbox" name="complete" onChange={() => toggleMsg(props.index)}/>
            </div>
            <div>
                <button onClick={() => deleteMsg(props.index)}>Delete</button>
            </div>
        </div>
    )
}

export default DisplayList