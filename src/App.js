/*import logo from './logo.svg';
import './App.css';
*/
import React, {useState } from 'react' 

const App = () =>{
  const [counter, setCounter] = useState(0)

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <button onClick={incrementCounter}> increment</button>
      {counter}
      <p> hello class</p>
    </div>

  )
}

export default App

/*function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Hello 02363 class
        </p>
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
      </header>
    </div>
  );
}
*/
