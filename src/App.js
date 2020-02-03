import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Counter from './Counter';

function App() {
  return (
    <div className="App App-header">
      <Counter value={10} changeBy={2} />
      <Counter value={5} changeBy={4} />


      <Greet
      how="Morning"
      />
      <Greet whom='Cthulu' how="Salutations" />
    </div>
  );
}

export default App;
// Is there a way to catch for wrong values or value types with default values?

