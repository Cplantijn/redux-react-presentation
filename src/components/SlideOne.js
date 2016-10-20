import React, { Component } from 'react';
import classnames from 'classnames';

import reactLogo from '../../assets/react.png';
import reduxLogo from '../../assets/redux.png';

export default class SlideOne extends Component {
  render() {
    const { presentation: { slideNumber }, slideOrder, bgColor, color } = this.props;
    const style = {
      backgroundColor: bgColor || '#125E8A',
      color: color || '#222'
    }
    const slideCls = classnames({
      'slide': true,
      'flex': true,
      'align-center': true,
      'align-middle': true,
      'active': slideNumber === slideOrder,
      'next': slideNumber === (slideOrder - 1),
      'prev': slideNumber === (slideOrder + 1)
    });


    return (
      <div id="slide-one" style={style} className={slideCls}>
        <div className="flex column align-center align-middle">
          <div className="flex align-center align-middle">
            <img src={reactLogo} alt="" />
            <span className="montserrat" style={{ color: 'white', fontSize: '4rem', padding: '4rem' }}> + </span>
            <img src={reduxLogo} alt="" />
          </div>
          <h1 style={{ paddingTop: '4rem' }}> Introduction to React and Redux </h1>
        </div>
      </div>
    );
  }
}
