import React, { Component } from 'react';
import reduxLogo from '../../assets/redux_bigger.png';


export default class SlideFive extends Component {
  render() {
    const { presentation: { slideNumber, articleNumber }, slideOrder, bgColor, color } = this.props;
    const style = {
      backgroundColor: bgColor || '#125E8A',
      color: color || '#222'
    }

    const slideCls = classnames({
      'slide': true,
      'flex': true,
      'column': true,
      'align-center': true,
      'active': slideNumber === slideOrder,
      'next': slideNumber === (slideOrder - 1),
      'prev': slideNumber === (slideOrder + 1)
    });

    return (
      <div style={style} className={slideCls}>
      <div className="flex column align-center align-middle">
        <div className="flex align-center align-middle">
          <img src={reduxLogo} alt="" />
        </div>
        <h1 style={{ paddingTop: '4rem' }}> Redux: A Predictable State Container </h1>
      </div>
      </div>
    );
  }
}
