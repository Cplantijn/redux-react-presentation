import React, { Component } from 'react';
import classnames from 'classnames';

export default class SlideOne extends Component {
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
        <div>
          <h1>Slide One</h1>
        </div>
      </div>
    );
  }
}
