import './App.css';
import React from 'react';
import Bulbon from './Bulbon.js';
import Bulboff from './Bulboff.js';

function App() {
  const [state,usestate]=React.useState('Hello');
  return (
    <div className="App">
      <h1>Welcome to Bulb Page</h1><br></br>
      <button onClick={()=>usestate('True')}>SWITCH ON</button>
      <button onClick={()=>usestate('False')}>SWITCH OFF</button>
      <br></br>
      {(state==='Hello')?usestate('Welcome to my page'):((state==='True')?<Bulbon/>:<Bulboff/>)}
      
    </div>
  );
}

export default App;
