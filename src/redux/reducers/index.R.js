import { combineReducers } from 'redux';
import ExampleReducer from './example.R';
import SignalRReducer from './signalR.R';

const reducers = {
  exampleState: ExampleReducer,
  signalRState: SignalRReducer,
};

const rootReducer = combineReducers(reducers);
export default rootReducer;
