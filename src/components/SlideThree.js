import React, { Component } from 'react';

export default class SlideThree extends Component {
  render() {
    const { slideOrder, slideNumber, bgColor } = this.props;
    const style = {
      backgroundColor: bgColor || '#125E8A'
    }
    const slideCls = classnames({
      'slide': true,
      'active': slideNumber === slideOrder,
      'next': slideNumber === (slideOrder - 1),
      'prev': slideNumber === (slideOrder + 1)
    });

    return (
      <div style={style} className={slideCls}>
        <h1>Slide Three</h1>
      </div>
    );
  }
}
