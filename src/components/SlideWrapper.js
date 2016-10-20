import React, { Component } from 'react';

export default class SlideWrapper extends Component {
  render() {
    return (
      <div className="slide-container">
        {this.props.children}
      </div>
    );
  }
}
