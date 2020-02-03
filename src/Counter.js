import React from 'react';
class Counter extends React.Component {
    constructor(props) {
        // "register" Counter as a normal React.Component
        super(props);
        // Use React.Component's constructor to set up Counter to work with React.

        // The below is commented out because the parent component now controls the "value"

        // this.state = {
        //     value: props.value,
        //     // changeBy: props.changeBy
        // };

        this.state = {
            initialValue: props.value
            // since you need to remember what the original value was, data has to be stored as a state
        }

        // Don't use these here, instead do as a method. Long constructors slow down program

        // this.addbutton = () => {this.setState({
        //     value: this.state.value + this.props.changeBy
        // })}

        // this.subtractbutton = () => {
        //     this.setState({
        //         value: this.state.value - this.props.changeBy
        //     })
        // }

        // this.resetbutton = () => {
        //     this.setState({
        //         value: props.value
        //     })
        // }
    }

    render() {
        return(
        <div>
            <h1>{this.props.value}</h1>
        <button onClick={this._addButton} >{this.props.changeBy}</button>
        <button onClick={this._subtractButton}>-{this.props.changeBy}</button>
            <button onClick={this._resetButton}>Reset</button>
        </div>
        );
    };

    // Write helper functions as arrow functions. Arrow functions retain the correct value of the 'this' keyword

    _addButton = () => {
        this.props.clickHandler(this.props.changeBy);
        // this is removed because the parent element has this
        // this.setState({
        //     value: this.props.value + this.props.changeBy
        // })
      }
    
      _subtractButton = () => {
        this.props.clickHandler((this.props.changeBy * -1));
        // this is removed by the parent element per above
        // this.setState({
        //     value: this.props.value - this.props.changeBy
        // })
      }
    
      _resetButton = () => {
        this.props.resetValue();
        // this.setState({
        //     value: this.props.value
        // })
    }
}
// let Counter = () => {
//     let value = 1;
//     return (
//         <div>
//             <h1>{value}</h1>
//         </div>
//     );
// }

export default Counter;