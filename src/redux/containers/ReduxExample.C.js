import { connect } from 'react-redux';
import ReduxExample from '../../components/ReduxExample';
import { getAPIDataPromise, getAPIDataAsyncAwait } from '../actions/index.A';

const mapStateToProps = state => {
  return {
    exampleState: state.exampleState,
  };
};

const mapDispatchToProps = {
  getAPIDataPromise,
  getAPIDataAsyncAwait,
};

const ReduxExampleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxExample);

export default ReduxExampleContainer;
