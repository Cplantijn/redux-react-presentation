import React, { Component } from 'react';

export default class MyFirstComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increaseCount() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div className="flex column align-middle">
        <button onClick={this.increaseCount.bind(this)}>
          Increment
        </button>
        <h2>The counter is set to {this.state.count}</h2>
      </div>
    )
  }
}
