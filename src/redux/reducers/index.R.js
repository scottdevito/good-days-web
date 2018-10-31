import { combineReducers } from 'redux';
import ExampleReducer from './example.R';

const rootReducer = combineReducers({
  exampleState: ExampleReducer,
});

export default rootReducer;
