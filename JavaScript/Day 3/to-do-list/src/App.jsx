import React, { useState } from 'react'
import './App.css'
import ListForm from './Components/ListForm'
import DisplayList from './Components/DisplayList';

function App() {
  const [msgs, setMsgs] = useState([]);
  const addMsg = (msg) => {
    setMsgs([...msgs, msg]);
  }
  
  const deleteMsg = (targetitemindex) => {
    setMsgs(msgs.filter((msg, index) => index !== targetitemindex))
  }
  const toggleMsg = (targetitemindex) => {
    const updatedMsgs = msgs.map((msg, i) => {
      if ( targetitemindex === i) {
        msg.completed = !msg.completed;
        // const updatedMsg = {...msg, complete: !msg.complete};
        // return updatedMsg;
      }
      return msg;
    });
    setMsgs(updatedMsgs);
  }

  const msgElements = msgs.map((msg, index) => <DisplayList toggleMsg={toggleMsg}  deleteMsg={deleteMsg} index={index} completed={msg.completed} msg={msg.message}/>)

  return (
    <div className="App">
      <ListForm handleSubmit={ addMsg }/>
      {msgElements}
    </div>
  );
}

export default App
