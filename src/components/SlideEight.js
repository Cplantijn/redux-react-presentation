import React, { Component } from 'react';

export default class SlideEight extends Component {
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
      'active': slideNumber === slideOrder,
      'next': slideNumber === (slideOrder - 1),
      'prev': slideNumber === (slideOrder + 1)
    });

    return (
      <div style={style} className={slideCls}>
        <h1>Thank You!</h1>
        <h2>Useful Resources</h2>
        <ul className="no-bullets features-list">
          <li>
            React/Redux Starter Kit<br />
            <a target="_blank" href="https://git.jpg.com/cplantijn/react-starter-kit">{'https://git.jpg.com/cplantijn/react-starter-kit'}</a>
          </li>
          <li>
            React Official Docs<br />
            <a target="_blank" href="https://facebook.github.io/react">{'https://facebook.github.io/react'}</a>
          </li>
          <li>
            Redux Official Docs<br />
            <a target="_blank" href="http://redux.js.org">{'http://redux.js.org'}</a>
          </li>
          <li>
            Egghead.io Redux Videos<br />
            <a target="_blank" href="https://egghead.io/courses/getting-started-with-redux">{'https://egghead.io/courses/getting-started-with-redux'}</a>
          </li>
          <li>
            Awesome Redux <br />
            <a target="_blank" href="https://github.com/xgrommx/awesome-redux">{'https://github.com/xgrommx/awesome-redux'}</a>
          </li>
        </ul>
      </div>
    );
  }
}
