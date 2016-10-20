import React, { Component } from 'react';
import Article from './Article';

export default class SlideFour extends Component {
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
      <div id="slide-three" style={style} className={slideCls}>
        <Article order={0} articleNumber={articleNumber}>
          <h1>{'A Few Pro\'s and Con\'s'}</h1>
        </Article>
        <Article order={1} articleNumber={articleNumber}>
          <h2 className="text-center">Pros</h2>
          <ul className="no-bullets features-list">
          <li>Bundling component-level logic to those components increases maintainability.</li>
          <Article order={2} articleNumber={articleNumber}>
            <li>{'Works beautifully with ES6/ES7/\'ES\' + getCurrentYear() syntax.'}</li>
          </Article>
          <Article order={3} articleNumber={articleNumber}>
            <li>Has an awesome developer community with tons of downloadable components, boilerplates, and discussion!</li>
          </Article>
          <Article order={4} articleNumber={articleNumber}>
            <li>{'Makes you feel like you can write any application you want!'}</li>
          </Article>
          <Article order={5} articleNumber={articleNumber}>
            <li>{'Very fun to write after it\'s learned'}!</li>
          </Article>
          </ul>
        </Article>
        <Article order={6} articleNumber={articleNumber}>
          <h2 className="text-center">Cons</h2>
          <ul className="no-bullets features-list">
          <li>Features need to be installed à la carte.</li>
          <Article order={7} articleNumber={articleNumber}>
            <li>Limited guidance on best practices for project structure.</li>
          </Article>
          <Article order={8} articleNumber={articleNumber}>
            <li>Challenges traditional front-end conventions.</li>
          </Article>
          </ul>
        </Article>
      </div>
    );
  }
}
