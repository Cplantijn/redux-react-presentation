import React, { Component } from 'react';
import Article from './Article';

export default class SlideSix extends Component {
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
        <Article order={0} articleNumber={articleNumber}>
          <h1>{'What\'s Redux?'}</h1>
        </Article>
        <Article order={1} articleNumber={articleNumber}>
          <ul className="no-bullets features-list">
            <li>{'Redux is a state-management library that manages your application\'s state'}.</li>
          </ul>
        </Article>
        <Article order={2} articleNumber={articleNumber}>
          <h2 className="text-center">Redux Principles</h2>
          <ul className="no-bullets features-list">
          <Article order={3} articleNumber={articleNumber}>
            <li>{'Redux keeps your application\'s state in single store.'}</li>
          </Article>
          <Article order={4} articleNumber={articleNumber}>
            <li>{'The state is immutable and read-only.'}</li>
          </Article>
          <Article order={5} articleNumber={articleNumber}>
            <li>{'The state can only be modified via actions emmitted by the dispatcher.'}</li>
          </Article>
          <Article order={6} articleNumber={articleNumber}>
            <li>{'A new state is created after every action, via pure reducers.'}</li>
          </Article>
          </ul>
        </Article>
      </div>
    );
  }
}
