import { SOME_API_RETURN_SUCCESS } from '../../constants/ActionTypes';

const exampleState = (state = [], action) => {
  switch (action.type) {
    case SOME_API_RETURN_SUCCESS:
      return Object.assign(...state, action.payload);
    default:
      return state;
  }
};

export default exampleState;
