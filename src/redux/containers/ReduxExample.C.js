import { connect } from 'react-redux';
import ReduxExample from '../../components/technologies-screen/ReduxExample';
import { getAPIDataPromise, sendSocketMessage } from '../actions/index.A';

const mapStateToProps = state => {
  return {
    exampleState: state.exampleState,
    signalRState: state.signalRState,
  };
};

const mapDispatchToProps = {
  getAPIDataPromise,
  sendSocketMessage,
};

const ReduxExampleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxExample);

export default ReduxExampleContainer;
