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
      <div>
        <h3>Value of counter: {value}</h3>

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
    );
  }
}
