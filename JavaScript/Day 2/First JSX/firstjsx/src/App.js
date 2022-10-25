import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Hello Dojo!</h1>
      <h2>Things I need to do:</h2>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt. Everst</li>
        <li>Run a Marathon</li>
        <li>Feed the dogs</li>
      </ul>
    </div>
  );
}

export default App;
