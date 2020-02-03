import React from 'react';
class Counter extends React.Component {
    constructor(props) {
        // "register" Counter as a normal React.Component
        super(props);
        // Use React.Component's constructor to set up Counter to work with React.
        this.state = {
            value: props.value,
            // changeBy: props.changeBy
        };

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
            <h1 className="App-logo">{this.state.value}</h1>
        <button onClick={this._addButton} >{this.props.changeBy}</button>
        <button onClick={this._subtractButton}>-{this.props.changeBy}</button>
            <button onClick={this._resetButton}>Reset</button>
        </div>
        );
    };

    // Write helper functions as arrow functions. Arrow functions retain the correct value of the 'this' keyword
    _addButton = () => {
        this.setState({
            value: this.state.value + this.props.changeBy
        })
    }

    _subtractButton = () => {
        this.setState({
            value: this.state.value - this.props.changeBy
        })
    }

    _resetButton = () => {
        this.setState({
            value: this.props.value
        })
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