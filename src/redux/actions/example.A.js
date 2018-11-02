import { SOME_API_RETURN_SUCCESS, SOME_API_RETURN_FAIL } from './types.A';

// Actions - promises vs. async await:
// https://stackoverflow.com/questions/41930443/how-to-async-await-redux-thunk-actions

// Hit some API using a promise
const getAPIDataPromise = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: SOME_API_RETURN_SUCCESS, payload: data });
        return data;
      })
      .catch(function(error) {
        dispatch({ type: SOME_API_RETURN_FAIL });
        return error;
      });
  };
};

// Hit some API using async/await
const getAPIDataAsyncAwait = () => {
  return async dispatch => {
    const onSuccess = data => {
      dispatch({ type: SOME_API_RETURN_SUCCESS, payload: data });
      return data;
    };

    const onError = error => {
      dispatch({ type: SOME_API_RETURN_FAIL, payload: error });
      return error;
    };

    try {
      const success = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  };
};

const signal = () => {
  return dispatch => {
    dispatch({ type: 'SIGNALR' });
  };
};

export { getAPIDataPromise, getAPIDataAsyncAwait, signal };
