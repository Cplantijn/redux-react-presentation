import React, { Component } from 'react';

export default class Article extends Component {
  render() {
    const { order, articleNumber, flex, alignCenter } = this.props;

    const articleCls = classnames({
      'hidden': order > articleNumber,
      'flex': flex == true,
      'align-center': alignCenter == true
    });

    return (
      <div className={articleCls}>
        {this.props.children}
      </div>
    )
  }
}
