import { combineReducers } from 'redux';
import ExampleReducer from './example.R';
import SignalRReducer from './signalR.R';

const rootReducer = combineReducers({
  exampleState: ExampleReducer,
  signalRState: SignalRReducer,
});

export default rootReducer;
