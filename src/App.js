import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet';

function App() {
  return (
    <div className="App App-header">
      <Greet
      how="Morning"
      />
      <Greet whom='Cthulu' how="Salutations" />
    </div>
  );
}

export default App;
// Is there a way to catch for wrong values or value types with default values?

