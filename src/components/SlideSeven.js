import React, { Component } from 'react';
import { atomOneDark } from 'react-syntax-highlighter/dist/styles';
import SyntaxHighlighter from 'react-syntax-highlighter';
import CounterExample from './CounterExample';

export default class SlideSeven extends Component {
  render() {
    const { presentation: { slideNumber, articleNumber }, slideOrder, bgColor, color } = this.props;

const entryScript =
`// js/entry.js

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)`;

const directoryStructure =
`|-- js
|   |-- index.html
|   |-- entry.js
|   |-- actions
|       |-- index.js
|   |-- constants
|       |-- action-types.js
|   |-- containers
|       |-- App.js
|   |-- components
|       |-- CounterExample.js
|   |-- reducers
|       |-- input.js
|       |-- index.js
`;

const mockInitState =
`counter: {
  value: ${this.props.counter.prevState.value}
}
`;

const mockNewState =
`counter: {
  value: ${this.props.counter.value}
}
`;
const mockActionEmmitted =
`Object {type: "${this.props.counter.lastAction}"}
`
const actionScript =
`// js/actions/index.js

import {
  CLEAR_COUNTER,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from '../constants/action-types';

export function clearCounter() {
  return {
    type: CLEAR_COUNTER
  };
}

export function incrementCounter() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrementCounter() {
  return {
    type: DECREMENT_COUNTER
  };
}`;

const reducerScript =
`// js/reducers/counter.js

import {
  CLEAR_COUNTER,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from '../constants/action-types';

const counter = (state = {
  value: 0
}, action) => {
  switch (action.type) {
    case CLEAR_COUNTER:
      return {
        value: 0
      };
    case INCREMENT_COUNTER:
      return {
        value: state.value + 1
      };
    case DECREMENT_COUNTER:
      return {
        value: state.value - 1
      };
    default:
      return state;
  }
};

export default counter;
`
const counterScript =
`// js/components/CounterExample.js

import { Component } from 'react';

export default class CounterExample extends Component {
  render() {
    const {
      counter : { value },
      incrementCounter,
      decrementCounter,
      clearCounter
    } = this.props;

    return (
      <div>
        <p>Value of counter: {value}</p>
        <button
          onClick={incrementCounter}>
          Increment
        </button>

        <button
          onClick={decrementCounter}>
          Decrement
        </button>

        <button
          onClick={clearCounter}>
          Clear
        </button>
      </div>
    );
  }
}`;

const appScript =
`// js/containers/App.js

import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CounterExample from '../components/CounterExample';
import actions from '../actions';

class App extends Component {
  render() {
    return (
      <CounterExample {...this.props}/>
    );
  }
}

const mapStateToProps = state => ({
  return {
    ...state
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);`;

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
        <h2>{'Initial State -> Action -> Reducer -> New State'}</h2>
        <div className="flex row overflow-x">
          <div className="code-container-expanded flex">
            <SyntaxHighlighter language="javascript" style={atomOneDark}>
              {directoryStructure}
            </SyntaxHighlighter>

            <SyntaxHighlighter language="javascript" style={atomOneDark}>
              {entryScript}
            </SyntaxHighlighter>

            <SyntaxHighlighter language="javascript" style={atomOneDark}>
              {appScript}
            </SyntaxHighlighter>

            <SyntaxHighlighter language="javascript" style={atomOneDark}>
              {counterScript}
            </SyntaxHighlighter>

            <SyntaxHighlighter language="javascript" style={atomOneDark}>
              {actionScript}
            </SyntaxHighlighter>

            <SyntaxHighlighter language="javascript" style={atomOneDark}>
              {reducerScript}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="code-container-expanded flex space-around">
          <div className="col counter-initial-state">
            <h3>{'Initial (Prev) State'}</h3>
            <SyntaxHighlighter language="javascript" style={atomOneDark}>
              {mockInitState}
            </SyntaxHighlighter>
          </div>
          <div className="flex align-center align-middle column">
            <h3>{'Action Emmitted'}</h3>
            <i className="fa fa-arrow-circle-o-right fa-3x"></i>
          </div>
          <div className="col counter-action-type">
            <h3>{'Action Type Dispatched'}</h3>
            <SyntaxHighlighter language="javascript" style={atomOneDark}>
              {mockActionEmmitted}
            </SyntaxHighlighter>
          </div>
          <div className="flex align-center align-middle column">
            <h3>{'Through Reducer(s)'}</h3>
            <i className="fa fa-arrow-circle-o-right fa-3x"></i>
          </div>
          <div className="col counter-new-state">
            <h3>{'New State Returned'}</h3>
            <SyntaxHighlighter language="javascript" style={atomOneDark}>
              {mockNewState}
            </SyntaxHighlighter>
          </div>
          <div className="flex align-center align-middle">
            <i className="fa fa-arrow-circle-o-right fa-3x"></i>
          </div>
          <CounterExample {...this.props} />
        </div>
      </div>
    );
  }
}
