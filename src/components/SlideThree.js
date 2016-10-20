import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/styles';
import MyFirstComponent from './MyFirstComponent';

export default class SlideThree extends Component {
  render() {
    const { presentation: { slideNumber }, slideOrder, bgColor, color } = this.props;

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

    const codeString = 'import { Component } from \'react\';\n\nexport default class MyFirstComponent extends Component {\n\n  constructor(props) {\n    super(props);\n    this.state = { count: 0 };\n  }\n\n  increaseCount() {\n    this.setState((prevState) => ({\n      count: prevState.count + 1\n    }));\n  }\n\n  render() {\n    return (\n      <div className="flex column align-middle">\n        <button onClick={this.increaseCount.bind(this)}>\n          Increment      \n        </button>\n        <h2>The counter is set to {this.state.count}</h2>\n      </div>\n    )\n  }\n}';

    return (
      <div style={style} className={slideCls}>
        <h1>Creating a React Component</h1>
        <div className="code-container">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {codeString}
          </SyntaxHighlighter>
          <MyFirstComponent />
        </div>
      </div>
    );
  }
}
