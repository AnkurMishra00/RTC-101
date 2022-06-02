
import React, {useEffect,useState} from "react";

import './App.css';
import AirbnbExample from "./component/box";
import Todos from "./component/Todos";


function App() {
 
 
  return (
    <div className="App" >
      <Todos />
      <AirbnbExample />
    </div>
  );
}

export default App;

