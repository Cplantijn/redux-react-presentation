import React, { Component } from 'react';

export default class CounterExample extends Component {
  render() {
    const {
      counter: { value },
      incrementCounter,
      decrementCounter,
      clearCounter
    } = this.props;

    return (
      <div className="flex column align-center">
        <h2>Value of counter: {value}</h2>
        <div className="text-center">
          <button
            onClick={incrementCounter}>
            Increment
          </button>

          <button
            onClick={decrementCounter}>
            Decrement
          </button>

          <button
            onClick={clearCounter}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}
