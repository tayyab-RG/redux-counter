import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, double, reset} from './actions'

function App() {
  let counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
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
        <div id="counter">
          Hello World!
          Counter : {counter}
        </div>
        <div id="btns">
          <button onClick={() => dispatch(increment())}> INC </button>
          <button onClick={() => dispatch(decrement())}> DEC </button>
          <button onClick={() => dispatch(double())}> *2 </button>
          <button onClick={() => dispatch(reset())}> RES </button>
        </div>
        
      </header>
      
    </div>
  );
}

export default App;
