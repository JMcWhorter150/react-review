import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Counter from './Counter';

// want to move the state of the counters and their behavior into the app. I have to lift state up so that the counters can share state and/or behavior

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      values: [10, 99]
    }
  }


  render () {
    return (
      <div className="App App-header">
        <Counter
        value={this.state.values[0]}
        changeBy={2}
        clickHandler={this._updateValue}
        index={0}
        />
        <Counter
        value={this.state.values[1]}
        changeBy={4}
        clickHandler={this._updateValue}
        index={1}
        />
      </div>
    );
  }

  _updateValue = (index, newValue) => {
    // make a copy of the current values array
    const newValues = [...this.state.values]
    // modify the copy
    newValues[index] = newValue;
    // update state with the new copy
    this.setState({
      values: newValues
    });
  }
}
export default App;
// Is there a way to catch for wrong values or value types with default values?

