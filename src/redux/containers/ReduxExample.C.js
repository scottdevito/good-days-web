import { connect } from 'react-redux';
import ReduxExample from '../../components/ReduxExample';
import SignalRExample from '../../components/SignalRExample';
import {
  getAPIDataPromise,
  getAPIDataAsyncAwait,
  sendSocketMessage,
} from '../actions/index.A';

const mapStateToProps = state => {
  return {
    exampleState: state.exampleState,
    signalRState: state.signalRState,
  };
};

const mapDispatchToProps = {
  getAPIDataPromise,
  getAPIDataAsyncAwait,
  sendSocketMessage,
};

const ReduxExampleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxExample);

export default ReduxExampleContainer;
