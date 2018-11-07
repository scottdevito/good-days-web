import { SOME_API_RETURN_SUCCESS } from '../../constants/ActionTypes';

// Hit some API using a promise
const getAPIDataPromise = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: SOME_API_RETURN_SUCCESS, payload: data });
      })
      .catch(function(error) {
        console.error(error);
      });
  };
};

export { getAPIDataPromise };

// // Hit some API using async/await
// // https://stackoverflow.com/questions/41930443/how-to-async-await-redux-thunk-actions
// const getAPIDataAsyncAwait = () => {
//   return async dispatch => {
//     const onSuccess = data => {
//       dispatch({ type: SOME_API_RETURN_SUCCESS, payload: data });
//       return data;
//     };

//     const onError = error => {
//       dispatch({ type: SOME_API_RETURN_FAIL, payload: error });
//       return error;
//     };

//     try {
//       const success = await fetch(
//         'https://jsonplaceholder.typicode.com/todos/1'
//       );
//       return onSuccess(success);
//     } catch (error) {
//       return onError(error);
//     }
//   };
// };
