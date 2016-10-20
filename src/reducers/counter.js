import {
  CLEAR_COUNTER,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from '../constants/actionTypes';

const counter = (state = {
  value: 0,
  lastAction: null,
  prevState: {
    lastAction: null,
    value: null
  }
}, action) => {
  switch (action.type) {
    case CLEAR_COUNTER:
      return {
        lastAction: CLEAR_COUNTER,
        value: 0,
        prevState: {
          lastAction: state.lastAction,
          value: state.value
        }
      };
    case INCREMENT_COUNTER:
      return {
        lastAction: INCREMENT_COUNTER,
        value: state.value + 1,
        prevState: {
          lastAction: state.lastAction,
          value: state.value
        }
      };
    case DECREMENT_COUNTER:
      return {
        lastAction: DECREMENT_COUNTER,
        value: state.value - 1,
        prevState: {
          lastAction: state.lastAction,
          value: state.value
        }
      };
    default:
      return state;
  }
};

export default counter;
