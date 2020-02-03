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
      values: [10, 99],
      initialValues: [10, 99],
      changeBy: [2, 4]
    }
  }


  render () {
    return (
      <div className="App App-header">

        { // to map through states to create components
          this.state.values.map((num, i) => {
            return (
            <Counter
              key={index}
              value={num}
              changeBy={this.state.changeBy[i]}
              clickHandler={this._updateValues}
              resetValue={this._resetValue}
            />)
          })

        }
      </div>
    );
  }

  _updateValue = (index, newValue) => {
    // make a copy of the current values
    let newValues = [...this.state.values];
    // modify the values
    newValues[index] = newValue;
    // update the state with a new copy
    this.setState({
      values: newValues
    })
  }

  _updateValues = (modifyAmount) => {
    // make a copy of the current values array and modify the copy
    const newValues = this.state.values.map(num => num + modifyAmount);
    // update state with the new copy
    this.setState({
      values: newValues
    });
  }

  _resetValue = () => {
    this.setState({
      values: this.state.initialValues
    })
  }
}
export default App;
// Is there a way to catch for wrong values or value types with default values?

