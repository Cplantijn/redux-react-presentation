import { combineReducers } from 'redux';
import counter from './counter';
import presentation from './presentation';

const rootReducer = combineReducers({
  counter,
  presentation
});

export default rootReducer;
