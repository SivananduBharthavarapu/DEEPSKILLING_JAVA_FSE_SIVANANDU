import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };

  decrementCount = () => {
    this.setState(prev => ({ count: prev.count - 1 }));
  };

  sayHello = () => {
    alert("Hello! You clicked the increment button.");
  };

  handleIncrement = () => {
    this.incrementCount();
    this.sayHello();
  };

  sayWelcome = (message) => {
    alert(`Welcome message: ${message}`);
  };

  handleSynthetic = (event) => {
    alert("I was clicked");
    console.log("Synthetic Event:", event);
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
        <br /><br />
        <button onClick={() => this.sayWelcome("Welcome to the Event App")}>Say Welcome</button>
        <br /><br />
        <button onClick={this.handleSynthetic}>Synthetic Event</button>
      </div>
    );
  }
}

export default Counter;
