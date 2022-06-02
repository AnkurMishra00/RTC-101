
import { useReducer } from 'react';
import './App.css';

const reducer = (state, {type, payload}) => {
  switch (type){
    case "DECREMENT" : {
      return state - payload;
    }
    case "INCREMENT" : {
      return state + payload;
    }
    default : {
      console.log(type)
      return state;
    }
  }
}


function App() {
const [counter,dispatch] = useReducer(reducer,0)
 
  return (
    <div className="App">
     Counter: {counter}
     <div>
       <button onClick = { () => dispatch({ type: "DECREMENT",payload:1})}>-</button>
       <button onClick = { () => dispatch({ type: "INCREMENT",payload:1})}>+</button>
     </div>
    </div>
  );
}

export default App;
