import React, { Component } from 'react';
import Article from './Article';

export default class SlideTwo extends Component {
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
      <div id="slide-two" style={style} className={slideCls}>
        <Article order={0} articleNumber={articleNumber}>
          <h1>{'What\'s React?'}</h1>
        </Article>
        <Article flex order={1} articleNumber={articleNumber}>
          <ul className="no-bullets features-list">
          <Article order={1} articleNumber={articleNumber}>
            <li>A Javascript library for building user interfaces</li>
          </Article>
          <Article order={2} articleNumber={articleNumber}>
            <li>Splits the UI into composable and reusable components</li>
          </Article>
          <Article order={3} articleNumber={articleNumber}>
            <li>Works on browser clients, node servers, and iOS/Android (via React Native)</li>
          </Article>
          <Article order={4} articleNumber={articleNumber}>
            <li>Developed for large, data-driven user interfaces</li>
          </Article>
          </ul>
        </Article>
        <Article order={5} articleNumber={articleNumber}>
          <h1>{'Why use it?'}</h1>
        </Article>
        <Article flex order={5} articleNumber={articleNumber}>
          <ul className="no-bullets features-list">
          <Article order={6} articleNumber={articleNumber}>
            <li>Incredibly performant on large applications vs jQuery</li>
          </Article>
          <Article order={7} articleNumber={articleNumber}>
            <li>Little to no code side-effects. Components become incredibly predictable.</li>
          </Article>
          </ul>
        </Article>
      </div>
    );
  }
}
