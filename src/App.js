import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from './actions'
import './App.css';

function App() {
  
const count = useSelector (state=>state);
let dispatch = useDispatch();

return (
  <div>
      <h1>counter {count}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
